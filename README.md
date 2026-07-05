# ChiaTech Summer Bootcamp Portal

Netlify-ready Progressive Web App for ChiaTech Summer Bootcamp. The portal registers students, writes registration records to Google Sheets through Google Apps Script, verifies paid access codes, opens a learner dashboard, shows weekly lessons by class and subject, tracks progress, provides CBT practice, supports admin-uploaded notes/downloads, and works offline after the first successful load on the same device.

## Core Promise

**Learn, Know, Do, and Create Success**

The portal prepares JSS1 to SS3 students for the NERDC 2025 curriculum and First Term 2026/2027 lessons, including BECE preparation in JSS3 and WAEC, NECO, JAMB, and NABTEB preparation in SS3.

## Important Links

- Portal domain: `https://summer.chiatechsolutions.com`
- Spreadsheet: `https://docs.google.com/spreadsheets/d/1mL5t37Ly_Qpcbvmb9xOAeiN_8QVUzVnIE_iKUKA8QvQ/edit`
- Apps Script Web App URL: https://script.google.com/macros/s/AKfycbwu7boFtMSUubNQDKy52WMzHZZ30NMZ-9dflmsdisc42VtQYZO8OVyIgRlP8tcZk2VhJg/exec
- GitHub repository: `https://github.com/chiatechng/summerbootcamp`

## Project Structure

```text
.
|-- index.html              # App shell, header, footer, view containers
|-- manifest.json           # Installable PWA manifest
|-- sw.js                   # Offline service worker cache
|-- code.gs                 # Google Apps Script backend source
|-- netlify.toml            # Netlify static publish settings
|-- _headers                # Netlify cache/security headers
|-- _redirects              # SPA fallback
|-- css/styles.css          # ChiaTech design system and animated hero
|-- js/app.js               # Portal UI, registration, dashboard, admin, CBT
|-- js/curriculum-data.js   # Curriculum database, config, subject helpers
|-- js/offline-db.js        # localStorage session/progress/offline queue
|-- js/sheet-api.js         # Apps Script JSONP client, no CORS fetch required
|-- js/pwa.js               # Install prompt and service worker registration
|-- assets/                 # Hero and exam artwork
|-- icons/                  # PWA icons
`-- Library/                # Source curriculum documents and references
```

## Current Implementation Notes

- `js/curriculum-data.js` defines `window.CURRICULUM` and the official class/subject offering map.
- `js/sheet-api.js` first calls the same-origin Netlify proxy at `/api/portal` on deployed/Netlify-dev URLs.
- `netlify/functions/portal-api.js` forwards server-side requests to Apps Script, so browser CORS does not block registration or admin login.
- Apps Script JSONP remains as a fallback for plain local static testing.
- `code.gs` still supports direct Apps Script POST and JSONP GET. Redeploy Apps Script after every backend edit.
- `BOOTCAMP_CONFIG.appsScriptUrl` and `SCRIPT_URL` are aligned to the same deployment URL.
- `sw.js` cache is bumped to `bootcamp-v1.0.4` so browsers fetch the latest scripts.
- `js/console-guard.js` suppresses the known Chrome-extension `message channel closed` promise noise. It does not suppress real portal errors.

## Subject Offering Map

### JSS1 and JSS2

New NERDC junior subjects are harmonized across JSS1 and JSS2:

```text
English Studies
Mathematics
Digital Technologies
Basic Science
Physical & Health Education
Social & Citizenship Studies
Business Studies
Cultural & Creative Arts
Nigerian History
Christian Religious Studies
Islamic Studies
French
```

### JSS3

JSS3 continues the junior/BECE pathway, with old `Computer Studies` content mapped and displayed as `Digital Technologies`.

### SS1 and SS2

SS1 and SS2 use the NERDC 2025 senior secondary structure:

```text
English Language
General Mathematics
Solar Photovoltaic Installation and Maintenance
Citizenship and Heritage Studies
Digital Technologies
Biology
Chemistry
Physics
Agriculture
Further Mathematics
Health Education
Geography
Technical Drawing
Government
Christian Religious Studies
Literature in English
Nigerian History
Accounting
Commerce
Marketing
Economics
```

### SS3

SS3 keeps the examination-year structure:

```text
English Language
General Mathematics
Civic Education
Digital Technologies
Solar Photovoltaic Installation and Maintenance
Biology
Chemistry
Physics
Agriculture
Further Mathematics
Health Education
Geography
Technical Drawing
Nigerian History
Government
Christian Religious Studies
Literature in English
Accounting
Commerce
Marketing
Economics
```

Legacy mappings:

```text
Computer Studies -> Digital Technologies
Data Processing -> Digital Technologies
Electrical Installation/Maintenance Work -> Solar Photovoltaic Installation and Maintenance
Solar PV Installation & Maintenance -> Solar Photovoltaic Installation and Maintenance
Agricultural Science -> Agriculture
Financial Accounting -> Accounting
```

## Google Sheets Setup

Use the live spreadsheet above. The Apps Script backend creates helper sheets automatically if missing.

### REGISTRATIONDETAILS

Required columns:

```text
Student Full Name
Student Phone Number
Student Email Address
Student Residential Address
Address / Parent Name & Contact (Use same if not different from student)
Class Registering For
Select Subjects (NGN2,500 per subject per month)
Timestamp
Payment Status
Access Code Sent
```

The backend also tolerates the original naira-symbol header used by the live sheet.

### ACCESSCODE

Required columns:

```text
Student Full Name
Student Phone Number
Student Email Address
CODE
Created At
```

### ADMINPANEL

Required column:

```text
ADMINPANELCODE
```

Place the admin code in row 2 under `ADMINPANELCODE`.

### Auto-Created Sheets

```text
DEVICELOG
CONTENTMETA
DOWNLOADS
```

## Apps Script Deployment

1. Open `https://script.google.com`.
2. Open the ChiaTech Summer Bootcamp Apps Script project.
3. Replace the script content with the full content of `code.gs`.
4. Confirm these constants are correct:
   - `SPREADSHEET_ID`
   - `SCRIPT_URL`
   - `PORTAL_URL`
