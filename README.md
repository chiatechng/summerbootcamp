# ChiaTech Summer Bootcamp Portal
**Nigeria's Smartest Summer Lesson Portal | First Term 2026/2027**

> Aligned to **NERDC 2025 Curriculum** | JSS1 – SS3 | BECE · WAEC · NECO · JAMB · NABTEB

---

## 🌐 Live Portal
[https://summer.chiatechsolutions.com](https://summer.chiatechsolutions.com)

---

## 📋 About
The ChiaTech Summer Bootcamp Portal is a **Progressive Web App (PWA)** that delivers First Term 2026/2027 academic content week-by-week for Nigerian secondary school students from JSS1 to SS3.

### Key Features
- **📶 Offline-first** — installs like a native app; works without internet after first visit
- **📅 Sequential content drops** — lessons unlock week-by-week throughout the term
- **📥 Downloadable notes & schemes** — ChiaTech-branded, subject-filtered resources
- **🎯 Practice CBT** — WAEC/JAMB/BECE-style objective questions with explanations
- **🔐 Secure access codes** — unique per student; device-change confirmation via email
- **🛠 Admin panel** — manage students, weekly content, downloads, and send codes

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Vanilla HTML5 + CSS3 + JavaScript (ES6+) |
| PWA | Service Worker + Web App Manifest |
| Backend | Google Apps Script (Web App) |
| Database | Google Sheets |
| Email | Google MailApp (GAS native) |
| Fonts | Google Fonts (Outfit + Inter) |
| Hosting | GitHub Pages → custom domain |

---

## 📁 Project Structure
```
summer.chiatechsolutions.com/
├── index.html              # SPA shell
├── manifest.json           # PWA manifest
├── sw.js                   # Service Worker (cache-first)
├── code.gs                 # Google Apps Script backend
├── css/
│   └── styles.css          # Complete design system
├── js/
│   ├── curriculum-data.js  # NERDC 2025 curriculum + practice questions
│   ├── offline-db.js       # localStorage persistence layer
│   ├── sheet-api.js        # Google Apps Script API client
│   ├── app.js              # Main SPA logic
│   └── pwa.js              # PWA install + SW registration
└── assets/
    ├── icons/
    │   ├── icon-192.png
    │   └── icon-512.png
    └── logo.png
```

---

## 🚀 Deployment Guide

### Step 1 — Google Apps Script
1. Open [https://script.google.com](https://script.google.com)
2. Create a new project: **"ChiaTech Summer Bootcamp"**
3. Paste the entire contents of `code.gs` into the editor
4. Click **Deploy → New deployment → Web App**
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Click **Deploy** and copy the Web App URL
6. Open `js/curriculum-data.js` and update `BOOTCAMP_CONFIG.appsScriptUrl` with the copied URL

### Step 2 — Google Sheets Setup
The spreadsheet is already configured:
- **REGISTRATIONDETAILS** — student registration data
- **ACCESSCODE** — student access codes
- **ADMINPANEL** — admin code (add your admin code in column A, row 2)

The following sheets are **auto-created** on first use:
- **DEVICELOG** — device fingerprint tracking
- **CONTENTMETA** — admin-uploaded weekly content schedule
- **DOWNLOADS** — admin-uploaded downloadable resources

### Step 3 — GitHub Pages Deployment
```bash
git init
git add .
git commit -m "ChiaTech Summer Bootcamp v1.0.0"
git branch -M main
git remote add origin https://github.com/chiatechng/summerbootcamp.git
git push -u origin main
```
Then in GitHub → Settings → Pages → Source: **main** branch → Save.

### Step 4 — Custom Domain
In GitHub Pages settings, add custom domain: `summer.chiatechsolutions.com`
In your DNS (cPanel/Cloudflare), add a CNAME record:
```
CNAME  summer  chiatechng.github.io
```

---

## 🔑 Admin Panel

1. Navigate to `#admin` or click **Admin** in the top nav
2. Enter your **Admin Panel Code** (from the ADMINPANEL sheet, column A)
3. Access the console:
   - **👥 Students** — view all registrations and their assigned codes
   - **📅 Weekly Content** — paste Google Drive/Docs links for each week
   - **📥 Downloads** — upload scheme of work and notes links
   - **🔑 Send Code** — generate and email access codes to students

### Setting the Admin Code
1. Open the Google Spreadsheet
2. Go to the **ADMINPANEL** tab
3. In cell A2, type your admin code (e.g., `CHIATECH2026ADMIN`)
4. Keep this secret!

---

## 📊 Google Sheets — Column Reference

### REGISTRATIONDETAILS
| Column | Data |
|---|---|
| A | Student Full Name |
| B | Student Phone Number |
| C | Student Email Address |
| D | Student Residential Address |
| E | Address / Parent Name & Contact |
| F | Class Registering For |
| G | Select Subjects |
| H | Timestamp |

### ACCESSCODE
| Column | Data |
|---|---|
| A | Student Full Name |
| B | Student Phone Number |
| C | Student Email Address |
| D | CODE |

### ADMINPANEL
| Column | Data |
|---|---|
| A | ADMINPANELCODE |

---

## 📚 Curriculum Coverage

### JSS Classes (JSS1 – JSS3)
English Studies · Mathematics · PHE · CRS/IRS · Nigerian History · Social & Citizenship Studies · Cultural & Creative Arts · French · Integrated Science · Digital Technologies · Business Studies · Solar PV · Computer Hardware & GSM Repairs · Fashion Design

### SS Classes (SS1 – SS3)
English Language · General Mathematics · Citizenship & Heritage Studies · Digital Technologies · Physics · Chemistry · Biology · Economics · Literature in English · Commerce · Government · Agricultural Science · Further Mathematics · Financial Accounting · Trade Subjects · Nigerian Languages

---

## 💰 Pricing
- **₦2,500 per subject per month**
- Registration is free
- First Term: approximately 12 weeks

---

## 📞 Contact
- **Organisation:** ChiaTech Solutions & Resources Ltd
- **Phone:** +234 703 768 9917
- **Email:** chiatech01@gmail.com
- **Website:** [https://chiatechsolutions.com](https://chiatechsolutions.com)

---

## 📜 Licence
© 2026 ChiaTech Solutions & Resources Ltd. All rights reserved.
