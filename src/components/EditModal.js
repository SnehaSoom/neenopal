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
          Basic Modal
          <div className="close-button" onClick={handleCancel}>
            <span>&times;</span>
          </div>
        </div>
        {/* <hr /> Add a horizontal line */}

        <div className="input-group">
          <div className='label-container'>
            <label>
            <span className="required">*</span>
             Name :</label>
          </div>
          <div className='input-container'>
            <input
              type="text"
              name="name"
              value={editedUser.name || ''}
              onChange={handleChange}
            />
          </div>

        </div>
        <div className="input-group">
          <div className='label-container'>
            <label>
            <span className="required">*</span> Email:</label>
          </div>
          <div className='input-container'>
            <input
              type="email"
              name="email"
              value={editedUser.email || ''}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="input-group">
          <div className='label-container'>
            <label>
            <span className="required">*</span>
             Phone:</label>
          </div>
          <div className='input-container'>
            <input
              type="tel"
              name="phone"
              value={editedUser.phone || ''}
              onChange={handleChange}
            />

          </div>

        </div>
        <div className="input-group">
          <div className='label-container'>
            <label>
            <span className="required">*</span>
             Website:</label>
          </div>
          <div className='input-container'>
            <input
              type="text"
              name="website"
              value={editedUser.website || ''}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="modal-buttons">
          <button className='cancel-btn' onClick={handleCancel}>Cancel</button>
          <button className='save-btn' onClick={handleSave}>OK</button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
