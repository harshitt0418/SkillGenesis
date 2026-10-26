# SkillGenesis — Thinking Beyond Degrees

A high-fidelity, component-based frontend for **SkillGenesis Career Accelerator**, rebuilt in a clean **MERN-ready JavaScript structure** with React.js and Vite.

---

## MERN-Ready Architecture

The project has been organized with a modular frontend architecture prepared for a future Express.js and MongoDB backend:

```text
skillgenesis/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── Button.jsx                  # Reusable primary, outline, and dark pill buttons
│   │   │   ├── Navbar.jsx                  # Sticky header with active scroll spy
│   │   │   ├── MobileMenu.jsx              # Responsive animated sliding drawer
│   │   │   ├── JoinAcceleratorModal.jsx    # Lead capture popup with browser-only validation
│   │   │   └── Footer.jsx                  # 4-column footer with 'Beyond Degrees' watermark
│   │   ├── sections/
│   │   │   ├── Hero.jsx                    # Hero with rotating seal badge & sprint cards
│   │   │   ├── CourseIntro.jsx             # Course introduction on ivory
│   │   │   ├── WhySkillGenesis.jsx         # 5 core benefit pillars with numbered badges
│   │   │   ├── Progression.jsx             # 3-level staircase architecture
│   │   │   ├── PracticalSkills.jsx         # 7 experiential learning modules grid
│   │   │   ├── FaqSection.jsx              # Accessible accordion component
│   │   │   └── FinalCta.jsx                # Closing CTA section
│   │   ├── hooks/
│   │   │   ├── useStickyHeader.js          # Sticky scroll detection
│   │   │   └── useScrollSpy.js             # Active section link spy
│   │   ├── data/
│   │   │   ├── navLinks.js                 # Navigation item definitions
│   │   │   ├── benefitsData.js             # 5 core benefits data
│   │   │   ├── progressionData.js          # 3 staircase levels
│   │   │   ├── modulesData.js              # 7 practical learning modules
│   │   │   └── faqsData.js                 # 5 FAQ items
│   │   ├── styles/
│   │   │   ├── variables.css               # Color palette & typography design tokens
│   │   │   ├── base.css                    # Resets, animations, editorial utilities
│   │   │   ├── navbar.css                  # Header & mobile drawer styles
│   │   │   ├── hero.css                    # Hero layout & abstract composition
│   │   │   ├── part2.css                   # Course intro & benefits styles
│   │   │   ├── part3.css                   # Staircase & modules grid styles
│   │   │   ├── part4.css                   # FAQs accordion & closing CTA styles
│   │   │   ├── modal.css                   # Modal dialog & form validation styles
│   │   │   └── index.css                   # Master stylesheet aggregator
│   │   ├── App.jsx                         # Main app component
│   │   └── main.jsx                        # React entrypoint
│   ├── .env.example                        # Client environment template
│   ├── package.json                        # Vite & React dependencies
│   ├── vite.config.js                      # Vite configuration (port 3000)
│   └── index.html                          # HTML shell with Google Fonts & Meta tags
├── package.json                            # Root npm scripts
└── README.md                               # Project documentation
```

---

## Getting Started

### 1. Installation

```bash
cd client
npm install
```

### 2. Development Server

Run the development server from inside `client` (or from the project root):

```bash
# From inside client/
npm run dev

# Or from the project root:
npm run dev
```

The app will be available at: **`http://localhost:3000`**

### 3. Production Build

```bash
npm run build
```

---

## Current Frontend Scope (Strictly Frontend-Only)

* **No backend, Express server, Node API, or MongoDB database has been added yet.**
* All form interactions in `JoinAcceleratorModal.jsx` are strictly browser-validated with local loading and confirmation states.
* Ready for seamless API connection when the backend phase begins.
