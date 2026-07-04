/**
 * ChiaTech Summer Bootcamp — Google Apps Script Backend
 * code.gs — Full implementation for Google Sheets API
 *
 * Spreadsheet: https://docs.google.com/spreadsheets/d/1mL5t37Ly_Qpcbvmb9xOAeiN_8QVUzVnIE_iKUKA8QvQ
 *
 * HOW TO DEPLOY:
 * 1. Open https://script.google.com
 * 2. Create a new project named "ChiaTech Summer Bootcamp"
 * 3. Paste this entire file into Code.gs
 * 4. Click Deploy → New deployment → Web App
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Copy the deployment URL into js/curriculum-data.js → BOOTCAMP_CONFIG.appsScriptUrl
 *
 * SHEET NAMES REQUIRED (auto-created if missing):
 * - REGISTRATIONDETAILS
 * - ACCESSCODE
 * - ADMINPANEL
 * - DEVICELOG    (auto-created)
 * - CONTENTMETA  (auto-created)
 * - DOWNLOADS    (auto-created)
 */

/* ═══════════ CONFIG ═══════════ */
const SPREADSHEET_ID  = "1mL5t37Ly_Qpcbvmb9xOAeiN_8QVUzVnIE_iKUKA8QvQ";
const ADMIN_SHEET     = "ADMINPANEL";
const REG_SHEET       = "REGISTRATIONDETAILS";
const CODE_SHEET      = "ACCESSCODE";
const DEVICE_SHEET    = "DEVICELOG";
const CONTENT_SHEET   = "CONTENTMETA";
const DOWNLOADS_SHEET = "DOWNLOADS";
const PORTAL_NAME     = "ChiaTech Summer Bootcamp";
const PORTAL_EMAIL    = "chiatech01@gmail.com";
const PORTAL_URL      = "https://summer.chiatechsolutions.com";

/* ═══════════ ENTRY POINTS ═══════════ */

function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents || "{}");
    const action   = body.action   || "";
    const payload  = body.payload  || {};
    const deviceId = body.deviceId || "";

    let result;
    switch (action) {
      case "register":            result = handleRegister(payload);                    break;
      case "verifyCode":          result = handleVerifyCode(payload, deviceId);        break;
      case "checkDevice":         result = handleCheckDevice(payload, deviceId);       break;
      case "confirmDevice":       result = handleConfirmDevice(payload, deviceId);     break;
      case "getWeeklyContent":    result = handleGetWeeklyContent(payload);            break;
      case "getDownloads":        result = handleGetDownloads(payload);                break;
      case "adminLogin":          result = handleAdminLogin(payload);                  break;
      case "adminGetDashboard":   result = handleAdminDashboard(payload);              break;
      case "adminUpdateContent":  result = handleAdminUpdateContent(payload);          break;
      case "adminAddDownload":    result = handleAdminAddDownload(payload);            break;
      case "adminApproveCode":    result = handleAdminApproveCode(payload);            break;
      case "adminSendCodeByEmail":result = handleAdminSendCodeByEmail(payload);        break;
      case "adminRemoveDownload": result = handleAdminRemoveDownload(payload);         break;
      default:                    result = { ok: false, message: "Unknown action: " + action };
    }

    return jsonResponse(result);
  } catch (err) {
    return jsonResponse({ ok: false, message: "Server error: " + err.message });
  }
}

function doGet(e) {
  const action = (e.parameter && e.parameter.action) || "";
  if (action === "confirmDevice") {
    return handleDeviceConfirmLink(e.parameter);
  }
  return HtmlService.createHtmlOutput(
    "<h2>" + PORTAL_NAME + " API</h2><p>POST requests only. Visit <a href='" + PORTAL_URL + "'>" + PORTAL_URL + "</a></p>"
  );
}

/* ═══════════ HELPERS ═══════════ */

function jsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

