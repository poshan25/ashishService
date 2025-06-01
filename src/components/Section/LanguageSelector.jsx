import { changeLanguage } from "i18next";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", lang: "English" },
  { code: "fr", lang: "French" },
  { code: "np", lang: "Nepali" },
    { code: "ar", lang: "Arabic" },

];


const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLang = (lng) => {
    i18n.changeLanguage(lng);
  };


  useEffect(() => {
//arabic allignment ko lagi
    document.body.dir = i18n.dir()
  }, [i18n, i18n.language])


  return (
    <div>
      {languages.map((lng) => {
        return (
          <button className={lng.code === i18n.language ? "selected" : ""}
           onClick={() => changeLang(lng.code)} key={lng.code}>
            {lng.lang}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSelector;
