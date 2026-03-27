# MedConnect — Healthcare Support Platform

A concept-level mini healthcare support web app built for an internship selection task.
MedConnect connects patients with volunteers and provides AI-guided symptom triage — all in one accessible, clean interface.

---

## Features

| Feature | Description |
|---|---|
| **Patient Support Form** | Request medical help, transport, mental health support, and more |
| **Volunteer Registration** | Sign up with skills, availability, and location |
| **Contact Form** | Reach the MedConnect team for partnerships or feedback |
| **AI Symptom Checker** | 3-step guided triage → colour-coded care recommendation |
| **Accessibility-first** | Skip links, ARIA roles, focus rings, semantic HTML throughout |
| **Responsive** | Works cleanly on mobile, tablet, and desktop |

---

## Project Structure

```
medconnect/
│
├── index.html              # Main HTML — structure and content only
│
├── css/
│   ├── base.css            # CSS variables, reset, typography, shared utilities
│   ├── nav.css             # Sticky navigation bar
│   ├── hero.css            # Hero / header banner
│   ├── forms.css           # Tab bar, form cards, inputs, success states
│   ├── triage.css          # AI symptom checker widget styles
│   └── sections.css        # Section-specific overrides (extensible)
│
└── js/
    ├── tabs.js             # Tab switching for the three-tab form section
    ├── forms.js            # Form validation, submission, toast notifications
    └── triage.js           # AI symptom checker — step logic & triage engine
```

---

## AI Feature — Symptom Checker

The Smart Symptom Checker is the core AI/automation feature. It uses a **rule-based triage engine** to evaluate three inputs:

1. **Symptoms selected** — differentiates critical symptoms (chest pain, breathlessness, dizziness) from general ones
2. **Severity rating** — Mild / Moderate / Severe
3. **Duration** — A few hours / 1–3 days / 4–7 days / Over a week

### Triage outcomes

| Result | Condition |
|---|---|
| 🔴 **Emergency** | Critical symptom + severe/immediate onset |
| 🟡 **See a Doctor** | Moderate+ severity, critical symptom, many symptoms, or long duration |
| 🟢 **Self-Care** | Mild, low symptom count, short duration |

Each result includes a plain-language summary and a specific list of next steps.

> **Disclaimer:** This is a concept-level demonstration tool. It does not replace real medical advice. Always consult a qualified healthcare professional.

---

## Getting Started

No build tools or dependencies required. Pure HTML, CSS, and JavaScript.

**Option 1 — Open locally:**
```bash
git clone https://github.com/your-username/medconnect.git
cd medconnect
# Open index.html in your browser
open index.html
```

**Option 2 — Live Server (VS Code):**
1. Install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
2. Right-click `index.html` → **Open with Live Server**

---

## Accessibility

MedConnect was built with accessibility as a first priority:

- **Skip link** — keyboard users can jump straight to main content
- **ARIA roles** — `tablist`, `tabpanel`, `progressbar`, `alert`, `region` used throughout
- **`aria-pressed`** — all toggle buttons communicate state to screen readers
- **`aria-invalid`** — invalid form fields are flagged for assistive technology
- **Focus rings** — every interactive element has a visible `:focus-visible` style
- **Semantic HTML** — `<nav>`, `<header>`, `<main>`, `<section>`, `<footer>`, proper heading hierarchy

---

## Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5 (semantic) |
| Styling | CSS3 (custom properties, grid, flexbox) |
| Logic | Vanilla JavaScript (ES6+) |
| Fonts | Google Fonts — Lora (display) + Nunito (body) |
| No frameworks, no build step, no dependencies |

---

## Sections

1. **Navigation** — Sticky nav with smooth-scroll links
2. **Hero** — Clear value proposition with two CTAs
3. **Quick Access** — Four cards for immediate routing
4. **Forms** — Three-tab form (Patient / Volunteer / Contact)
5. **AI Symptom Checker** — 3-step guided triage widget
6. **How It Works** — Four-step process overview
7. **Footer** — Links + medical disclaimer

---

## Contributor

Built by **Tanya Srivastava** as part of an internship selection task.

---

## ⚠️ Disclaimer

MedConnect is a concept-level project for demonstration purposes only.
The AI Symptom Checker is rule-based and does not constitute medical advice.
In a real emergency, always call your local emergency number.