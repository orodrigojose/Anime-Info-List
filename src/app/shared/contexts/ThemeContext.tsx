import { ReactNode, createContext, useState, useCallback, useContext, useEffect } from 'react';

type themeType = 'dark' | 'light';
type themeContextProps = { children?: ReactNode }

const getThemeLs = () => {
  return localStorage.getItem('theme') as themeType;
}
const saveThemeLs = (theme: themeType) => localStorage.setItem('theme', theme);

interface IThemeContextData {
  theme: themeType;
  toggleTheme: () => void;
}

const ThemeContext = createContext({} as IThemeContextData);

export const useThemeContext = () => {
  return useContext(ThemeContext);
}

export const ThemeContextProvider = ({ children }: themeContextProps) => {
  const [theme, setTheme] = useState<themeType>(getThemeLs());

  const toggleTheme = useCallback(() => {
    setTheme(oldTheme => oldTheme === 'light' ? 'dark' : 'light');
  }, []);

  useEffect(() => {
    const oldTheme = theme === 'light' ? 'dark' : 'light';
    document.body.classList.remove(oldTheme);
    document.body.classList.add(theme);
    saveThemeLs(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      { children }
    </ThemeContext.Provider>
  );
}