function getSheet(name) {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sh = ss.getSheetByName(name);
  if (!sh) {
    sh = ss.insertSheet(name);
    // Add headers for new sheets
    switch (name) {
      case DEVICE_SHEET:
        sh.appendRow(["Email", "DeviceId", "Token", "Confirmed", "AddedAt", "LastSeen"]);
        break;
      case CONTENT_SHEET:
        sh.appendRow(["Week", "ClassLevel", "SubjectId", "Title", "URL", "ReleaseDate", "AddedAt"]);
        break;
      case DOWNLOADS_SHEET:
        sh.appendRow(["Title", "ClassLevel", "Subject", "Type", "URL", "AddedAt"]);
        break;
    }
  }
  return sh;
}

function sheetToObjects(sheet, headerRow) {
  headerRow = headerRow || 1;
  const data = sheet.getDataRange().getValues();
  if (data.length <= headerRow) return [];
  const headers = data[headerRow - 1].map(h => String(h).trim());
  return data.slice(headerRow).map(row => {
    const obj = {};
    headers.forEach((h, i) => { if (h) obj[h] = row[i]; });
    return obj;
  });
}

function generateToken(len) {
  len = len || 16;
  const chars = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
  let t = "";
  for (let i = 0; i < len; i++) t += chars[Math.floor(Math.random() * chars.length)];
  return t;
}

function now() { return new Date().toISOString(); }

/* ═══════════ REGISTRATION ═══════════ */

function handleRegister(p) {
  if (!p.name || !p.email || !p.phone || !p.classLevel) {
    return { ok: false, message: "Missing required fields: name, email, phone, classLevel." };
  }

  const regSheet = getSheet(REG_SHEET);
  const existing = sheetToObjects(regSheet);

  // Check duplicate
  const dup = existing.find(r => String(r["Student Email Address"]).toLowerCase() === p.email.toLowerCase());
  if (dup) {
    return { ok: false, message: "This email is already registered. Contact ChiaTech if you need help." };
  }

  const row = [
    p.name,
    p.phone,
    p.email,
    p.address || "",
    p.parent  || p.address || "",
    p.classLevel,
    p.subjects || "",
    now()
  ];

  regSheet.appendRow(row);

  // Send confirmation email to student
  try {
    MailApp.sendEmail({
      to: p.email,
      subject: "✅ " + PORTAL_NAME + " — Registration Received",
      htmlBody: registrationEmailHtml(p)
    });
  } catch (_) { /* email optional */ }

  // Notify admin
  try {
    MailApp.sendEmail({
      to: PORTAL_EMAIL,
      subject: "🆕 New Registration: " + p.name + " (" + p.classLevel + ")",
      body: "New registration received:\n\nName: " + p.name +
            "\nEmail: " + p.email +
            "\nPhone: " + p.phone +
            "\nClass: " + p.classLevel +
            "\nSubjects: " + (p.subjects || "") +
            "\n\nLog in to the Admin Panel to send an access code."
    });
  } catch (_) {}

  return { ok: true, message: "Registration submitted successfully." };
}

function registrationEmailHtml(p) {
  return `
    <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;background:#0d1221;color:#e8edf5;padding:2rem;border-radius:12px">
      <img src="https://summer.chiatechsolutions.com/assets/logo.png" alt="ChiaTech" style="height:40px;margin-bottom:1.5rem">
      <h2 style="color:#f5a623;margin-bottom:0.5rem">Registration Received! 🎉</h2>
      <p>Dear <strong>${p.name}</strong>,</p>
      <p>Your registration for <strong>${PORTAL_NAME} 2026</strong> has been received successfully.</p>
      <table style="width:100%;margin:1.5rem 0;border-collapse:collapse;font-size:0.875rem">
        <tr><td style="padding:0.5rem;color:#8895b3;border-bottom:1px solid #1e2d4a">Class</td><td style="padding:0.5rem;border-bottom:1px solid #1e2d4a"><strong>${p.classLevel}</strong></td></tr>
        <tr><td style="padding:0.5rem;color:#8895b3;border-bottom:1px solid #1e2d4a">Subjects</td><td style="padding:0.5rem;border-bottom:1px solid #1e2d4a">${p.subjects || "—"}</td></tr>
      </table>
      <div style="background:rgba(245,166,35,0.1);border:1px solid rgba(245,166,35,0.3);border-radius:8px;padding:1rem;margin-bottom:1.5rem">
        <strong style="color:#f5a623">Next Steps:</strong>
        <ol style="margin:0.75rem 0 0 1rem;line-height:1.8">
          <li>Make your payment: ₦2,500 per subject per month</li>
          <li>Contact ChiaTech: <a href="tel:+2347037689917" style="color:#f5a623">+234 703 768 9917</a></li>
          <li>Receive your <strong>Access Code</strong> within 24 hours</li>
          <li>Enter code at <a href="${PORTAL_URL}" style="color:#f5a623">${PORTAL_URL}</a></li>
        </ol>
      </div>
      <p style="color:#8895b3;font-size:0.8rem">© ${new Date().getFullYear()} ChiaTech Solutions & Resources Ltd · <a href="${PORTAL_URL}" style="color:#f5a623">${PORTAL_URL}</a></p>
    </div>`;
}

