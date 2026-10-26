# SkillGenesis — Thinking Beyond Degrees

A high-fidelity frontend website for **SkillGenesis Career Accelerator**, designed with editorial typography, restrained geometry, and interactive learning progression modules.

## Features

- **Editorial Design System**: Midnight Navy (`#0A1630`), Ivory (`#F5F1E6`), and Soft Gold (`#D9B15A`) palette with Montserrat typography hierarchy.
- **Sticky Responsive Navigation**: Dynamic backdrop blur, active section scroll tracking, mobile drawer navigation, and accessible keyboard support.
- **Hero Section**: Architectural frames, live sprint simulation card (`Customer Churn Prediction Model`), 3-level staircase progression preview, and a rotating circular gold seal badge.
- **Course Introduction & Why Choose SkillGenesis**: Highlights the industry-education gap, methodology pillars, and 5 structured benefit cards with custom numbered badges.
- **Learning Progression Showcase**: Visual 3-tier staircase (`Foundation` → `Applied` → `Industry-Ready`) and a 7-pillar practical skills curriculum.
- **Interactive FAQ Accordion**: Expandable, keyboard-accessible accordion answering common student and applicant questions.
- **Lead Capture Modal Popup**: Fully validated frontend application dialog with accessible focus trapping, escape-to-close, and success state.
- **Editorial Footer**: Complete with navigation links, track specializations, contact details, social links, and an atmospheric "Beyond Degrees" watermark.

## Project Structure

```
skillgenesis/
├── index.html              # Core HTML structure and semantic sections
├── css/
│   ├── variables.css       # Design tokens, color palette, typography variables
│   ├── base.css            # Resets, buttons, editorial utility classes, animations
│   ├── navbar.css          # Sticky header, brand wordmark, desktop and mobile menus
│   ├── hero.css            # Hero composition, rotating seal badge, sprint card
│   ├── part2.css           # Course introduction and core value pillars
│   ├── part3.css           # 3-level progression staircase and 7 practical modules
│   ├── part4.css           # FAQ accordion, final CTA section, and footer
│   └── modal.css           # Application popup dialog, form fields, validation
└── js/
    ├── app.js              # Application bootstrapper
    ├── navigation.js       # Sticky nav, scroll spy, and mobile drawer
    ├── modal.js            # Focus trap, form validation, and application handler
    └── faq.js              # Accessible accordion controller
```

## Getting Started

Open `index.html` directly in your browser or run a lightweight local static server:

```bash
# Using Python
python -m http.server 3000

# Using Node (npx)
npx serve .
```

Then visit `http://localhost:3000`.
