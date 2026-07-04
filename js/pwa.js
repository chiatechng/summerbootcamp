/**
 * ChiaTech Summer Bootcamp — PWA Helpers
 * Service Worker registration + Install prompt
 * v1.0.0
 */
(function () {
  "use strict";

  let deferredPrompt = null;
  const INSTALL_BTN_ID = "installAppButton";

  /* ─── Service Worker Registration ─── */
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js")
        .then(reg => {
          // Listen for SW updates
          reg.addEventListener("updatefound", () => {
            const newWorker = reg.installing;
            if (!newWorker) return;
            newWorker.addEventListener("statechange", () => {
              if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
                // New content available — notify app
                window.dispatchEvent(new CustomEvent("bootcamp-sw-update", { detail: reg }));
              }
            });
          });
        })
        .catch(err => console.warn("SW registration failed:", err));

      // Message handler from SW
      navigator.serviceWorker.addEventListener("message", event => {
        if (event.data && event.data.type === "BOOTCAMP_FLUSH_OUTBOX") {
          if (window.SheetAPI) window.SheetAPI.flushOutbox();
        }
      });
    });
  }

  /* ─── Install prompt ─── */
  window.addEventListener("beforeinstallprompt", e => {
    e.preventDefault();
    deferredPrompt = e;
    window.dispatchEvent(new Event("bootcamp-install-ready"));
    renderInstallButton(true);
  });

  window.addEventListener("appinstalled", () => {
    deferredPrompt = null;
    renderInstallButton(false);
    window.dispatchEvent(new Event("bootcamp-install-complete"));
  });

  function renderInstallButton(show) {
    const btn = document.getElementById(INSTALL_BTN_ID);
    if (!btn) return;
    if (show && deferredPrompt) {
      btn.classList.remove("hidden");
    } else {
      btn.classList.add("hidden");
    }
  }

  async function triggerInstall() {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      deferredPrompt = null;
      renderInstallButton(false);
    }
  }

  /* ─── Apply SW update ─── */
  function applyUpdate(reg) {
    if (reg && reg.waiting) {
      reg.waiting.postMessage({ action: "skipWaiting" });
    }
    window.location.reload();
  }

  /* ─── Exports ─── */
  window.PWA = { triggerInstall, applyUpdate, renderInstallButton };
  window._getInstallBtn = () => document.getElementById(INSTALL_BTN_ID);

  // Wire install button once DOM ready
  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById(INSTALL_BTN_ID);
    if (btn) btn.addEventListener("click", triggerInstall);
  });

})();
