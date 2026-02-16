"use client";

import { createContext, useState, useContext, ReactNode } from "react";
import { translations } from "./translations";
import { LanguageContextType, LanguageContent } from '@/types/languageContext';

const defaultContextValue: LanguageContextType = {
  language: 'en',
  toggleLanguage: () => {}, 
  t: (() => "") as LanguageContextType["t"],
};

const LanguageContext = createContext<LanguageContextType>(defaultContextValue);

interface LanguageProviderProps {
    children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<'en' | 'pt'>("en");

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "pt" : "en"));
  };

// função que acessa e retorna o valor traduzido com base na chave, seção e sub-chave
const t = (key: string, section: keyof LanguageContent, subKey?: string) => {
  const allTranslations = translations as unknown as Record<string, Record<string, unknown>>;
  const langObj = allTranslations?.[language];
  if (!langObj) return key;

  let current = (langObj as Record<string, unknown>)[section as string];
  if (!current) return key;

  // permite caminho profundo: "englishLevel.traits / softSkills.label"
  if (subKey) {
    const pathParts = subKey.split(".");
    for (const part of pathParts) {
      current = (current as Record<string, unknown>)?.[part];
      if (!current) return key;
    }
  }

  const val = (current as Record<string, unknown>)?.[key];
  return typeof val === "string" ? val : key;
};

  const value: LanguageContextType = { language, toggleLanguage, t }; 

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);