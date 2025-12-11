"use client";

import { createContext, useState, useContext, ReactNode } from "react";
import { translations } from "./translations";
// Importe o objeto translations e os tipos
import { LanguageContextType, LanguageContent } from '@/types/languageContext';

// --- 1. Definição do Valor Padrão (RESOLVE O ERRO ts(2339)) ---
// Este valor DEVE ser totalmente tipado e corresponder à LanguageContextType.
const defaultContextValue: LanguageContextType = {
    // Definimos os valores padrão para o TypeScript
    language: 'en',
    toggleLanguage: () => {}, // Função vazia para placeholder
    t: (key: string, section: keyof LanguageContent) => key, // Função placeholder
};

// 2. Criação do Contexto
// Passamos o tipo LanguageContextType e o defaultContextValue.
const LanguageContext = createContext<LanguageContextType>(defaultContextValue);

// ... (Restante do Componente Provider) ...
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
    // Começa na seção (ex: projects)
    let content = translations[language][section]; 

    // Se houver uma sub-chave (ex: miraflix), acessa o próximo nível
    if (subKey) {
        // Usa Optional Chaining (?.) para garantir que o subKey exista
        content = content[subKey];
    }
    
    // Retorna a chave final ou o fallback (a própria key)
    return content?.[key] ?? key; 
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