const APPS_SCRIPT_URL =
  process.env.APPS_SCRIPT_URL ||
  process.env.APP_SCRIPT_URL ||
  process.env.GOOGLE_APPS_SCRIPT_URL ||
  "";

const hasValidAppsScriptUrl = /^https:\/\/script\.google\.com\/macros\/s\//.test(APPS_SCRIPT_URL);

const headers = {
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "no-store",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS"
};

exports.handler = async function handler(event) {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers, body: "" };
  }

  if (event.httpMethod === "GET") {
    return response(200, {
      ok: hasValidAppsScriptUrl,
      service: "ChiaTech portal API",
      configured: hasValidAppsScriptUrl,
      message: hasValidAppsScriptUrl
        ? "Portal backend is configured."
        : "Portal backend is not configured. Set APPS_SCRIPT_URL in Netlify environment variables."
    });
  }

  if (event.httpMethod !== "POST") {
    return response(405, { ok: false, message: "Method not allowed." });
  }

  if (!hasValidAppsScriptUrl) {
    return response(200, {
      ok: false,
      code: "BACKEND_NOT_CONFIGURED",
      message: "Portal backend is not configured. Set APPS_SCRIPT_URL in Netlify environment variables."
    });
  }

  let payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch (error) {
    return response(400, { ok: false, message: "Invalid JSON payload." });
  }

  try {
    const upstream = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
      redirect: "follow"
    });

    const text = await upstream.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch (error) {
      data = {
        ok: false,
        message: "Apps Script returned a non-JSON response. Redeploy the backend Web App with access set to Anyone.",
        raw: text.slice(0, 300)
      };
    }

    return response(upstream.ok ? 200 : upstream.status, data);
  } catch (error) {
    return response(502, {
      ok: false,
      message: "Unable to reach Apps Script from Netlify. Check the private backend deployment URL.",
      detail: error.message
    });
  }
};

function response(statusCode, data) {
  return { statusCode, headers, body: JSON.stringify(data) };
}
