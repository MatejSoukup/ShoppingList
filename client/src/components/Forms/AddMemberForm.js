import React, { useState, useContext } from 'react';
import { ShoppingListContext } from '../Providers/ShoppingListProvider';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook

export function AddMemberForm() {
    const [memberEmail, setMemberEmail] = useState('');
    const { handleAddMember } = useContext(ShoppingListContext); // Assuming you have a method to add a member
    const { t } = useTranslation(); // Initialize translation function

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
                <label htmlFor="memberEmail">{t('memberEmail')}:</label> {/* Translated label for Member Email */}
                <input
                    type="email" // Changing to email type if you're using email to identify members
                    id="memberEmail"
                    value={memberEmail}
                    onChange={(e) => setMemberEmail(e.target.value)}
                    required // Make this field required
                />
            </div>
            <button type="submit">{t('addMember')}</button> {/* Translated button text for Add Member */}
        </form>
    );
}