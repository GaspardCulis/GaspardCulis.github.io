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

    "featured.title": "Featured Work",
    "featured.description":
      "I love to create things, and I'm always working on something new! You can view some of my favorite projects below.",
    "featured.more": "See more",

    "toolkit.title": "My toolkit",
    "toolkit.description":
      "I love learning new technologies, and I always try to keep-up to date with new releases. You can see my skill-tree below.",
    "toolkit.hint": "Drag me around!",

    "about.title": "A bit about me",

    "testimonials.title": "What people I've worked with say",
    "testimonial.description":
      "I've done freelance work and internships, and I love collaborating with a team.",

    "projects.title": "My projects",
    "projects.description":
      "Here is a non-curated list of the projects I've been working on for the last years.",
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
