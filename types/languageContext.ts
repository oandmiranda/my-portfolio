// --- Tipos para as Traduções ---

export interface ProjectItem {
  title: string;
  description: string;
  github: string;
  findOutMore: string;
}

export interface AboutMeSection {
  title: string;
  content: string;
  graduation: Graduation;
  englishLevel: string;
  softSkills: SoftSkills;
  technologies: Technologies;
}

export interface Graduation {
status: string;
course: string;
university: string;
}

export interface SoftSkills {
  comunication: string;
  solveProblems: string;
  adaptability: string;
  ownership: string;
}

export interface Technologies {
  label: string;
}

export interface ProjectsSection {
  [key: string]: ProjectItem;
}

export interface ExperienceSection {
  title: string;
  jobStatus: string;
  company?: string;
  slogan: string;
  job: string;
  content: string;
  jobTechnologies: JobTechnologies;
}

export interface JobTechnologies {
  react: string;
  javaScript: string;
  typeScript: string;
  git: string;
  styledComponents: string;
}

export interface FooterItems {
  title: string;
  resume: string;
  socialMedias: string;
}

export interface FooterSection {
  [key: string]: FooterItems;
}

export interface SimpleNamespace {
  [key: string]: string;
}

// O conteúdo de um idioma (translations.en ou translations.pt)
export interface LanguageContent {
  nav: SimpleNamespace;
  header: SimpleNamespace;
  aboutMe: AboutMeSection;
  experience: ExperienceSection;
  sessions: SimpleNamespace;
  projects: ProjectsSection;
  footer: FooterSection;
  // Adicione outras seções aqui!
}

// O objeto global de traduções
export interface TranslationsType {
  // O idioma só pode ser 'en' ou 'pt'
  en: LanguageContent;
  pt: LanguageContent;
  [key: string]: LanguageContent;
}

// 🔑 ESSENCIAL: Define o formato exato que o useLanguage retorna.
export interface LanguageContextType {
  language: "en" | "pt";
  toggleLanguage: () => void;
  // A função t usa 'keyof LanguageContent' para forçar o uso de seções válidas (nav, header, etc.)
  t: (key: string, section: keyof LanguageContent, subKey?: string) => string;
}