5. Click **Deploy** > **Manage deployments**.
6. Edit the Web App deployment or create a new deployment.
7. Use these settings:
   - Execute as: `Me`
   - Who has access: `Anyone`
8. Deploy and authorize requested permissions.
9. Copy the Web App URL.
10. Confirm `BOOTCAMP_CONFIG.appsScriptUrl` in `js/curriculum-data.js` is the same URL.
11. Open the Web App URL in a browser. It should show the backend running message.

Important: the JSONP/CORS fix requires the updated `code.gs`. If the old Apps Script deployment is still live, registration and admin login will still fail from local/Netlify origins.

## Netlify Deployment

### Deploy From GitHub

1. Push the project to `https://github.com/chiatechng/summerbootcamp`.
2. Open Netlify.
3. Choose **Add new site** > **Import an existing project**.
4. Select the GitHub repository.
5. Use these build settings:
   - Build command: leave empty
   - Publish directory: `.`
   - Functions directory: `netlify/functions`
6. Deploy.
7. Add the custom domain `summer.chiatechsolutions.com`.
8. Follow Netlify DNS instructions for the domain.
9. After deploy, hard refresh once so `sw.js` installs `bootcamp-v1.0.4`.

### Environment Variable

The function has the Apps Script URL built in, but Netlify can override it with:

```text
APPS_SCRIPT_URL=https://script.google.com/macros/s/AKfycbwu7boFtMSUubNQDKy52WMzHZZ30NMZ-9dflmsdisc42VtQYZO8OVyIgRlP8tcZk2VhJg/exec
```

Use this if you create a new Apps Script deployment URL later.

### Manual Deploy

1. Open Netlify.
2. Choose **Deploy manually**.
3. Drag the full project folder into Netlify.
4. Test the preview URL.
5. Add the custom domain after the preview works.

## Local Predeployment Test

For full registration/admin testing, use Netlify Dev so `/api/portal` is available:

```bash
netlify dev
```

Open the Netlify Dev URL, usually:

```text
http://localhost:8888
```

A plain static server can test layout, navigation, curriculum, CBT, and offline shell, but real registration/admin calls will use Apps Script JSONP fallback instead of the Netlify proxy.

Static UI-only example:

```bash
python -m http.server 5500
```

Open:

```text
http://127.0.0.1:5500/index.html
```

Test in this order:

