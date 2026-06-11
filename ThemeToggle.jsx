import useLocalStorage from "./hooks/useLocalStorage";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);

  return (
    <div
      className="card"
      style={{
        backgroundColor: darkMode ? "#222" : "#f5f5f5",
        color: darkMode ? "#ffffff" : "#000000",
      }}
    >
      <h1>{darkMode ? "🌙 Dark Mode Enabled" : "☀️ Light Mode Enabled"}</h1>

      <button onClick={() => setDarkMode(!darkMode)}>Toggle Theme</button>

      <p>Refresh the page and your theme preference will remain saved.</p>
    </div>
  );
}

export default ThemeToggle;
