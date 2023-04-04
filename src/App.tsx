import { useContext } from "react";
import { useTranslation } from "react-i18next";
import Layout, { ThemeContext } from "./components/layout/Layout";
import LanguageSwitch from "./components/LanguageSwitch";



function App() {
  const { t } = useTranslation();

  return (
    <Layout>
      <h1>{t("appTitle")}</h1>
      <p>{t("appDescription")}</p>
      <LanguageSwitch/>
    </Layout>
  );
}

export default App;