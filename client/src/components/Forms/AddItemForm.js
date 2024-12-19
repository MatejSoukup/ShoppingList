import React, { useState, useContext } from 'react';
import { ShoppingListContext } from '../Providers/ShoppingListProvider';

export function AddItemForm(){
        const [itemName, setItemName] = useState('');
        const { handleAddItem } = useContext(ShoppingListContext); // Assuming you have a method to add an item
    
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
                <label htmlFor="itemName">Item Name:</label>
                <input
                    type="text"
                    id="itemName"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                    required // Make this field required
                />
            </div>
            <button type="submit">Add Item</button>
        </form>
    );
}