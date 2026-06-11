# Syncing-State-with-LocalStorage-using-a-Custom-Hook

## Student

Paulina Salomon

## Overview

This project demonstrates how to create and use a custom React hook called `useLocalStorage`.

The custom hook combines React's state management with the browser's built-in LocalStorage API. This allows user preferences to be saved even after refreshing the page or closing and reopening the browser.

The application implements a Dark Mode and Light Mode toggle. When the user changes the theme, the selected preference is automatically stored in LocalStorage and restored when the application loads again.

---

## Assignment Objectives

This project demonstrates the following React concepts:

* Creating a custom hook
* Using React's `useState` hook
* Using React's `useEffect` hook
* Reading data from LocalStorage
* Writing data to LocalStorage
* Persisting state across page refreshes
* Creating reusable React logic
* Managing user preferences

---

## Features

### Custom Hook

A reusable custom hook called `useLocalStorage` was created.

The hook behaves similarly to React's built-in `useState` hook but automatically synchronizes data with LocalStorage.

### Persistent Theme Preference

The user's selected theme is saved automatically.

When the page reloads, the application restores the previously selected theme.

### Dark Mode and Light Mode

Users can switch between:

* Light Mode
* Dark Mode

The application updates immediately when the button is clicked.

### Automatic LocalStorage Synchronization

Whenever the theme state changes, the hook automatically updates LocalStorage.

---

## Technologies Used

* React
* Vite
* JavaScript
* CSS
* LocalStorage API

---

## Project Structure

```text
src/
├── hooks/
│   └── useLocalStorage.js
├── ThemeToggle.jsx
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

---

## How the Application Works

### Step 1: Load Existing Data

When the application starts, the custom hook checks LocalStorage.

```javascript
const savedValue = localStorage.getItem(key);
```

If a value already exists, it loads that value.

Otherwise, it uses the default value provided to the hook.

---

### Step 2: Create React State

The hook creates state using React's useState hook.

```javascript
const [value, setValue] = useState(...)
```

This state behaves like normal React state.

---

### Step 3: Watch for Changes

The hook uses useEffect to monitor the state.

```javascript
useEffect(() => {
  localStorage.setItem(key, JSON.stringify(value));
}, [key, value]);
```

Whenever the value changes, the updated value is automatically saved to LocalStorage.

---

### Step 4: Use the Hook

The ThemeToggle component imports and uses the custom hook.

```javascript
const [darkMode, setDarkMode] =
  useLocalStorage("darkMode", false);
```

The component can use the hook exactly like useState.

---

## Test Cases

### Normal Test Cases

### Test Case 1

Action:

Toggle from Light Mode to Dark Mode.

Expected Result:

* Dark Mode activates
* Background color changes
* Text updates correctly

Result:

PASS

---

### Test Case 2

Action:

Toggle from Dark Mode to Light Mode.

Expected Result:

* Light Mode activates
* Background color changes
* Text updates correctly

Result:

PASS

---

### Test Case 3

Action:

Refresh the page.

Expected Result:

* Previously selected theme remains active
* State is restored from LocalStorage

Result:

PASS

---

## Edge Test Cases

### Test Case 4

Action:

First visit to the application.

Expected Result:

* No LocalStorage value exists
* Default Light Mode loads correctly

Result:

PASS

---

### Test Case 5

Action:

Refresh the page multiple times.

Expected Result:

* Theme preference remains saved
* No loss of data

Result:

PASS

---

### Test Case 6

Action:

Close and reopen the browser.

Expected Result:

* Theme preference remains stored
* Application restores previous state

Result:

PASS

---

## Installation Instructions

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project folder:

```bash
cd custom-hook-uselocalstorage
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the URL displayed in the terminal to view the application.

---

## Learning Outcomes

Through this project I learned how to:

* Create reusable custom React hooks
* Persist state using LocalStorage
* Combine useState and useEffect
* Synchronize React state with browser storage
* Improve user experience by saving preferences
* Reduce duplicate code through reusable logic

---

## Author

Paulina Salomon


