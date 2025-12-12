"use client";

import { createContext, useState, useContext, ReactNode } from "react";
import { translations } from "./translations";
import { LanguageContextType, LanguageContent } from '@/types/languageContext';

const defaultContextValue: LanguageContextType = {
  language: 'en',
  toggleLanguage: () => {}, 
  t: (() => "") as LanguageContextType["t"],
};

// Passa o tipo LanguageContextType e o defaultContextValue.
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
  // atende qualquer estrutura por segurança (as any), já que
  // as seções têm formatos diferentes (objetos simples, objetos aninhados, etc.)
    const allTranslations = translations as unknown as Record<string, Record<string, unknown>>;
    const langObj = allTranslations?.[language];
  if (!langObj) return key;

    const sectionObj = (langObj as Record<string, unknown>)[section as string] as
      | Record<string, unknown>
      | undefined;
    if (!sectionObj) return key;

  // Se houver subKey, acessamos esse nível primeiro
  if (subKey) {
      const subObj = sectionObj?.[subKey as string] as Record<string, unknown> | undefined;
      if (!subObj) return key;
      const val = subObj?.[key as string] as unknown;
      return typeof val === "string" ? (val as string) : key;
  }

    const val = sectionObj?.[key as string] as unknown;
    return typeof val === "string" ? (val as string) : key;
};

// ... o restante do Provider e do useLanguage

  const value: LanguageContextType = { language, toggleLanguage, t }; // Tipagem explícita aqui

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// O hook usa useContext(LanguageContext), que já está tipado como LanguageContextType.
export const useLanguage = () => useContext(LanguageContext);