import React, { useState } from 'react';
import './EditModal.css';

const EditModal = ({ user, onSave, onCancel }) => {
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSave = () => {
    onSave(editedUser);
    setEditedUser({});
  };

  const handleCancel = () => {
    setEditedUser({});
    onCancel();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4>Basic Modal</h4>
          <div className="close-button" onClick={handleCancel}>
            <span>&times;</span>
          </div>
        </div>
        <hr /> {/* Add a horizontal line */}
        
        <div className="input-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={editedUser.name || ''}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={editedUser.email || ''}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={editedUser.phone || ''}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label>Website:</label>
          <input
            type="text"
            name="website"
            value={editedUser.website || ''}
            onChange={handleChange}
          />
        </div>
        <div className="modal-buttons">
          <button onClick={handleCancel}>Cancel</button>
          <button onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
