# Finance Dashboard UI

A modern, responsive, and interactive **frontend-only finance dashboard** built to help users visualize their financial activity, explore transactions, and gain meaningful spending insights.

This project was developed as part of a frontend engineering assignment with a strong focus on **clean UI design, component architecture, state management, role-based UI simulation, dark mode support, smooth animations, and responsive user experience**.

---

## Live Demo

**Deployed Link:** `https://your-vercel-link.vercel.app`

---

## GitHub Repository

**Repository Link:** `https://github.com/Poortigupta/FinVault`

---

## Project Overview

The application simulates a finance tracking dashboard where users can:

* View overall financial summary
* Analyze income and expenses
* Explore transaction history
* Search, sort, and filter transactions
* View category-based spending insights
* Switch between roles (Viewer / Admin)
* Use dark and light themes
* Experience polished transitions and animations

The main objective of this project is to demonstrate **frontend engineering quality, modular architecture, state management, and intuitive UX design**.

---

## Features

### Dashboard Overview

* Total Balance card
* Total Income card
* Total Expenses card
* Financial trend indicators
* Responsive summary layout

### Financial Visualizations

* Time-based trend chart
* Category-wise spending breakdown
* Animated chart rendering
* Responsive chart containers

### Transactions Section

* Transaction listing
* Search functionality
* Category filters
* Sorting support
* Empty state handling

### Role-Based UI Simulation

* **Viewer**

  * Read-only access
  * Can only view dashboard data

* **Admin**

  * Can add/edit transactions
  * Extended UI controls
  * Management actions visible

### Insights Section

* Highest spending category
* Monthly comparison
* Spending trends
* Useful financial observations

### Theme Support

* Light mode
* Dark mode
* Theme persistence
* Smooth theme transitions

### UI Enhancements

* Responsive layout
* Hover animations
* Smooth transitions
* Mobile-friendly components

---

## Tech Stack

* **React**
* **TypeScript**
* **Vite**
* **Tailwind CSS / Custom CSS**
* **Context API**
* **Custom Hooks**
* **Playwright**
* **Cloudflare / Vercel Deployment**

---

## Project Structure

```text
src/
├── components/
├── context/
│   ├── AuthContext.tsx
│   ├── FinanceContext.tsx
│   └── ThemeContext.tsx
├── hooks/
├── lib/
├── routes/
├── router.tsx
├── routeTree.gen.ts
└── styles.css
```

---

## State Management Approach

The project uses **React Context API** for modular and scalable state management.

### FinanceContext

Manages:

* transactions
* filters
* dashboard summaries
* chart data

### ThemeContext

Manages:

* dark/light mode
* theme persistence
* theme toggle state

### AuthContext

Used to simulate:

* viewer role
* admin role
* UI-level access changes

This approach ensures **clear separation of concerns and maintainable frontend architecture**.

---

## Responsiveness

The application is fully responsive and optimized for:

* desktop
* tablet
* mobile

Layouts dynamically adapt using responsive grid and flex-based sections.

---

## Animations and Effects

Subtle and professional UI animations are included to improve user experience.

Examples include:

* card hover transitions
* chart fade-ins
* smooth theme switching
* button hover effects
* section transitions

---

## Testing

Basic UI interaction and route-level testing is configured using **Playwright**.

Run tests using:

```bash
npm run test
```

---

## Installation and Setup

Clone the repository:

```bash
git clone https://github.com/your-username/finance-dashboard-ui.git
```

Move into project directory:

```bash
cd finance-dashboard-ui
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

The application will start on:


http://localhost:5173


---

## Build for Production

```bash
npm run build
```

---

## Key Engineering Decisions

* Modular component-based architecture
* Context-driven state management
* Role-based UI simulation
* Theme abstraction using ThemeContext
* Responsive and scalable layout
* Frontend-only mock data architecture
* Clean separation of concerns

---

## Future Improvements

Potential enhancements:

* API integration
* persistent transaction storage
* advanced analytics
* CSV export
* notification system
* authentication backend
* pagination
* advanced chart filtering

---

<!-- ## Assignment Note

This project was built as part of a frontend evaluation assignment to demonstrate:

* UI/UX thinking
* frontend architecture
* interaction design
* state management
* code quality
* responsiveness
* engineering approach -->
