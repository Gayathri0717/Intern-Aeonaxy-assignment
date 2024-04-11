import React, { useRef, useState } from 'react';
import { FaCamera, FaAngleLeft } from 'react-icons/fa';
import './profile.css';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const fileInputRef = useRef(null);
  const [imagePreview, setImagePreview] = useState(null);
  const navigate = useNavigate();

  const handleCameraIconClick = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (event) => {
    const selectedFile = event.target.files[0]; 
    if (selectedFile && (selectedFile.type === 'image/jpeg' || selectedFile.type === 'image/png')) {
      const reader = new FileReader();

      reader.onload = () => {

        setImagePreview(reader.result);
      };

      reader.readAsDataURL(selectedFile);
    } else {

      alert('Please select a valid JPG or PNG image file.');
    }
  };

  const handleButtonClick = () => {

    navigate('/select', { state: { avatarImage: imagePreview } });
  };

  return (
    <div className="cont2">
      <div className='top-left-section'>
        <div className="header">
          <h2>dribbble</h2>
          <div className="back-icon" onClick={() => navigate(-1)}>
            < FaAngleLeft className="icon" />
          </div>

        </div>
        <div className="centered-text">
          <h1 className='welcome'>Welcome! Let's create your project</h1>
          <p className='describe'>Let others get to know you better! You can do these later</p>
          <p>Add an avatar</p>
          <div className="avatar-section">
            <div className="avatar" onClick={handleCameraIconClick}>
              {/* Display the image preview if available, otherwise display the camera icon */}
              {imagePreview ? (
                <img src={imagePreview} alt="Avatar" className="avatar-image" />
              ) : (
                <FaCamera className="camera-icon" />
              )}
            </div>
            <div className='img'>
              <p className="image-text"> Choose Image</p>
              <p className="image-text">or choose one of our defaults</p>
              <input
                type="file"
                accept="image/jpeg, image/png"
                onChange={handleFileInputChange}
                ref={fileInputRef}
                style={{ display: 'none' }}
              />
            </div>
          </div>
          <p>Add your location</p>
          <input type="text" placeholder="Enter a location" />

          <button className="next" onClick={handleButtonClick}>Next</button>
          <p className='return'>or Press RETURN</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
