# Syncing-State-with-LocalStorage-using-a-Custom-Hook

# Custom Hook: useLocalStorage

## Overview

This project demonstrates how to create and use a custom React hook called `useLocalStorage`.

The hook combines React state management with the browser's localStorage API, allowing data to persist even after the page is refreshed.

The application implements a theme toggle that allows users to switch between Light Mode and Dark Mode. The selected theme is automatically saved in localStorage and restored when the page reloads.

---

## Features

* Custom React Hook
* LocalStorage Integration
* Persistent User Preferences
* Dark Mode / Light Mode Toggle
* useState and useEffect
* Automatic Data Saving
* Automatic Data Loading

---

## Technologies Used

* React
* Vite
* JavaScript
* CSS
* LocalStorage API

---

## How It Works

The useLocalStorage hook:

1. Checks localStorage when the component loads.
2. Loads any previously saved value.
3. Uses React state to manage data.
4. Automatically saves updates to localStorage.
5. Returns a value and setter just like useState.

---

## Project Structure

```text
src/
├── hooks/
│   └── useLocalStorage.js
├── ThemeToggle.jsx
├── App.jsx
├── App.css
└── main.jsx
```

---

## Installation

```bash
npm install
npm run dev
```

---

## Author

Paulina Salomon

North Seattle College
Bachelor of Application Development
