// Modal.js
import React from 'react';
import "../../Styles/Modal.css"

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null; // If modal is not open, do not render anything

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>X</button>
                {children} {/* Render any children passed to the modal */}
            </div>
        </div>
    );
};

export default Modal;
