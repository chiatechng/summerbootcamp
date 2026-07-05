/**
 * ChiaTech Summer Bootcamp - PWA Helpers
 * Service Worker registration + install prompt support.
 */
(function () {
  "use strict";

  let deferredPrompt = null;
  const INSTALL_BTN_ID = "installAppButton";

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js")
        .then(reg => {
          reg.addEventListener("updatefound", () => {
            const newWorker = reg.installing;
            if (!newWorker) return;
            newWorker.addEventListener("statechange", () => {
              if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
                window.dispatchEvent(new CustomEvent("bootcamp-sw-update", { detail: reg }));
              }
            });
          });
        })
        .catch(err => console.warn("SW registration failed:", err));

      navigator.serviceWorker.addEventListener("message", event => {
        if (event.data && event.data.type === "BOOTCAMP_FLUSH_OUTBOX") {
          if (window.SheetAPI) window.SheetAPI.flushOutbox();
        }
      });
    });
  }

  window.addEventListener("beforeinstallprompt", event => {
    deferredPrompt = event;
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
    try {
      await deferredPrompt.prompt();
      const choice = await deferredPrompt.userChoice;
      if (choice && choice.outcome === "accepted") {
        deferredPrompt = null;
        renderInstallButton(false);
      }
    } catch (error) {
      deferredPrompt = null;
      renderInstallButton(false);
    }
  }

  function applyUpdate(reg) {
    if (reg && reg.waiting) {
      reg.waiting.postMessage({ action: "skipWaiting" });
    }
    window.location.reload();
  }

  window.PWA = { triggerInstall, applyUpdate, renderInstallButton };
  window._getInstallBtn = () => document.getElementById(INSTALL_BTN_ID);

  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById(INSTALL_BTN_ID);
    if (btn) btn.addEventListener("click", triggerInstall);
  });
})();
