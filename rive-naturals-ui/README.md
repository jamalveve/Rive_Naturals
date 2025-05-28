# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



# Rive Naturals UI

A modern, mobile-friendly React.js frontend for the Rive Naturals skincare e-commerce platform.

---

## 🚀 Features

- **User Registration & Login:** Secure, persistent authentication.
- **Product Browsing:** Responsive product display with details and images.
- **Cart Management:** Add, remove, and update items.
- **Document Upload:** Upload, download, and delete files (with size validation).
- **Learning Resources Tab:** Save and manage resource links.
- **Social Links Tab:** Quick access to social media.
- **Chatbot:** Interactive onboarding and FAQ assistant.
- **Mobile-First Design:** Fully responsive using Tailwind CSS.

---

## 🛠️ Tech Stack

- [React.js](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [Lucide React](https://lucide.dev/icons/)

---

## 📦 Installation

### Prerequisites

- Node.js 18+
- npm(comes with node)

### Steps

1. **Clone the repository:**

git clone https://github.com/jamalveve/Rive_Naturals.git
 cd rive-naturals-ui


2. **Install dependencies:**

npm install


3. **Run the development server:**

npm run dev

The app will be available at [http://localhost:5173](http://localhost:5173).

---

## ⚙️ Configuration

- The frontend expects the backend API to be running at `http://localhost:8080`.
- Update API endpoints in your service files if your backend runs elsewhere.

---

## 🗂️ Project Structure


src/
 components/ # products,Auth, etc.
 features/ # Auth, products, cart, etc.
 pages/ # Route-level pages
 services/ # API logic
 hooks/ # Custom React hooks
 styles/ # Tailwind css
 App.jsx
 main.jsx


---

## 📱 Mobile View

- Built mobile-first with Tailwind CSS.
- Responsive layouts: Buttons, forms, tabs, and lists adapt for small screens.
- Test on various devices for best results.

---

## 🧩 Key Components

- **RegistrationForm:** Handles user registration and login logic.
- **ChatInterface:** Main chatbot UI with message display and input.
- **DocsTab:** Upload, list, download, and delete documents.
- **LearningTab:** Add, list, download, and delete learning resource links.
- **SocialLinksTab:** Displays social media links.
- **Tab Navigation:** Easily switch between Chat, Docs, Learning, and Social tabs.

---




