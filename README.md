# ChiaTech Summer Bootcamp Portal

ChiaTech Summer Bootcamp is a Netlify-ready learning portal for JSS1 to SS3 students preparing for the NERDC 2025 curriculum and First Term 2026/2027 lessons.

The portal supports registration, payment-code access, learner dashboards, weekly lesson progression, CBT practice, scheme and note downloads, admin content management, PWA installation, and offline use after the first successful load.

Core message: **Learn, Know, Do, and Create Success**.

## Public Frontend Boundary

This repository is the public frontend and Netlify proxy only.

Do not commit:

- Apps Script source such as `code.gs`
- Google Sheet URLs or spreadsheet IDs
- Deployed Apps Script Web App URLs
- Admin panel codes
- `.env` files or deployment secrets
- Private backend setup notes

The private backend source should stay outside this frontend repository, for example in a private backend folder or private repository.

## Project Structure

- `index.html` - single-page portal shell
- `css/styles.css` - ChiaTech portal styling and responsive layout
- `js/app.js` - portal views, forms, dashboard, CBT, downloads, and admin UI
- `js/curriculum-data.js` - JSS1 to SS3 curriculum, class, subject, and weekly lesson data
- `js/sheet-api.js` - frontend API client that calls the Netlify proxy
- `js/offline-db.js` - local session, access-code, progress, cache, and offline queue storage
- `js/pwa.js` - service worker registration and install prompt helper
- `sw.js` - offline cache and network strategy
- `netlify/functions/portal-api.js` - private proxy from Netlify to the Apps Script backend
- `assets/` and `icons/` - ChiaTech visual assets and PWA icons
- `Library/` - public scheme/reference files linked from the learner dashboard

## Required Backend

The frontend sends all live registration, code, content, download, and admin requests to:

```text
/api/portal
```

Netlify rewrites that route to:

```text
/.netlify/functions/portal-api
```

The Netlify function forwards requests to the private Apps Script Web App URL stored in the Netlify environment variable:

```text
APPS_SCRIPT_URL
```

If `APPS_SCRIPT_URL` is missing, registration and admin login will show a backend configuration message. That is expected until the private backend URL is added in Netlify.

## Backend Actions Expected

The backend should accept JSON requests with an `action` field and return JSON with at least:

```json
{
  "ok": true,
  "message": "Success"
}
```

Actions used by the frontend:

- `register`
- `verifyCode`
- `checkDevice`
- `confirmDevice`
- `getWeeklyContent`
- `getDownloads`
- `adminLogin`
- `adminGetDashboard`
- `adminUpdateContent`
- `adminAddDownload`
- `adminApproveCode`
- `adminSendCodeByEmail`
- `adminRemoveDownload`

## Local Testing

### 1. Static UI Test

Use this when you only need to inspect design, navigation, curriculum rendering, CBT, downloads, and offline shell behavior.

```powershell
py -m http.server 8000 --bind 127.0.0.1
```

Open:

```text
http://127.0.0.1:8000/index.html
```

Expected result:

- Home, registration view, dashboard UI, CBT, and downloads render.
- Live registration/admin requests show a backend message because a plain static server does not run Netlify Functions.

### 2. Full Local Backend Proxy Test

Install or use Netlify CLI, then create a local `.env` file that is not committed:

```text
APPS_SCRIPT_URL=your-private-apps-script-web-app-url
```

Run:

```powershell
netlify dev
```

Open the Netlify Dev URL, usually:

```text
http://127.0.0.1:8888
```

Test:

- Submit a student registration.
- Confirm the registration reaches the Google Sheet through the backend.
- Login with a valid access code.
- Open the learner dashboard.
- Check weekly lesson progress.
- Open downloads.
- Take a CBT.
- Login to admin with a valid admin code.
- Add or update a lesson/download from admin and confirm it appears in the dashboard.

### 3. Netlify Deployment Test

In Netlify:

1. Connect this GitHub repository.
2. Set build command to empty.
3. Set publish directory to `.`.
4. Confirm functions directory is `netlify/functions`.
5. Add environment variable `APPS_SCRIPT_URL` with the private Apps Script Web App URL.
6. Deploy.
7. Open the deployed Netlify URL.
8. Test registration, code login, dashboard, downloads, CBT, admin, and offline reinstall behavior.

## Service Worker Reset During Testing

If the browser keeps old files:

1. Open Chrome DevTools.
2. Go to Application.
3. Open Service Workers.
4. Click Unregister.
5. Open Storage.
6. Click Clear site data.
7. Hard refresh the page.

The current service worker cache version is declared in `sw.js`.

## PWA and Offline Checklist

1. Open the deployed site once while online.
2. Install the app from the browser install control when available.
3. Login with a valid access code.
4. Open at least one dashboard page while online.
5. Turn off internet.
6. Reopen the installed app on the same device.
7. Confirm the saved code, dashboard shell, cached curriculum, progress, and downloaded static assets remain available.
8. Submit a non-critical offline request and confirm it queues.
9. Reconnect internet and confirm the queue flushes.

Device reset confirmation is handled by the backend flow. The frontend stores the device identifier locally and asks the backend to approve device changes.

## Final Predeploy Checklist

- `code.gs` is not present in the frontend repository.
- No real spreadsheet ID or Apps Script deployment URL is committed.
- `APPS_SCRIPT_URL` is configured in Netlify.
- Service worker has been refreshed after deployment.
- Registration writes to the backend sheet.
- Access codes open the learner dashboard.
- Admin login succeeds through the backend.
- Weekly content, downloads, and CBT screens work on desktop and mobile.
- Offline reinstall test passes on the same device.

## GitHub Push

After testing locally:

```powershell
git status
git add .
git commit -m "Finalize ChiaTech bootcamp portal for Netlify"
git push origin main
```

Before pushing, confirm that private backend files and `.env` files are still ignored.
