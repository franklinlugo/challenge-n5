import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  EN: {
    translation: {
      title: 'Van Helsing',
      getActors: 'Get Actors',
    },
  },
  ES: {
    translation: {
      title: 'Van Helsing',
      getActors: 'Obtener actores',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'EN',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;