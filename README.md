# 🏥 MedConnect — Healthcare Support Platform

> **Live Demo:** [https://med-connect-livid.vercel.app/](https://med-connect-livid.vercel.app/)

MedConnect is a concept-level healthcare support web app that connects patients with volunteers, enables support registration, and provides AI-guided symptom triage — all in one accessible, no-login-required interface.

Built as part of an internship selection task with a focus on clarity, accessibility, and a meaningful AI feature.

---

## 🌟 Features

| Feature | Description |
|---|---|
| **Patient Support Form** | Request medical help, transport, mental health support, and more |
| **Volunteer Registration** | Sign up with skills, availability, and location |
| **Contact Form** | Reach the MedConnect team for partnerships or feedback |
| **AI Symptom Checker** | 3-step guided triage → colour-coded care recommendation |
| **Accessibility-first** | Skip links, ARIA roles, focus rings, semantic HTML throughout |
| **Responsive** | Works on mobile, tablet, and desktop |

---

## 🚀 Live Demo

🔗 **[https://med-connect-livid.vercel.app/](https://med-connect-livid.vercel.app/)**

Deployed via [Vercel](https://vercel.com/) — no build step needed, straight from the repo.

---

## 🛠 Tech Stack

| Layer | Technology | Why |
|---|---|---|
| **Structure** | HTML5 (semantic) | Accessible, screen-reader friendly markup |
| **Styling** | CSS3 — custom properties, grid, flexbox | No framework bloat; full control over design |
| **Logic** | Vanilla JavaScript (ES6+) | Zero dependencies, fast, easy to read |
| **Fonts** | Google Fonts — Lora + Nunito | Readable, professional, healthcare-appropriate |
| **Deployment** | Vercel | Instant deploy from GitHub, free hosting |

No frameworks. No build tools. No dependencies. Just open `index.html` and it works.

---

## 🤖 AI Feature — Smart Symptom Checker

### The idea

Patients often don't know *how urgent* their situation is — should they rest at home, book a clinic appointment, or go straight to the emergency room? Calling a doctor for every minor concern isn't practical, but ignoring symptoms can be dangerous.

The **Smart Symptom Checker** solves this with a 3-step guided triage flow that gives patients a clear, colour-coded recommendation in under 2 minutes — no sign-up, no waiting.

### How it works

The checker collects three inputs and runs them through a rule-based triage engine:

1. **Symptoms** — The patient selects all current symptoms from a list of 10. The engine flags *critical symptoms* (chest pain, breathlessness, dizziness) separately from general ones.
2. **Severity** — Mild / Moderate / Severe, self-rated by the patient.
3. **Duration** — How long they've had the symptoms (hours → over a week).

### Triage logic

| Outcome | Triggered when |
|---|---|
| 🔴 **Emergency — Go to ER** | Critical symptom + severe rating or sudden onset |
| 🟡 **See a Doctor Soon** | Moderate+ severity, critical symptom present, high symptom count, or long duration |
| 🟢 **Self-Care at Home** | Mild severity, few symptoms, short duration |

Each result includes:
- A plain-language explanation of why this recommendation was made
- A specific, actionable list of next steps
- A prompt to use MedConnect's patient form if support is needed

### Why rule-based (not ML)?

For a concept-level healthcare app, a transparent rule-based engine is intentionally chosen over a black-box ML model. In real medical tools, explainability matters — patients and clinicians need to understand *why* a recommendation was made, not just what it is.

> ⚠️ **Disclaimer:** The Symptom Checker is a concept-level demonstration tool only. It does not replace professional medical advice. Always consult a qualified healthcare provider.

---

## 🏢 NGO & Real-World Use Case

MedConnect is designed with NGOs and community healthcare organisations in mind. Here's how a real deployment could look:

### Problem it solves

Many NGOs running health camps, community clinics, or patient helplines face a common challenge: **too many people, not enough trained staff**. Volunteers often don't know who needs urgent attention and who can wait. Patients don't know where to go or who to call.

### How MedConnect fits in

| NGO Scenario | MedConnect Solution |
|---|---|
| Health camp registration | Patient form captures needs and urgency before arrival |
| Volunteer coordination | Registration form collects skills, availability, and location for smart matching |
| Remote or rural patients | AI triage helps them self-assess before travelling long distances to a clinic |
| Follow-up and outreach | Contact form lets coordinators collect leads and partnership queries |
| Low-literacy environments | Large buttons, emoji icons, simple language — designed for diverse users |

### Example organisations this could serve
- Community health NGOs running free clinics
- Post-disaster relief organisations coordinating medical volunteers
- Mental health helplines needing structured intake forms
- Senior citizen welfare groups managing home care volunteers

### What a full version would add

In a production build, MedConnect could be extended with:
- **Backend + database** — store registrations, match patients to volunteers automatically
- **SMS notifications** — confirm requests via text for users without internet access
- **Multilingual support** — Hindi, Tamil, Bengali etc. for broader reach across India
- **Admin dashboard** — coordinators can view and manage all submissions in one place
- **Real AI model** — replace the rule engine with a trained triage model (e.g. fine-tuned on symptom datasets)

---

## 📁 Project Structure

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

## ♿ Accessibility

Accessibility was treated as a core requirement, not an afterthought:

- **Skip link** — keyboard users can jump straight to main content
- **ARIA roles** — `tablist`, `tabpanel`, `progressbar`, `alert`, `region` used throughout
- **`aria-pressed`** — all toggle buttons communicate state to screen readers
- **`aria-invalid`** — invalid form fields are flagged for assistive technology
- **Focus rings** — every interactive element has a visible `:focus-visible` style
- **Semantic HTML** — `<nav>`, `<header>`, `<main>`, `<section>`, `<footer>`, proper heading hierarchy

---

## 🏃 Running Locally

No build tools or dependencies required.

```bash
git clone https://github.com/your-username/medconnect.git
cd medconnect
open index.html
```

Or with VS Code's Live Server extension: right-click `index.html` → **Open with Live Server**.

---

## 👩‍💻 Author

Built by **Tanya** — B.Tech student, internship selection project.
