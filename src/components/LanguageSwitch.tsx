import { useTranslation } from "react-i18next";

const LanguageSwitch = () => {
  const {t, i18n} = useTranslation();

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const language = event.target.value;    
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <label htmlFor="language">{t("language")}</label>
      <select id="language" value={i18n.language} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="pl">Polski</option>
      </select>
    </div>
  );
};

export default LanguageSwitch;