import React, { useState, useContext } from 'react';
import { ShoppingListContext } from '../Providers/ShoppingListProvider';

export function EditListForm(){

    const {currentList , handleEdit} = useContext(ShoppingListContext)

        const [name, setName] = useState(currentList.name);
    
        const handleSubmit = (e) => {
            e.preventDefault(); // Prevent the default form submission behavior
    
            // Call the addItem function with the new item's name
            handleEdit(name);
    
            // Reset the form field
            setName('');
        };


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="itemName">Item Name:</label>
                <input
                    type="text"
                    id="itemName"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required // Make this field required
                />
            </div>
            <button type="submit">Add Item</button>
        </form>
    );
}