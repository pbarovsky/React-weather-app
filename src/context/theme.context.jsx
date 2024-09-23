import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();
const THEME_KEY = "theme";

const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(true);

  const saveThemeLocalStorage = (theme) => {
    localStorage.setItem(THEME_KEY, JSON.stringify(theme))
  }

  useEffect(() => {
    const savedTheme = JSON.parse(localStorage.getItem(THEME_KEY));
    if (savedTheme !== null) {
      setDark(savedTheme);
      return;
    }

    const isSystemThemeDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setDark(isSystemThemeDark === true);
  }, []);

  return (
    <ThemeContext.Provider value={{ dark, setDark, saveThemeLocalStorage }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider };
export default ThemeContext;
