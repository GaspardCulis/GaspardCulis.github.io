export const defaultLocale = "en";
export const locales = {
  en: "en-US",
  fr: "fr-FR",
};

export const ui = {
  en: {
    "nav.home": "Home",
    "nav.projects": "Projets",
    "nav.resume": "My CV",

    "hero.title": 'Hi, I\'m <span class="text-secondary">Gaspard Culis</span>.',
    "hero.description":
      "Passionate and versatile developer with a background in full-stack WebDev, GameDev, Machine Learning and more!",
    "hero.contact": "Contact me",
  },
  fr: {
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.resume": "Mon CV",

    "hero.title":
      '<span class="text-secondary">Gaspard Culis</span> - Développeur full-stack',
    "hero.description":
      "Développeur passionné et polyvalent, fort d'une expérience en développement web full-stack, GameDev, Machine Learning et bien plus encore !",
    "hero.contact": "Contactez moi",
  },
} as const;
