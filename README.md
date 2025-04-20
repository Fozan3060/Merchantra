# 🛍️ Merchanttra – React E-commerce Template

**Merchanttra** is a modern and fully responsive e-commerce template built with **React**, **TypeScript**, and **Tailwind CSS**. It follows atomic design principles and integrates with the [Fake Store API](https://fakestoreapi.com/) for dynamic product rendering. It’s ideal for developers looking to build or customize an online storefront quickly.

---

## 🚀 Getting Started

### ✅ Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or later)
- **npm**

### 📦 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Fozan3060/Merchantra.git
cd Merchanttra
npm install
```

### 💻 Running the Project Locally

Start the development server:

```bash
npm run dev
```

Your project will be running at: [http://localhost:5173](http://localhost:5173)

### 🧪 Running Unit Tests

To run all available tests:

```bash
npm run test
```

---

## 🧰 Features

- ✔️ Initial design
- ✔️ Add to Cart functionality
- ✔️ Checkout page and order flow
- ✔️ User authentication (simulated with local storage)
- ✔️ Order history (stored locally)
- ✔️ Detailed product view pages
- ✔️ Add to Favorites/Wishlist
- ✔️ Skeleton loaders for better UX
- ✔️ Unit tests with Jest + React Testing Library
- ✔️ Mobile-first responsive design

---

## 📁 Folder Structure

The app uses a modular structure for scalability and maintainability:

```
src/
├── assets/               # Static assets (images, icons)
├── components/
│   ├── complex/          # High-level components composed of compound/shared parts
│   ├── compound/         # Medium-complexity reusable components
│   ├── shared/           # Base UI elements (buttons and inputs)
│   ├── Context/          # Global state using React Context (cart, auth, etc.)
│   └── Layout/           # Page layout components (Header, Footer, etc.)
├── pages/                # Pages like Home, About, Contact, Checkout
├── App.tsx               # Main component structure
└── main.tsx              # Entry point
```

This architecture ensures the app is:

- Easy to navigate and extend
- Built for clean separation of concerns
- Scalable for future features

---

## 🧑‍💻 Customization

You can easily:

- Replace the Fake Store API with your own backend or headless CMS
- Customize color schemes, spacing, and layout with Tailwind
- Extend context logic (e.g. for real authentication or payment gateways)
- Add animations or transitions for enhanced UX

---

## 🌐 Live Preview

- **Production**: [https://merchantra.vercel.app](https://merchantra.vercel.app)
- **Development**: [https://merchantra-dev.vercel.app](https://merchantra-dev.vercel.app)

---

## 👨‍🎨 Designed & Developed By

**Fozan Javaid**  
[LinkedIn – Fozan Javaid](https://www.linkedin.com/in/fozan-javaid/)

---

## 📄 License & Usage

This template is provided under a commercial license for sale and distribution through ThemeForest. Redistribution outside the marketplace is **not allowed** without the author's permission.

---

## Tailwind Theme Customization

This project extends Tailwind CSS using custom variables for colors and fonts. You can easily update colors by modifying the CSS variables in your global stylesheet (e.g., `index.css` or `globals.css`), and Tailwind will reflect those changes across the app.

### Fonts

```ts
fontFamily: {
  poppins: ["Poppins", "sans-serif"],
  inter: ["Inter", "sans-serif"],
}
```

### Custom Colors (defined as CSS variables)

```ts
colors: {
  primary: "var(--color-primary)",
  primary1: "var(--color-primary1)",
  secondary: "var(--color-secondary)",
  secondary1: "var(--color-secondary1)",
  secondary2: "var(--color-secondary2)",
  bg: "var(--color-bg)",
  text: "var(--color-text)",
  text1: "var(--color-text1)",
  text2: "var(--color-text2)",
  button: "var(--color-button)",
  button1: "var(--color-button1)",
  button2: "var(--color-button2)",
  hoverbutton1: "var(--color-hoverbutton1)",
  hoverbutton2: "var(--color-hoverbutton2)",
}
```

## 📌 Notes for ThemeForest Reviewers

- Project uses `vite` for fast development and build.
- Code is properly typed with TypeScript.
- Includes unit tests to meet quality standards.
- Fully responsive and mobile-friendly.
- Follows atomic design methodology (complex > compound > shared).
- Simulates a full e-commerce experience with authentication and orders.

---

Thanks for checking out TrendMart! Happy coding ✨