/* ═══════════ CODE VERIFICATION ═══════════ */

function handleVerifyCode(p, deviceId) {
  const code = (p.code || "").trim().toUpperCase();
  if (!code) return { ok: false, message: "No code provided." };

  const codeSheet = getSheet(CODE_SHEET);
  const records   = sheetToObjects(codeSheet);

  const match = records.find(r => (String(r["CODE"] || r["code"]).trim().toUpperCase()) === code);
  if (!match) return { ok: false, message: "Invalid access code. Please check your code and try again." };

  // Build student profile from REGISTRATIONDETAILS using email
  const email     = String(match["Student Email Address"] || match["email"] || "").toLowerCase();
  const regSheet  = getSheet(REG_SHEET);
  const regAll    = sheetToObjects(regSheet);
  const regMatch  = regAll.find(r => String(r["Student Email Address"] || "").toLowerCase() === email) || {};

  const student = {
    name:       String(match["Student Full Name"]    || regMatch["Student Full Name"]    || ""),
    phone:      String(match["Student Phone Number"] || regMatch["Student Phone Number"] || ""),
    email:      email,
    classLevel: String(regMatch["Class Registering For"] || ""),
    subjects:   parseSubjects(String(regMatch["Select Subjects (₦2,500 per subject per month)"] || ""))
  };

  // Device check
  return handleCheckDevice({ code }, deviceId, student);
}

function parseSubjects(raw) {
  return raw.split(",").map(s => s.trim()).filter(Boolean);
}

/* ═══════════ DEVICE MANAGEMENT ═══════════ */

function handleCheckDevice(p, deviceId, student) {
  const code = (p.code || "").trim().toUpperCase();
  if (!deviceId) return { ok: true, student };  // No device tracking if no ID provided

  const devSheet = getSheet(DEVICE_SHEET);
  const devices  = sheetToObjects(devSheet);

  // Find existing confirmed device for this code
  const existing = devices.filter(d => String(d["Email"] || "").toLowerCase() === (student ? student.email : "").toLowerCase());
  const confirmed = existing.find(d => String(d["Confirmed"]) === "TRUE" && String(d["DeviceId"]) === deviceId);

  if (!existing.length || confirmed) {
    // First time or same device — log and allow
    if (!confirmed && deviceId) {
      devSheet.appendRow([student ? student.email : "", deviceId, "", "TRUE", now(), now()]);
    } else if (confirmed) {
      // Update last seen
      updateDeviceLastSeen(devSheet, devices, deviceId);
    }
    return { ok: true, student };
  }

  // Check if this exact device is already confirmed
  const thisDevice = existing.find(d => String(d["DeviceId"]) === deviceId && String(d["Confirmed"]) === "TRUE");
  if (thisDevice) {
    updateDeviceLastSeen(devSheet, devices, deviceId);
    return { ok: true, student };
  }

  // New device — generate token, send confirmation email
  const token = generateToken(12);
  devSheet.appendRow([student ? student.email : "", deviceId, token, "FALSE", now(), now()]);

  // Send device confirmation email
  try {
    const confirmUrl = PORTAL_URL + "/index.html?action=confirmDevice&token=" + token + "&deviceId=" + encodeURIComponent(deviceId);
    MailApp.sendEmail({
      to: student ? student.email : "",
      subject: "🔐 " + PORTAL_NAME + " — New Device Login Attempt",
      htmlBody: deviceConfirmEmailHtml(student, confirmUrl, token)
    });
  } catch (_) {}

  return {
    ok: false,
    requiresDeviceConfirmation: true,
    email: student ? student.email : "",
    deviceToken: token,
    message: "A new device was detected. A confirmation email has been sent to " + (student ? student.email : "your registered email") + "."
  };
}

