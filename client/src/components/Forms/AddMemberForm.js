import React, { useState, useContext } from 'react';
import { ShoppingListContext } from '../Providers/ShoppingListProvider';

export function AddMemberForm() {
    const [memberEmail, setMemberEmail] = useState('');
    const { handleAddMember } = useContext(ShoppingListContext); // Assuming you have a method to add a member

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        // Call the handleAddMember function with the new member's email
        handleAddMember(memberEmail);

        // Reset the form field
        setMemberEmail('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="memberEmail">Member Email:</label>
                <input
                    type="email" // Changing to email type if you're using email to identify members
                    id="memberEmail"
                    value={memberEmail}
                    onChange={(e) => setMemberEmail(e.target.value)}
                    required // Make this field required
                />
            </div>
            <button type="submit">Add Member</button>
        </form>
    );
}
