# Mars Rejects — Floating Dock: full technical spec & implementation notes (for an experienced engineer)

## Goal (short)

Add a “floating dock” — a small fixed/overlay toolbar anchored to the viewport that:

* appears/disappears in sync with the page’s scroll / snap behavior,
* offers quick actions (the `<a>` at the path you gave is the trigger),
* is keyboard & screen-reader friendly, performs well on mobile, and coexists with Framer/scroll-snap containers.

Your JS selector:
`document.querySelector("#main > div > div.framer-iyizr2 > div.framer-1y2i1kd-container.hidden-1tn8rwz > div > div > a")`
(we’ll call this *triggerAnchor* below).

---

## High-level behaviour

1. **Trigger & dock relationship**

   * `triggerAnchor` is the in-DOM control that should *open* or *toggle* the floating dock (it may be an `<a>` inside a Framer container).
   * When activated (click or keyboard), the floating dock fades/slides into view. When deactivated or on scroll-away, it hides.

2. **Visibility rules (examples, adjustable)**

   * Dock appears when the page is between two snap sections (or when a given snap section is active), or when user scrolls up (or down) depending on design. Choose one rule; I provide code for both “on trigger” and “auto-show on scroll position”.
   * Use an `IntersectionObserver` to detect the relevant section(s) or the trigger’s visibility and toggle dock accordingly — avoids polling.

3. **Scroll-snap interplay**

   * Scroll snapping may cause abrupt viewport jumps. Do **not** use heavyweight layout reads inside scroll handlers. Use `requestAnimationFrame`, debounced handlers, or rely on `scrollend`-like detection through a small timer to detect when snapping finished.
   * If dock must appear immediately when a snap finishes, detect “scroll end” with a 100–200ms debounce after the last `scroll` event (or `scroll` + `wheel` detection) and then check which section is active (index using `getBoundingClientRect()` once).

4. **Touch & gesture**

   * Support tap to open. If you want drag-to-dismiss, attach pointer/touch handlers to detect vertical swipe and dismiss when delta passes threshold. Use passive listeners on scroll.

5. **Accessibility**

   * Dock should be a semantic toolbar/region: `role="toolbar"` or `role="navigation"` with `aria-label`.
   * Focus management: when the dock opens, focus moves into it (first control). When closed, focus returns to the trigger.
   * Keyboard: Escape closes dock. Enter/Space on trigger opens. Tab order should not trap the user.
   * Announce state: add `aria-expanded="false"` on the trigger and update it when the dock opens.

6. **Performance & rendering**

   * CSS `transform` (translateY) + `opacity` transitions only. Use `will-change: transform` sparingly.
   * Avoid layout thrashing: read DOM once in rAF if needed, batch writes. Use `IntersectionObserver` over `onscroll` when possible.
   * Respect `prefers-reduced-motion`.

7. **Framer integration caveats**

   * Framer may re-render or replace nodes. Use a `MutationObserver` (or wait-for-node helper) to rebind if the `triggerAnchor` gets replaced.
   * Framer components may set `pointer-events` / overlay layers — ensure dock z-index is high enough and test interactions with Framer overlays.

---

## HTML/CSS contract (recommended)

HTML (the dock inserted into `<body>` — keep it outside Framer containers):

```html
<!-- created by JS at runtime -->
<div id="floating-dock" class="floating-dock" role="toolbar" aria-label="Quick actions" aria-hidden="true">
  <button class="dock-btn" data-action="action1" aria-label="Action 1">A</button>
  <button class="dock-btn" data-action="action2" aria-label="Action 2">B</button>
  <button id="dock-close" aria-label="Close dock">✕</button>
</div>
```

CSS (critical bits — put in your main stylesheet):

```css
.floating-dock {
  position: fixed;
  right: 1rem;
  bottom: calc(1.25rem + env(safe-area-inset-bottom));
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding: 0.5rem;
  border-radius: 12px;
  background: rgba(18,18,20,0.92);
  backdrop-filter: blur(6px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.35);
  transform: translateY(120%);
  opacity: 0;
  transition: transform 280ms cubic-bezier(.22,.9,.28,1), opacity 180ms ease;
  z-index: 1200; /* test against Framer overlays */
  pointer-events: none;
  will-change: transform, opacity;
}

/* visible state */
.floating-dock.is-open {
  transform: translateY(0%);
  opacity: 1;
  pointer-events: auto;
}

/* Respect reduced motion */
@media (prefers-reduced-motion: reduce) {
  .floating-dock {
    transition: none;
    transform: none;
    opacity: 1;
  }
}
```

