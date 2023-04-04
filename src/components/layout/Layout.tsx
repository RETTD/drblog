import { createContext, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

interface ThemeProps {
  background: string;
  text: string;
}

const lightTheme: ThemeProps= {
  background: "#ffffff",
  text: "#000000",
};

const darkTheme: ThemeProps = {
  background: "#000000",
  text: "#ffffff",
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

function Layout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const currentTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        style={{
          background: currentTheme.background,
          color: currentTheme.text,
          height: "100vh",
        }}
      >
        {/* add header with switch button */}
        {children}
        <button onClick={toggleTheme}>SWITCH </button>
      </div>
    </ThemeContext.Provider>
  );
}
export default Layout;

//ogolnie w tym layout najlepiej by było dodać header - w nim zmiana jezyka i zmiana motywu - oraz podstawowe odnośniki, dodatkowo Footer tez mozna by tu dodać.