1. Home page loads with ChiaTech branding and animated hero.
2. Browser console has no `curriculum-data.js` syntax error.
3. Browser console has no `CURRICULUM is not defined` error.
4. Register page opens from header, hero, and footer links.
5. JSS1, JSS2, and JSS3 each show 12 harmonized junior subjects.
6. SS1 and SS2 each show 21 NERDC senior subjects.
7. SS3 shows Civic Education, Digital Technologies, and Solar PV.
8. Select class/subjects and confirm total fee updates.
9. Submit one test registration with a real email.
10. Confirm the registration appears in `REGISTRATIONDETAILS`.
11. Open Admin Panel and login with `ADMINPANELCODE`.
12. Confirm admin login does not show `Offline - request queued`.
13. Send or assign one access code to the test student.
14. Confirm the code appears in `ACCESSCODE`.
15. Enter the code on the home page.
16. Confirm the learner dashboard opens.
17. Open Lessons, Downloads, CBT, and Profile tabs.
18. Open one weekly lesson and confirm progress updates.
19. Take one CBT and confirm score/explanations display.
20. Install the PWA.
21. Reload once online, then test offline reload on the same device.
22. Logout and confirm the saved code/session clears.
23. Test the same code on another device and confirm email device verification.

## Student Flow

1. Student opens the portal.
2. Student registers with name, phone, email, address, parent contact, class, and subjects.
3. Registration is submitted to Google Sheets.
4. Student pays `NGN2,500` per subject per month.
5. Admin confirms payment and sends an access code.
6. Student enters the access code.
7. Portal saves the code on that device until logout.
8. Dashboard opens weekly lessons, downloads, progress, and CBT practice.
9. New device login requires confirmation through the registered email.

## Admin Flow

1. Open `#admin` or click **Admin**.
2. Enter the `ADMINPANELCODE`.
3. Review student registrations.
4. Add weekly content links by class, subject, week, and release date.
5. Add downloadable schemes, notes, past questions, and model answers.
6. Generate or enter access codes.
7. Send codes by email after payment confirmation.

## Offline Behavior

- The service worker caches the app shell, CSS, JavaScript, icons, and key images.
- Student session, access code, device ID, progress, cached lessons, and cached downloads are stored in `localStorage`.
- Registration can be queued only when the device is genuinely offline.
- Admin login, access-code verification, and device confirmation must reach Apps Script.
- After first successful load/install, the portal continues to open on the same device while offline.

## Troubleshooting

### Registration or Admin Login Cannot Reach Server

1. On Netlify or Netlify Dev, confirm `/api/portal` is routed to `netlify/functions/portal-api.js`.
2. Confirm `APPS_SCRIPT_URL` is correct if set in Netlify environment variables.
3. Redeploy the updated `code.gs` as a Web App.
4. Confirm Web App access is `Anyone`.
5. Confirm `BOOTCAMP_CONFIG.appsScriptUrl` matches the current Web App URL.
6. Hard refresh the portal so `bootcamp-v1.0.4` is installed.

### Browser Console Notes

- `Banner not shown: beforeinstallpromptevent.preventDefault()` is Chrome's PWA install notice. The app stores the install event so the user can click **Install App**. It is not a portal failure.
- `A listener indicated an asynchronous response...` is commonly emitted by Chrome extensions. `js/console-guard.js` suppresses that known extension noise without hiding real portal errors.

### Registration Does Not Reach Google Sheets

1. Open Apps Script **Executions** and check the latest error.
2. Confirm `SPREADSHEET_ID` is correct.
3. Confirm required sheet headers exist.
4. Confirm the Web App is deployed as `Me` and accessible by `Anyone`.

### Admin Login Fails

1. Confirm `ADMINPANEL!A1` is `ADMINPANELCODE`.
2. Confirm the admin code is in `ADMINPANEL!A2`.
3. Redeploy Apps Script after editing `code.gs`.
4. Hard refresh the portal and retry.

### Access Code Does Not Open Dashboard

1. Confirm the code exists in `ACCESSCODE`.
2. Confirm the email in `ACCESSCODE` matches a row in `REGISTRATIONDETAILS`.
3. Confirm the registration row has class and selected subjects.
4. If this is a second device, confirm the email device reset link.

### Service Worker Cache.put Error

If the console shows `Failed to execute 'put' on 'Cache': Request scheme 'chrome-extension' is unsupported`, deploy `sw.js` version `bootcamp-v1.0.4` and hard refresh. The service worker now ignores non-HTTP browser-extension requests and only caches safe same-origin/font responses.
### PWA Does Not Update

1. Hard refresh once after deployment.
2. Confirm `sw.js` is served with no-cache headers.
3. Increment `CACHE_NAME` in `sw.js` after major frontend changes.
4. In Chrome DevTools, use Application > Service Workers > Update on reload during testing.

## Final Launch Gate

Before public launch, complete one full real test: registration, payment confirmation, admin code send, learner login, lesson open, CBT completion, PWA install, offline reload, logout, and second-device email confirmation.

© 2026 ChiaTech Solutions & Resources Ltd. All rights reserved.





#   s u m m e r b o o t c a m p  
 