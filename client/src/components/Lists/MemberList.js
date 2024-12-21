import { Member } from "../Items/Member";
import { useTranslation } from "react-i18next"; // Import useTranslation hook

export function MemberList({ list }) {
  const { t } = useTranslation(); // Initialize translation function

  console.log(list);
  return list && list.length > 0 ? ( // Check if list is defined and has items
    <div>
      {list.map((item) => (
        <Member key={item.id} item={item} /> // Add a key prop for each member
      ))}
    </div>
  ) : (
    <p>{t('noDataProvided')}</p> // Translated message for no data
  );
}