Notes:

* Use `env(safe-area-inset-bottom)` for iOS safe-area.
* Keep `pointer-events:none` when hidden to avoid accidental overlaying click areas.

---

## Robust vanilla JS implementation (drop-in module)

This example:

* safely waits for the trigger selector (handles dynamic Framer load),
* creates the dock,
* uses `IntersectionObserver` (or scroll debounce fallback),
* handles focus + accessibility,
* dispatches custom events for analytics / hooks.

```js
/* floatingDock.js — paste at end of body or load as module with defer */
(function initFloatingDock() {
  'use strict';

  // <-- USER: put your long selector here
  const TRIGGER_SELECTOR = '#main > div > div.framer-iyizr2 > div.framer-1y2i1kd-container.hidden-1tn8rwz > div > div > a';
  const DOCK_ID = 'floating-dock';

  // wait for element utility (supports Framer dynamic DOM)
  function waitForSelector(selector, timeout = 8000) {
    return new Promise((resolve, reject) => {
      const el = document.querySelector(selector);
      if (el) return resolve(el);

      const observer = new MutationObserver(() => {
        const found = document.querySelector(selector);
        if (found) {
          observer.disconnect();
          resolve(found);
        }
      });
      observer.observe(document.documentElement, { childList: true, subtree: true });

      if (timeout > 0) {
        setTimeout(() => {
          observer.disconnect();
          reject(new Error('timeout waiting for selector: ' + selector));
        }, timeout);
      }
    });
  }

  function createDock() {
    if (document.getElementById(DOCK_ID)) return document.getElementById(DOCK_ID);
    const dock = document.createElement('div');
    dock.id = DOCK_ID;
    dock.className = 'floating-dock';
    dock.setAttribute('role', 'toolbar');
    dock.setAttribute('aria-label', 'Quick actions');
    dock.setAttribute('aria-hidden', 'true');
    dock.innerHTML = `
      <button class="dock-btn" data-action="one" aria-label="Action One">One</button>
      <button class="dock-btn" data-action="two" aria-label="Action Two">Two</button>
      <button class="dock-close" aria-label="Close floating dock">✕</button>
    `;
    document.body.appendChild(dock);
    return dock;
  }

  function openDock(dock, trigger) {
    if (!dock) return;
    dock.classList.add('is-open');
    dock.setAttribute('aria-hidden', 'false');
    trigger.setAttribute('aria-expanded', 'true');
    // focus management
    const first = dock.querySelector('.dock-btn');
    if (first) first.focus();
    // analytics hook
    document.dispatchEvent(new CustomEvent('floatingDock:open', { detail: { source: 'trigger' } }));
  }

  function closeDock(dock, trigger) {
    if (!dock) return;
    dock.classList.remove('is-open');
    dock.setAttribute('aria-hidden', 'true');
    trigger.setAttribute('aria-expanded', 'false');
    trigger.focus();
    document.dispatchEvent(new CustomEvent('floatingDock:close'));
  }

  function attachHandlers(trigger, dock) {
    // ensure trigger is keyboard accessible
    trigger.setAttribute('role', 'button');
    trigger.setAttribute('tabindex', '0');
    trigger.setAttribute('aria-expanded', 'false');
    trigger.setAttribute('aria-controls', DOCK_ID);

    const closeBtn = dock.querySelector('.dock-close');

    const onTrigger = (ev) => {
      ev.preventDefault();
      const isOpen = dock.classList.contains('is-open');
      if (isOpen) closeDock(dock, trigger); else openDock(dock, trigger);
    };

    trigger.addEventListener('click', onTrigger);
    trigger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onTrigger(e); }
    });

    closeBtn.addEventListener('click', () => closeDock(dock, trigger));
    dock.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeDock(dock, trigger);
    });

    // If dock interacts with scroll: close on scroll (optional)
    let scrollCloseTimer = null;
    window.addEventListener('scroll', () => {
      if (dock.classList.contains('is-open')) {
        clearTimeout(scrollCloseTimer);
        // close after short inactivity to avoid closing while user is reading
        scrollCloseTimer = setTimeout(() => closeDock(dock, trigger), 700);
      }
    }, { passive: true });
  }

  // smart show/hide by observing the trigger's visibility or a target section
  function wireAutoVisibility(trigger, dock) {
    try {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          // when trigger is in view, keep dock hidden (example rule).
          // You can invert this behavior depending on UX: show when trigger is offscreen etc.
          if (entry.isIntersecting) {
            dock.classList.remove('visible-auto'); // CSS can handle a different visible class
          } else {
            dock.classList.add('visible-auto');
          }
        });
      }, { root: null, threshold: 0.2 });
      io.observe(trigger);
    } catch (e) {
      // fallback: no IntersectionObserver
    }
  }

  // initialize
  waitForSelector(TRIGGER_SELECTOR).then((trigger) => {
    const dock = createDock();
    attachHandlers(trigger, dock);
    wireAutoVisibility(trigger, dock);

    // If Framer re-renders and replaces trigger, rebind automatically
    const mutationObserver = new MutationObserver(() => {
      if (!document.contains(trigger)) {
        // rebind
        waitForSelector(TRIGGER_SELECTOR, 5000).then((newTrigger) => {
          trigger = newTrigger;
          attachHandlers(trigger, dock);
        }).catch(() => {});
      }
    });
    mutationObserver.observe(document.documentElement, { childList: true, subtree: true });
  }).catch((err) => {
    // selector wasn't found within timeout — log, but avoid noisy console in prod
    console.warn('Floating dock: trigger not found', err);
  });

})();
```

