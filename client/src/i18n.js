import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          menu: "Menu",
          delete: "Delete",
          archive: "Archive",
          items: "Items: ",
          profile: "Profile", // Added translation for Profile
          close: "Close", // Added translation for Close button
          listName: "List Name", // Added translation for List Name
          addList: "Add list", // Added translation for Add list button
          leave: "Leave", // Added translation for Leave button
          fulfilled: "Fulfilled", // Added translation for fulfilled items
          unfulfilled: "Unfulfilled", // Added translation for unfulfilled items
          noDataProvided: "No additional data provided", // Added translation for no data message
          edit: "Edit", // Added translation for Edit button
          itemName: "Item Name", // Added translation for Item Name label
          addItem: "Add Item", // Added translation for Add Item button
          memberEmail: "Member Email", // Added translation for Member Email label
          addMember: "Add Member", // Added translation for Add Member button
        },
      },
      cs: {
        translation: {
          menu: "Menu",
          delete: "Smazat",
          archive: "Archivovat",
          items: "Položky: ",
          profile: "Profil", // Added translation for Profile in Czech
          close: "Zavřít", // Added translation for Close button in Czech
          listName: "Název seznamu", // Added translation for List Name in Czech
          addList: "Přidat seznam", // Added translation for Add list button in Czech
          leave: "Opustit", // Added translation for Leave button in Czech
          fulfilled: "Splněno", // Added translation for fulfilled items in Czech
          unfulfilled: "Nesplněno", // Added translation for unfulfilled items in Czech
          noDataProvided: "Žádná další data nejsou k dispozici", // Added translation for no data message in Czech
          edit: "Upravit", // Added translation for Edit button in Czech
          itemName: "Název položky", // Added translation for Item Name label in Czech addItem: "Přidat položku", // Added translation for Add Item button in Czech
          memberEmail: "Email člena", // Added translation for Member Email label in Czech
          addMember: "Přidat člena", // Added translation for Add Member button in Czech
        },
      },
    },
    lng: "en", // Default language
    fallbackLng: "en", // Fallback language
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18n; // Ensure you are exporting the i18n instance