function handleConfirmDevice(p, deviceId) {
  const token = (p.token || "").trim();
  if (!token || !deviceId) return { ok: false, message: "Missing token or device ID." };

  const devSheet = getSheet(DEVICE_SHEET);
  const data     = devSheet.getDataRange().getValues();
  const headers  = data[0].map(h => String(h).trim());
  const tokenIdx   = headers.indexOf("Token");
  const devIdx     = headers.indexOf("DeviceId");
  const confirmedIdx = headers.indexOf("Confirmed");

  for (let i = 1; i < data.length; i++) {
    if (String(data[i][tokenIdx]).trim() === token && String(data[i][devIdx]).trim() === deviceId) {
      devSheet.getRange(i + 1, confirmedIdx + 1).setValue("TRUE");

      // Re-fetch student
      const email = String(data[i][headers.indexOf("Email")]).toLowerCase();
      const regSheet = getSheet(REG_SHEET);
      const regAll   = sheetToObjects(regSheet);
      const regMatch = regAll.find(r => String(r["Student Email Address"] || "").toLowerCase() === email) || {};
      const codeSheet = getSheet(CODE_SHEET);
      const codeAll  = sheetToObjects(codeSheet);
      const codeMatch = codeAll.find(r => String(r["Student Email Address"] || "").toLowerCase() === email) || {};

      const student = {
        name:       String(regMatch["Student Full Name"] || ""),
        phone:      String(regMatch["Student Phone Number"] || ""),
        email:      email,
        classLevel: String(regMatch["Class Registering For"] || ""),
        subjects:   parseSubjects(String(regMatch["Select Subjects (₦2,500 per subject per month)"] || ""))
      };
      return { ok: true, student };
    }
  }
  return { ok: false, message: "Token not found or already expired. Please try logging in again." };
}

function handleDeviceConfirmLink(params) {
  const token    = params.token    || "";
  const deviceId = params.deviceId || "";
  const result   = handleConfirmDevice({ token }, deviceId);
  const msg = result.ok
    ? "✅ Device confirmed! You can now log in to ChiaTech Summer Bootcamp on this device."
    : "❌ Confirmation failed: " + result.message;
  return HtmlService.createHtmlOutput(
    "<html><head><meta charset='UTF-8'><title>ChiaTech — Device Confirm</title><meta http-equiv='refresh' content='3;url=" + PORTAL_URL + "'></head>" +
    "<body style='font-family:Arial;text-align:center;padding:3rem;background:#080c1a;color:#e8edf5'>" +
    "<h2 style='color:#f5a623'>ChiaTech Summer Bootcamp</h2><p>" + msg + "</p>" +
    "<p>Redirecting to portal in 3 seconds... <a href='" + PORTAL_URL + "' style='color:#f5a623'>Click here if not redirected.</a></p></body></html>"
  );
}

function updateDeviceLastSeen(devSheet, devices, deviceId) {
  const data = devSheet.getDataRange().getValues();
  const headers = data[0].map(h => String(h).trim());
  const devIdx  = headers.indexOf("DeviceId");
  const lsIdx   = headers.indexOf("LastSeen");
  for (let i = 1; i < data.length; i++) {
    if (String(data[i][devIdx]) === deviceId) {
      devSheet.getRange(i + 1, lsIdx + 1).setValue(now());
      return;
    }
  }
}

