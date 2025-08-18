# Farco Global Logistics Theme

A responsive, modern, and professional React-based theme concept for 'Farco Global,' an international company specializing in freight forwarding, charter shipments, and ship brokerage. This project showcases a clean and comprehensive UI/UX for a corporate logistics website.

## ✨ Features

- **Fully Responsive Design:** Optimized for desktop, tablet, and mobile devices.
- **Modern Tech Stack:** Built with React, TypeScript, and Tailwind CSS for a fast and maintainable codebase.
- **Comprehensive Page Set:** Includes a wide range of pages to cover all aspects of a corporate logistics site:
    - Home Page with dynamic sections
    - Detailed Services Pages (list and individual)
    - Ship Marketplace with filtering and detail views
    - About Us, News, and Contact pages
    - User Authentication and Quote Request forms
- **Interactive UI:** Features dynamic filtering, navigation dropdowns, and a clean, user-friendly form design.
- **Professional Aesthetic:** A clean, corporate color scheme and typography that exudes professionalism and trust.

## 🚀 Getting Started

This project is set up to run directly in the browser using ES modules and a CDN for dependencies, so there's no complex build step required.

### Prerequisites

You just need a modern web browser and a simple local web server.

### Installation & Running

1.  **Clone the repository (or download the files):**
    ```sh
    git clone <repository-url>
    cd <repository-directory>
    ```

2.  **Serve the project files:**
    You can use any simple static file server. Here are a couple of popular options:

    *   **Using Python:**
        ```sh
        # If you have Python 3
        python -m http.server
        ```

    *   **Using Node.js (with the `serve` package):**
        ```sh
        # If you don't have 'serve' installed globally, you can use npx
        npx serve
        ```

3.  **Open in browser:**
    Navigate to the local address provided by your server (e.g., `http://localhost:8000` or `http://localhost:3000`). The application should load.

## 📂 File Structure

The project is organized with a clear and logical structure:

```
.
├── index.html          # Main HTML entry point, includes CDN links and base styles
├── index.tsx           # React application entry point
├── App.tsx             # Root component with React Router configuration
├── constants.tsx       # Mock data, SVG icons, and other constants
├── types.ts            # TypeScript type definitions for the application
├── metadata.json       # Application metadata
├── components/         # Reusable React components
│   └── layout/
│       ├── Header.tsx
│       └── Footer.tsx
└── pages/              # Page-level components
    ├── HomePage.tsx
    ├── AboutPage.tsx
    ├── ContactPage.tsx
    ├── ...and more
```

## 💻 Technology Stack

- **React 19:** For building the user interface.
- **TypeScript:** For static typing and improved code quality.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development (used via CDN).
- **React Router:** For client-side routing and navigation.
- **ES Modules:** The entire application uses native browser ES modules, loaded via `esm.sh` CDN, eliminating the need for a local bundler for development.
