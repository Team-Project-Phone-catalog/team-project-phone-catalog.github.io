import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // Визначає мову користувача автоматично
  .use(LanguageDetector)
  // Передає i18n в react-i18next
  .use(initReactI18next)
  .init({
    debug: true, // Допомагає бачити помилки в консолі під час розробки
    fallbackLng: 'en', // Мова за замовчуванням
    interpolation: {
      escapeValue: false, // Не потрібно для React (він захищає від XSS автоматично)
    },
    resources: {
      en: {
        translation: {
          nav: {
            home: 'Home',
            phones: 'Phones',
            tablets: 'Tablets',
            accessories: 'Accessories',
            orders: 'Orders',
            chat: 'Chat',
            wishlist: 'Wish List',
            wallet: 'Wallet',
            admin: 'Admin',
          },
        },
      },
      ua: {
        translation: {
          nav: {
            home: 'Головна',
            phones: 'Телефони',
            tablets: 'Планшети',
            accessories: 'Аксесуари',
            orders: 'Замовлення',
            chat: 'Чат',
            wishlist: 'Обране',
            wallet: 'Гаманець',
            admin: 'Адмін',
          },
        },
      },
    },
  });

export default i18n;
