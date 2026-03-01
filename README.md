# 🦅 Del Norte Science Olympiad — 2026 Website

Official team website for **Del Norte High School Science Olympiad** — 2026 Season.

**Address:** 16601 Nighthawk Lane, San Diego, CA 92127  
**Division:** Division C · SOINC 2026  
**Teams:** 5 Teams · 15 Members · 23 Events

---

## 🚀 Live Site

> Hosted via GitHub Pages: `https://<your-username>.github.io/<repo-name>/`

---

## 📁 File Structure

```
├── index.html              # Homepage
├── 404.html                # 404 error page
├── README.md               # This file
├── _config.yml             # GitHub Pages config
│
├── pages/
│   ├── events.html         # All 23 Division C events
│   ├── team.html           # 5 teams, 15 members roster
│   ├── schedule.html       # Full 2026 season schedule
│   └── contact.html        # Contact info + form
│
├── css/
│   └── style.css           # Main stylesheet
│
├── js/
│   ├── main.js             # Nav, scroll, animations
│   ├── home.js             # Homepage data loader
│   ├── events.js           # Events page + filter
│   ├── team.js             # Team roster renderer
│   └── schedule.js         # Schedule renderer
│
├── data/
│   ├── events.json         # All 23 official 2026 Div C events
│   ├── team.json           # Team/member data (update this!)
│   └── schedule.json       # Season schedule (update this!)
│
└── assets/
    └── favicon.png         # Team logo (add your actual PNG)
```

---

## ✏️ How to Update Content

### Change team members
Edit `data/team.json` — update names, grades, and event assignments. Changes reflect automatically on the Team page.

### Change schedule
Edit `data/schedule.json` — update event names, dates, locations, and types (`practice`, `scrimmage`, `invitational`, `tournament`).

### Change events
Events come from `data/events.json` and reflect the official [2026 SOINC Division C event list](https://www.soinc.org/events/2026-division-c-events).

---

## 🛠️ Deploying to GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set source to **main branch / root**
4. Your site will be live at `https://<username>.github.io/<repo>/`

---

## 🎨 Design

- **Theme:** Dark editorial, space-black background, gold accents
- **Fonts:** Syne (headings) + DM Sans (body) + JetBrains Mono (code/labels)
- **Color scheme:** `#07090d` background · `#f0c040` gold · responsive design
- **No frameworks** — pure HTML, CSS, and vanilla JS

---

## 📋 2026 Division C Events (all 23)

| # | Event | Category | Type |
|---|-------|----------|------|
| 1 | Anatomy & Physiology | Life Science | Study |
| 2 | Designer Genes | Life Science | Study |
| 3 | Disease Detectives | Life Science | Study |
| 4 | Entomology | Life Science | Study |
| 5 | Water Quality | Life Science | Lab |
| 6 | Astronomy | Earth & Space | Study |
| 7 | Dynamic Planet | Earth & Space | Study |
| 8 | Remote Sensing | Earth & Space | Study |
| 9 | Rocks & Minerals | Earth & Space | Lab |
| 10 | Chemistry Lab | Phys & Chem | Lab |
| 11 | Circuit Lab | Phys & Chem | Lab |
| 12 | Forensics | Phys & Chem | Lab |
| 13 | Hovercraft | Phys & Chem | Build |
| 14 | Machines | Phys & Chem | Study |
| 15 | Materials Science | Phys & Chem | Lab |
| 16 | Boomilever | Tech & Eng | Build |
| 17 | Electric Vehicle | Tech & Eng | Build |
| 18 | Helicopter | Tech & Eng | Build |
| 19 | Robot Tour | Tech & Eng | Build |
| 20 | Bungee Drop | Inquiry | Build |
| 21 | Codebusters | Inquiry | Study |
| 22 | Engineering CAD | Inquiry | Tech |
| 23 | Experimental Design | Inquiry | Lab |

---

*Built with passion from Del Norte Science Olympiad · 2026*
