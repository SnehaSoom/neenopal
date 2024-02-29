import React, { useState } from 'react';
import userData from './userData.json';
import './ProfileCard.css';
import profileImage from './profileImage.png';
import MailIcon from './mailIcon';
import PhoneIcon from './phoneIcon';
import InternetIcon from './internetIcon';
import HeartIcon from './heartIcon';
import EditIcon from './editIcon';
import TrashIcon from './trashIcon';
import EditModal from './EditModal';

const ProfileCard = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [editedUser, setEditedUser] = useState({});
  const [likedUsers, setLikedUsers] = useState({});
  const [visibleUsers, setVisibleUsers] = useState(userData.users);

  const toggleLike = (userId) => {
    setLikedUsers(prevLikedUsers => ({
      ...prevLikedUsers,
      [userId]: !prevLikedUsers[userId]
    }));
  };

  const handleDelete = (userId) => {
    const newVisibleUsers = visibleUsers.filter(user => user.id !== userId);
    setVisibleUsers(newVisibleUsers);
  };

  const handleEdit = (user) => {
    console.log("Edit icon clicked:", user); // Add console log here
    setEditedUser(user);
    setModalVisible(true);
  };

  const handleSave = (editedUser) => {
    // Update user details in userData.json or any other backend
    // console.log("Saving changes:", editedUser);
    let temp = [...visibleUsers];
    const index = temp.findIndex((ele)=> ele.id === editedUser.id);
    temp.splice(index, 1, editedUser);
    setVisibleUsers(temp);
    setModalVisible(false);
  };

  const handleCancel = () => {
    setEditedUser({});
    setModalVisible(false);
  };

  return (
    <>
      <div className="profile-cards-container">
        {visibleUsers.map(user => (
          <div className="profile-card" key={user.id}>
            <div className="image-container">
              <img src={profileImage} alt={user.name} className="profile-image" />
            </div>
            <div className="profile-details">
              <h4>{user.name}</h4>
              <p><MailIcon /> {user.email}</p>
              <p><PhoneIcon /> {user.phone}</p>
              <p><InternetIcon /> {user.website}</p>
            </div>
            <div className="button-container">
              <div className='button-box'>
                <button className="icon-button" onClick={() => toggleLike(user.id)}>
                  <HeartIcon className={`heart-icon`} liked={likedUsers[user.id]} />
                </button>
              </div>
              <div className='button-box'>
                <button className="icon-button" onClick={() => handleEdit(user)}>
                  <EditIcon />
                </button>
              </div>
              <div>
                <button className="icon-button" onClick={() => handleDelete(user.id)}>
                  <TrashIcon />
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Render the EditModal if modalVisible is true */}
        {modalVisible && (
          <EditModal
            user={editedUser}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        )}
      </div>
    </>
  );
};

export default ProfileCard;
