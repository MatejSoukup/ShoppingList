import React, { useState, useContext } from 'react';
import { ShoppingListContext } from '../Providers/ShoppingListProvider';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook

export function AddItemForm() {
    const [itemName, setItemName] = useState('');
    const { handleAddItem } = useContext(ShoppingListContext); // Assuming you have a method to add an item
    const { t } = useTranslation(); // Initialize translation function

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        // Call the addItem function with the new item's name
        handleAddItem(itemName);

        // Reset the form field
        setItemName('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="itemName">{t('itemName')}:</label> {/* Translated label for Item Name */}
                <input
                    type="text"
                    id="itemName"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                    required // Make this field required
                />
            </div>
            <button type="submit">{t('addItem')}</button> {/* Translated button text for Add Item */}
        </form>
    );
}