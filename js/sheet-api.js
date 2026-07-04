/**
 * ChiaTech Summer Bootcamp — Sheet API Client
 * Communicates with Google Apps Script backend
 * v1.0.0
 */
(function () {
  "use strict";

  function cfg() { return window.BOOTCAMP_CONFIG || {}; }

  function isConfigured() {
    return /^https:\/\/script\.google\.com\/macros\/s\//.test(cfg().appsScriptUrl || "");
  }

  /* ─── Retry fetch with exponential backoff ─── */
  async function fetchWithRetry(url, options, maxAttempts) {
    maxAttempts = maxAttempts || 3;
    let lastErr;
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        const res = await fetch(url, options);
        const text = await res.text();
        let data;
        try { data = JSON.parse(text); }
        catch (_) { data = { ok: res.ok, raw: text }; }
        if (!res.ok) return { ok: false, message: data.message || "Request failed (" + res.status + ")" };
        return data;
      } catch (err) {
        lastErr = err;
        if (attempt < maxAttempts) {
          await new Promise(r => setTimeout(r, Math.pow(2, attempt) * 500));
        }
      }
    }
    return { ok: false, message: lastErr ? lastErr.message : "Network error" };
  }

  /* ─── Core POST ─── */
  async function post(action, payload, options) {
    options = options || {};

    if (!isConfigured()) {
      if (options.mustReachServer) {
        return { ok: false, message: "Portal server is not configured. Contact ChiaTech support." };
      }
      // Queue for later
      if (window.OfflineDB) window.OfflineDB.enqueueOutbox(action, payload);
      return { ok: false, queued: true, message: "Saved to offline queue. Will sync when online." };
    }

    const body = JSON.stringify({
      action,
      sheetId: cfg().sheetId,
      payload,
      clientTime: new Date().toISOString(),
      deviceId: window.OfflineDB ? window.OfflineDB.getDeviceId() : "unknown"
    });

    const result = await fetchWithRetry(cfg().appsScriptUrl, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body
    }, options.maxAttempts || 3);

    if (!result.ok && !options.mustReachServer && window.OfflineDB) {
      window.OfflineDB.enqueueOutbox(action, payload);
    }

    return result;
  }

  /* ─── Flush offline outbox ─── */
  async function flushOutbox() {
    if (!window.OfflineDB) return;
    const pending = window.OfflineDB.readOutbox();
    if (!pending.length) return;
    const remaining = [];
    for (const item of pending) {
      const result = await post(item.action, item.payload, { mustReachServer: true });
      if (!result.ok) remaining.push(item);
    }
    window.OfflineDB.writeOutbox(remaining);
  }

  /* ─── Beacon for page unload ─── */
  function sendBeacon(action, payload) {
    if (!isConfigured() || !navigator.sendBeacon) return false;
    const body = JSON.stringify({
      action,
      sheetId: cfg().sheetId,
      payload,
      clientTime: new Date().toISOString()
    });
    return navigator.sendBeacon(cfg().appsScriptUrl, new Blob([body], { type: "text/plain;charset=utf-8" }));
  }

  /* ─── Public API ─── */
  window.SheetAPI = {
    isConfigured,
    flushOutbox,
    // Student flows
    register:       p => post("register",       p),
    verifyCode:     p => post("verifyCode",     p, { mustReachServer: true }),
    checkDevice:    p => post("checkDevice",    p, { mustReachServer: true }),
    confirmDevice:  p => post("confirmDevice",  p, { mustReachServer: true }),
    // Content
    getWeeklyContent: p => post("getWeeklyContent", p, { mustReachServer: true }),
    getDownloads:     p => post("getDownloads",     p, { mustReachServer: true }),
    // Admin
    adminLogin:           p => post("adminLogin",           p, { mustReachServer: true }),
    adminGetDashboard:    p => post("adminGetDashboard",    p, { mustReachServer: true }),
    adminUpdateContent:   p => post("adminUpdateContent",   p, { mustReachServer: true }),
    adminAddDownload:     p => post("adminAddDownload",      p, { mustReachServer: true }),
    adminApproveCode:     p => post("adminApproveCode",      p, { mustReachServer: true }),
    adminSendCodeByEmail: p => post("adminSendCodeByEmail",  p, { mustReachServer: true }),
    adminRemoveDownload:  p => post("adminRemoveDownload",   p, { mustReachServer: true })
  };

})();