function deviceConfirmEmailHtml(student, confirmUrl, token) {
  return `
    <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;background:#0d1221;color:#e8edf5;padding:2rem;border-radius:12px">
      <h2 style="color:#f5a623">🔐 New Device Detected</h2>
      <p>Dear <strong>${student ? student.name : "Student"}</strong>,</p>
      <p>A login attempt was detected on a <strong>new device</strong> for your ${PORTAL_NAME} account.</p>
      <p>If this was you, click the button below to confirm this device:</p>
      <div style="text-align:center;margin:2rem 0">
        <a href="${confirmUrl}" style="background:#f5a623;color:#000;padding:1rem 2rem;border-radius:8px;text-decoration:none;font-weight:bold;font-size:1rem">
          ✅ Confirm This Device
        </a>
      </div>
      <p style="font-size:0.8rem;color:#8895b3">Or copy this token into the portal manually: <strong style="color:#f5a623">${token}</strong></p>
      <p style="font-size:0.8rem;color:#8895b3">If you did not attempt to log in, ignore this email. Your account remains secure.</p>
    </div>`;
}

/* ═══════════ WEEKLY CONTENT ═══════════ */

function handleGetWeeklyContent(p) {
  const code  = (p.code || "").trim().toUpperCase();
  const today = new Date();

  // Verify code first
  const codeSheet = getSheet(CODE_SHEET);
  const codes     = sheetToObjects(codeSheet);
  const match     = codes.find(r => String(r["CODE"] || r["code"] || "").trim().toUpperCase() === code);
  if (!match) return { ok: false, message: "Invalid code." };

  // Get content visible for today
  const contentSheet  = getSheet(CONTENT_SHEET);
  const allContent    = sheetToObjects(contentSheet);
  const classLevel    = p.classLevel || "";
  const subjects      = Array.isArray(p.subjects) ? p.subjects : [];

  const visible = allContent.filter(c => {
    const rd = new Date(c["ReleaseDate"] || c["releaseDate"] || "");
    const matchClass   = !classLevel || String(c["ClassLevel"] || "").toUpperCase() === classLevel.toUpperCase();
    const matchSubject = !subjects.length || subjects.includes(String(c["SubjectId"] || ""));
    const released     = !isNaN(rd.getTime()) && rd <= today;
    return matchClass && matchSubject && released;
  });

  return {
    ok: true,
    content: visible.map(c => ({
      week:       c["Week"],
      classLevel: c["ClassLevel"],
      subjectId:  c["SubjectId"],
      title:      c["Title"],
      url:        c["URL"],
      releaseDate:c["ReleaseDate"]
    }))
  };
}

/* ═══════════ DOWNLOADS ═══════════ */

function handleGetDownloads(p) {
  const code = (p.code || "").trim().toUpperCase();

  // Verify code
  const codeSheet = getSheet(CODE_SHEET);
  const codes     = sheetToObjects(codeSheet);
  if (!codes.find(r => String(r["CODE"] || r["code"] || "").trim().toUpperCase() === code)) {
    return { ok: false, message: "Invalid code." };
  }

  const dlSheet  = getSheet(DOWNLOADS_SHEET);
  const all      = sheetToObjects(dlSheet);
  const classLevel = (p.classLevel || "").toUpperCase();

  const filtered = all.filter(d => {
    const dc = String(d["ClassLevel"] || "ALL").toUpperCase();
    return dc === "ALL" || dc === classLevel;
  });

  return {
    ok: true,
    downloads: filtered.map(d => ({
      title:      d["Title"],
      classLevel: d["ClassLevel"],
      subject:    d["Subject"],
      type:       d["Type"],
      url:        d["URL"],
      icon:       "📄"
    }))
  };
}

/* ═══════════ ADMIN ═══════════ */

function getAdminCode() {
  const sh = getSheet(ADMIN_SHEET);
  const data = sh.getDataRange().getValues();
  // Look for ADMINPANELCODE value — first column, first data row
  for (let i = 1; i < data.length; i++) {
    const val = String(data[i][0] || "").trim();
    if (val) return val;
  }
  // Also check row 2, column 1 (if header is ADMINPANELCODE)
  if (data.length >= 2) return String(data[1][0] || "").trim();
  return "";
}

function validateAdminToken(adminToken) {
  // Simple: admin token is a salted hash of the admin code stored in session
  // For simplicity we store the raw admin code as the token with a prefix
  if (!adminToken) return false;
  const adminCode = getAdminCode();
  return adminToken === ("ADMIN_" + adminCode);
}

