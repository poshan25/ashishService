// components/LanguageSwitcher.js
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", lang: "English", flag: "🇺🇸" },
  { code: "fr", lang: "French", flag: "🇫🇷" },
  { code: "np", lang: "Nepali", flag: "🇳🇵" },
  { code: "ar", lang: "Arabic", flag: "🇸🇦" },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    closeDropdown();
  };

  useEffect(() => {
    document.body.dir = i18n.dir();
    // Close dropdown when clicking outside
    const handleClickOutside = (e) => {
      if (!e.target.closest('.language-switcher')) {
        closeDropdown();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [i18n]);

  return (
    <div className="language-switcher relative">
      <button
        onClick={toggleDropdown}
        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        aria-label="Change language"
      >
        {/* Globe icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50">
          {languages.map((lng) => (
            <button
              key={lng.code}
              className={`flex items-center w-full px-4 py-2 text-sm ${
                i18n.language === lng.code
                  ? "bg-gray-100 dark:bg-gray-700"
                  : "hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
              onClick={() => changeLanguage(lng.code)}
            >
              <span className="mr-2 text-xl">{lng.flag}</span>
              {lng.lang}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;