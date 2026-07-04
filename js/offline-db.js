/**
 * ChiaTech Summer Bootcamp — Offline Database
 * localStorage wrapper with typed helpers
 * v1.0.0
 */
(function () {
  "use strict";

  const PREFIX = "bootcamp_";

  const KEYS = {
    accessCode:     PREFIX + "access_code",
    studentProfile: PREFIX + "student_profile",
    deviceId:       PREFIX + "device_id",
    deviceToken:    PREFIX + "device_token",
    deviceVerified: PREFIX + "device_verified",
    contentCache:   PREFIX + "content_cache",
    progressMap:    PREFIX + "progress_map",
    practiceState:  PREFIX + "practice_state",
    adminToken:     PREFIX + "admin_token",
    outbox:         PREFIX + "api_outbox",
    pwaPrompt:      PREFIX + "pwa_deferred_prompt"
  };

  /* ─── Storage primitives ─── */
  function read(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      if (raw === null) return fallback;
      return JSON.parse(raw);
    } catch (_) {
      return fallback;
    }
  }

  function write(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (_) {
      return false;
    }
  }

  function remove(key) {
    try { localStorage.removeItem(key); return true; }
    catch (_) { return false; }
  }

  /* ─── Device fingerprint ─── */
  function generateDeviceId() {
    const parts = [
      navigator.userAgent.slice(0, 40),
      screen.width + "x" + screen.height,
      Intl.DateTimeFormat().resolvedOptions().timeZone || "",
      Math.random().toString(36).slice(2, 10)
    ];
    let hash = 0;
    const str = parts.join("|");
    for (let i = 0; i < str.length; i++) {
      hash = ((hash << 5) - hash) + str.charCodeAt(i);
      hash |= 0;
    }
    return "dev-" + Math.abs(hash).toString(16) + "-" + Date.now().toString(36);
  }

  function getDeviceId() {
    let id = read(KEYS.deviceId, null);
    if (!id) {
      id = generateDeviceId();
      write(KEYS.deviceId, id);
    }
    return id;
  }

  /* ─── Progress tracking ─── */
  function markWeekSeen(subjectId, classId, weekNum) {
    const map = read(KEYS.progressMap, {});
    const key = `${subjectId}|${classId}`;
    if (!map[key]) map[key] = [];
    if (!map[key].includes(weekNum)) map[key].push(weekNum);
    write(KEYS.progressMap, map);
  }

  function getSeenWeeks(subjectId, classId) {
    const map = read(KEYS.progressMap, {});
    return map[`${subjectId}|${classId}`] || [];
  }

  /* ─── Outbox for offline API queuing ─── */
  function readOutbox() { return read(KEYS.outbox, []); }
  function writeOutbox(items) { write(KEYS.outbox, items.slice(-200)); }
  function enqueueOutbox(action, payload) {
    const box = readOutbox();
    box.push({ action, payload, queuedAt: new Date().toISOString() });
    writeOutbox(box);
  }

  /* ─── Session helpers ─── */
  function getStudent() { return read(KEYS.studentProfile, null); }
  function getCode()    { return read(KEYS.accessCode, null); }
  function isLoggedIn() { return !!getCode() && !!getStudent(); }
  function getAdminToken() { return read(KEYS.adminToken, null); }
  function isAdmin()    { return !!getAdminToken(); }

  function saveSession(code, profile) {
    write(KEYS.accessCode, code);
    write(KEYS.studentProfile, profile);
  }

  function clearSession() {
    remove(KEYS.accessCode);
    remove(KEYS.studentProfile);
    remove(KEYS.adminToken);
    remove(KEYS.deviceToken);
    remove(KEYS.deviceVerified);
    remove(KEYS.practiceState);
  }

  /* ─── Content cache ─── */
  function cacheContent(key, data, ttlMinutes) {
    write(KEYS.contentCache + "_" + key, {
      data,
      expiresAt: Date.now() + (ttlMinutes || 60) * 60000
    });
  }

  function getCachedContent(key) {
    const cached = read(KEYS.contentCache + "_" + key, null);
    if (!cached) return null;
    if (Date.now() > cached.expiresAt) {
      remove(KEYS.contentCache + "_" + key);
      return null;
    }
    return cached.data;
  }

  /* ─── Exports ─── */
  window.OfflineDB = {
    KEYS,
    read, write, remove,
    getDeviceId,
    markWeekSeen, getSeenWeeks,
    readOutbox, writeOutbox, enqueueOutbox,
    getStudent, getCode, isLoggedIn,
    getAdminToken, isAdmin,
    saveSession, clearSession,
    cacheContent, getCachedContent
  };

})();
