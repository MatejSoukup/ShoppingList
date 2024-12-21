import React, { useState, useContext } from 'react';
import { ShoppingListContext } from '../Providers/ShoppingListProvider';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook

export function EditListForm() {
    const { currentList, handleEdit } = useContext(ShoppingListContext);
    const [name, setName] = useState(currentList.name);
    const { t } = useTranslation(); // Initialize translation function

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        // Call the handleEdit function with the new item's name
        handleEdit(name);

        // Reset the form field
        setName('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="itemName">{t('listName')}:</label> {/* Translated label for List Name */}
                <input
                    type="text"
                    id="itemName"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required // Make this field required
                />
            </div>
            <button type="submit">{t('edit')}</button> {/* Translated button text for Edit */}
        </form>
    );
}