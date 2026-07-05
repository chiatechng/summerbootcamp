/**
 * ChiaTech Summer Bootcamp - Sheet API Client
 * Calls the same-origin Netlify proxy at /api/portal.
 * Backend URLs and sheet identifiers must stay private in Netlify env vars.
 */
(function () {
  "use strict";

  function cfg() {
    return window.BOOTCAMP_CONFIG || {};
  }

  function proxyUrl() {
    return cfg().apiProxyUrl || "/api/portal";
  }

  function isConfigured() {
    return !!proxyUrl() && location.protocol !== "file:";
  }

  function isOffline() {
    return navigator.onLine === false;
  }

  function backendUnavailableMessage() {
    return "Portal backend is not available on this static server. Use Netlify Dev locally or deploy on Netlify with APPS_SCRIPT_URL configured.";
  }

  function payloadFor(action, payload) {
    return {
      action,
      payload: payload || {},
      clientTime: new Date().toISOString(),
      deviceId: window.OfflineDB ? window.OfflineDB.getDeviceId() : "unknown"
    };
  }

  async function proxyRequest(body, timeoutMs) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), timeoutMs || 20000);

    try {
      const res = await fetch(proxyUrl(), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
        cache: "no-store",
        signal: controller.signal
      });

      const text = await res.text();
      let data;
      try {
        data = JSON.parse(text);
      } catch (error) {
        data = {
          ok: false,
          networkError: true,
          message: res.status === 404 ? backendUnavailableMessage() : "Portal proxy returned a non-JSON response."
        };
      }

      if (!res.ok) {
        data.ok = false;
        if (!data.message) data.message = "Portal proxy request failed (" + res.status + ").";
      }

      return data;
    } catch (error) {
      return {
        ok: false,
        networkError: true,
        message: error.name === "AbortError" ? "Portal proxy timed out." : backendUnavailableMessage()
      };
    } finally {
      clearTimeout(timeout);
    }
  }

  async function requestWithRetry(action, payload, options) {
    options = options || {};
    const maxAttempts = options.maxAttempts || 2;
    const body = payloadFor(action, payload);
    let lastResult = { ok: false, message: "Request failed." };

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      lastResult = await proxyRequest(body, options.timeoutMs);
      if (lastResult.ok || !lastResult.networkError) return lastResult;

      if (attempt < maxAttempts) {
        await new Promise(resolve => setTimeout(resolve, attempt * 800));
      }
    }

    return lastResult;
  }

  async function post(action, payload, options) {
    options = options || {};

    if (!isConfigured()) {
      return { ok: false, message: "Portal server is not configured. Use Netlify Dev or the deployed Netlify URL." };
    }

    if (isOffline()) {
      if (!options.mustReachServer && window.OfflineDB) {
        window.OfflineDB.enqueueOutbox(action, payload);
        return { ok: false, queued: true, message: "Saved offline. It will sync when this device is online." };
      }
      return { ok: false, message: "You are offline. Connect to the internet and try again." };
    }

    const result = await requestWithRetry(action, payload, options);

    if (!result.ok && !options.mustReachServer && isOffline() && window.OfflineDB) {
      window.OfflineDB.enqueueOutbox(action, payload);
      return { ok: false, queued: true, message: "Saved offline. It will sync when this device is online." };
    }

    return result;
  }

  async function flushOutbox() {
    if (!window.OfflineDB || !isConfigured() || isOffline()) return;
    const pending = window.OfflineDB.readOutbox();
    if (!pending.length) return;

    const remaining = [];
    for (const item of pending) {
      const result = await post(item.action, item.payload, { mustReachServer: true });
      if (!result.ok && result.networkError) remaining.push(item);
    }
    window.OfflineDB.writeOutbox(remaining);
  }

  function sendBeacon(action, payload) {
    if (!isConfigured() || isOffline()) return false;
    requestWithRetry(action, payload, { timeoutMs: 8000, maxAttempts: 1 });
    return true;
  }

  window.SheetAPI = {
    isConfigured,
    flushOutbox,
    register: p => post("register", p),
    verifyCode: p => post("verifyCode", p, { mustReachServer: true }),
    checkDevice: p => post("checkDevice", p, { mustReachServer: true }),
    confirmDevice: p => post("confirmDevice", p, { mustReachServer: true }),
    getWeeklyContent: p => post("getWeeklyContent", p, { mustReachServer: true }),
    getDownloads: p => post("getDownloads", p, { mustReachServer: true }),
    adminLogin: p => post("adminLogin", p, { mustReachServer: true }),
    adminGetDashboard: p => post("adminGetDashboard", p, { mustReachServer: true }),
    adminUpdateContent: p => post("adminUpdateContent", p, { mustReachServer: true }),
    adminAddDownload: p => post("adminAddDownload", p, { mustReachServer: true }),
    adminApproveCode: p => post("adminApproveCode", p, { mustReachServer: true }),
    adminSendCodeByEmail: p => post("adminSendCodeByEmail", p, { mustReachServer: true }),
    adminRemoveDownload: p => post("adminRemoveDownload", p, { mustReachServer: true }),
    sendBeacon
  };
})();