function handleAdminLogin(p) {
  const adminCode = getAdminCode();
  if (!adminCode) return { ok: false, message: "Admin code not configured. Add it to the ADMINPANEL sheet." };
  if ((p.adminCode || "").trim() !== adminCode) {
    return { ok: false, message: "Incorrect admin code." };
  }
  return { ok: true, adminToken: "ADMIN_" + adminCode };
}

function handleAdminDashboard(p) {
  if (!validateAdminToken(p.adminToken)) return { ok: false, message: "Unauthorized." };

  // Registrations
  const regSheet = getSheet(REG_SHEET);
  const regs     = sheetToObjects(regSheet);
  const codeSheet = getSheet(CODE_SHEET);
  const codes    = sheetToObjects(codeSheet);

  // Merge code into registrations
  const registrations = regs.map(r => {
    const email = String(r["Student Email Address"] || "").toLowerCase();
    const codeMatch = codes.find(c => String(c["Student Email Address"] || "").toLowerCase() === email);
    return {
      name:       r["Student Full Name"]    || "",
      phone:      r["Student Phone Number"] || "",
      email:      email,
      address:    r["Student Residential Address"] || "",
      parent:     r["Address / Parent Name & Contact (Use same if not different from student)"] || "",
      classLevel: r["Class Registering For"] || "",
      subjects:   r["Select Subjects (₦2,500 per subject per month)"] || "",
      code:       codeMatch ? (codeMatch["CODE"] || codeMatch["code"] || "") : ""
    };
  });

  // Weekly content
  const contentSheet = getSheet(CONTENT_SHEET);
  const weeklyContent = sheetToObjects(contentSheet).map(c => ({
    week:       c["Week"],
    classLevel: c["ClassLevel"],
    subjectId:  c["SubjectId"],
    title:      c["Title"],
    url:        c["URL"],
    releaseDate:c["ReleaseDate"]
  }));

  // Downloads
  const dlSheet  = getSheet(DOWNLOADS_SHEET);
  const downloads = sheetToObjects(dlSheet).map(d => ({
    title:      d["Title"],
    classLevel: d["ClassLevel"],
    subject:    d["Subject"],
    type:       d["Type"],
    url:        d["URL"]
  }));

  return { ok: true, registrations, weeklyContent, downloads };
}

function handleAdminUpdateContent(p) {
  if (!validateAdminToken(p.adminToken)) return { ok: false, message: "Unauthorized." };
  if (!p.week || !p.classLevel || !p.subjectId) return { ok: false, message: "Week, class, and subject are required." };

  const sheet = getSheet(CONTENT_SHEET);
  const data  = sheet.getDataRange().getValues();
  const headers = data[0].map(h => String(h).trim());

  // Check if row already exists for this week+class+subject → update
  for (let i = 1; i < data.length; i++) {
    const w  = String(data[i][headers.indexOf("Week")]).trim();
    const cl = String(data[i][headers.indexOf("ClassLevel")]).trim().toUpperCase();
    const sj = String(data[i][headers.indexOf("SubjectId")]).trim();
    if (w === String(p.week) && cl === String(p.classLevel).toUpperCase() && sj === String(p.subjectId)) {
      sheet.getRange(i + 1, 1, 1, 7).setValues([[
        p.week, p.classLevel, p.subjectId, p.title || "", p.url || "", p.releaseDate || "", now()
      ]]);
      return { ok: true, message: "Content record updated." };
    }
  }

  // Append new
  sheet.appendRow([p.week, p.classLevel, p.subjectId, p.title || "", p.url || "", p.releaseDate || "", now()]);
  return { ok: true, message: "Content record added." };
}

function handleAdminAddDownload(p) {
  if (!validateAdminToken(p.adminToken)) return { ok: false, message: "Unauthorized." };
  if (!p.title || !p.url) return { ok: false, message: "Title and URL are required." };

  const sheet = getSheet(DOWNLOADS_SHEET);
  sheet.appendRow([p.title, p.classLevel || "ALL", p.subject || "", p.type || "Resource", p.url, now()]);
  return { ok: true, message: "Download added." };
}

