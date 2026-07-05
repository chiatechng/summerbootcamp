/**
 * ChiaTech browser-noise guard
 * Suppresses known Chrome extension promise noise that is reported against index.html.
 */
(function () {
  "use strict";

  const ignoredMessages = [
    "A listener indicated an asynchronous response by returning true, but the message channel closed before a response was received"
  ];

  function isIgnored(message) {
    return ignoredMessages.some(item => String(message || "").includes(item));
  }

  window.addEventListener("unhandledrejection", event => {
    const reason = event.reason || {};
    const message = reason.message || reason.toString?.() || String(reason);
    if (isIgnored(message)) event.preventDefault();
  });

  window.addEventListener("error", event => {
    if (isIgnored(event.message)) event.preventDefault();
  });
})();
