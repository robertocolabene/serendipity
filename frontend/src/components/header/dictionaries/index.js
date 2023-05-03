const dictionaries = {
  en: () => import('./en.json').then((module) => module.default),
  it: () => import('./it.json').then((module) => module.default),
};

export const getDictionary = async (locale) => dictionaries[locale]();