**Where to place this script**

* Load with `defer` or at end of body. If bundling, export as a module and initialize after Framer runtime is ready.
* Keep CSS in main stylesheet to avoid FOUC.

---

## Accessibility checklist (must-haves)

* [ ] `role="toolbar"` or `navigation` on dock; `aria-label` present.
* [ ] `aria-expanded` on trigger updates correctly.
* [ ] Keyboard: Enter/Space toggle, Esc closes, Tab order correct.
* [ ] Focus moved into dock on open and returned on close.
* [ ] Test with screen readers (NVDA, VoiceOver).
* [ ] Ensure color contrast of dock controls >= 4.5:1 (WCAG AA) or 3:1 for large text.

---

## Testing & QA

* **Unit tests**: export small functions (e.g., `openDock`, `closeDock`, `waitForSelector`) and assert DOM state changes.
* **E2E**: Playwright test steps:

  1. Load the page.
  2. Wait for trigger selector.
  3. Click trigger; expect dock `is-open` class and focus inside.
  4. Press Escape; expect dock closed and focus returned.
* **Accessibility**: run `axe-core` on page when dock is open and closed.
* **Performance**: Lighthouse check (Ensure dock scripts are lazy and small; avoid reflows on scroll).

---

## Analytics & instrumentation

* Dispatch custom events like `floatingDock:open`, `floatingDock:close`, `floatingDock:action` with `detail` including `source` and `timestamp`. This decouples analytics from UI code.

---

## Edge cases & gotchas

* **Framer DOM mutations**: trigger may be recreated; handle rebinds (provided).
* **Anchor `href`**: if `triggerAnchor` is an `<a href="...">`, choose whether to `preventDefault()` (we do) — only do so if the dock is supposed to intercept navigation. Otherwise clone the anchor behaviour and avoid blocking expected navigation.
* **Overlay stacking**: Framer modal overlays may have higher z-index. Coordinate z-index with design system.
* **Multiple triggers / responsive variants**: If Framer renders multiple triggers (mobile vs desktop), use a stable `data-` attribute or inject the dock into the Framer component instead.
* **Snap animation timing**: If you must show dock exactly after snap finishes, use a `150ms` debounce after the last scroll event to detect the final snap position; avoid heavy computations during scroll.

---

## Integration notes specific to your selector & Framer site

* The selector suggests the trigger is inside a Framer container (`framer-...`). Framer frequently swaps nodes. Use the `waitForSelector` + `MutationObserver` pattern above to reattach if the node is replaced.
* Don’t rely on class names generated by Framer for long-term stability (they can change); prefer setting a stable `data-dock-trigger="true"` attribute on the Framer layer you control, and select on that attribute instead. If you can modify Framer layer props, add such an attribute — it's the most robust fix.

---

## Deliverables you can paste into the codebase

1. The CSS block above (into global stylesheet).
2. The JS module above (defer script or bundle).
3. Small Framer layer change: add `data-dock-trigger="true"` to the layer that should act as trigger (then change `TRIGGER_SELECTOR` to `[data-dock-trigger="true"]` to avoid brittle long selectors).