function handleAdminRemoveDownload(p) {
  if (!validateAdminToken(p.adminToken)) return { ok: false, message: "Unauthorized." };

  const sheet = getSheet(DOWNLOADS_SHEET);
  const data  = sheet.getDataRange().getValues();
  const rowIdx = parseInt(p.rowIndex || -1);
  if (rowIdx < 1 || rowIdx >= data.length) return { ok: false, message: "Invalid row." };
  sheet.deleteRow(rowIdx + 1);
  return { ok: true, message: "Download removed." };
}

function handleAdminApproveCode(p) {
  if (!validateAdminToken(p.adminToken)) return { ok: false, message: "Unauthorized." };
  if (!p.studentEmail || !p.code) return { ok: false, message: "Student email and code are required." };

  const codeSheet = getSheet(CODE_SHEET);
  const all       = sheetToObjects(codeSheet);

  // Check if student is registered
  const regSheet  = getSheet(REG_SHEET);
  const regs      = sheetToObjects(regSheet);
  const reg       = regs.find(r => String(r["Student Email Address"] || "").toLowerCase() === p.studentEmail.toLowerCase());
  if (!reg) return { ok: false, message: "No registration found for " + p.studentEmail };

  // Check if code already assigned
  const existing = all.find(r => String(r["Student Email Address"] || "").toLowerCase() === p.studentEmail.toLowerCase());
  if (existing) {
    return { ok: false, message: "A code already exists for this student: " + (existing["CODE"] || existing["code"]) };
  }

  codeSheet.appendRow([
    reg["Student Full Name"] || "",
    reg["Student Phone Number"] || "",
    p.studentEmail,
    p.code.trim().toUpperCase()
  ]);

  return { ok: true, message: "Code approved and saved to ACCESSCODE sheet." };
}

function handleAdminSendCodeByEmail(p) {
  if (!validateAdminToken(p.adminToken)) return { ok: false, message: "Unauthorized." };
  if (!p.studentEmail || !p.code) return { ok: false, message: "Student email and code are required." };

  // 1. Save to ACCESSCODE sheet (approve)
  const approveResult = handleAdminApproveCode(p);
  // Ignore duplicate warning — still send the email

  // 2. Send email
  try {
    MailApp.sendEmail({
      to:      p.studentEmail.trim(),
      subject: "🔑 " + PORTAL_NAME + " — Your Access Code",
      htmlBody: codeEmailHtml(p)
    });
  } catch (err) {
    return { ok: false, message: "Code saved but email failed: " + err.message };
  }

  return { ok: true, message: "Code sent to " + p.studentEmail };
}

function codeEmailHtml(p) {
  return `
    <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;background:#0d1221;color:#e8edf5;padding:2rem;border-radius:12px">
      <h2 style="color:#f5a623">🎓 Your Access Code is Ready!</h2>
      <p>Dear student,</p>
      <p>Your payment has been confirmed. Here is your <strong>${PORTAL_NAME} 2026</strong> Access Code:</p>
      <div style="text-align:center;margin:2rem 0">
        <div style="background:rgba(245,166,35,0.12);border:2px solid rgba(245,166,35,0.4);border-radius:12px;padding:1.5rem;display:inline-block">
          <p style="font-size:2rem;font-weight:900;letter-spacing:0.15em;color:#f5a623;margin:0">${p.code}</p>
        </div>
      </div>
      <ol style="line-height:1.8;margin-bottom:1.5rem">
        <li>Visit <a href="${PORTAL_URL}" style="color:#f5a623">${PORTAL_URL}</a></li>
        <li>On the Home page, enter your Access Code in the "Enter Your Access Code" box</li>
        <li>Click <strong>Verify</strong> to unlock your dashboard</li>
        <li>Access your weekly lessons, download notes, and practice CBT questions</li>
      </ol>
      <p style="font-size:0.8rem;color:#8895b3">Keep this code private. Contact us if you have any questions: <a href="mailto:${PORTAL_EMAIL}" style="color:#f5a623">${PORTAL_EMAIL}</a></p>
      <p style="font-size:0.8rem;color:#8895b3">© ${new Date().getFullYear()} ChiaTech Solutions & Resources Ltd</p>
    </div>`;
}
