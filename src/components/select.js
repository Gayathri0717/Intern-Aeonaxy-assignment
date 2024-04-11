
import React, { useState } from 'react';
import './select.css';
import image1 from '../images/s4.png';
import image2 from '../images/image.jpg';
import image3 from '../images/image2.jpg';
import { FaCheckCircle, FaAngleLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Select = () => {
  const location = useLocation();
  const avatarImage = location.state && location.state.avatarImage;
  const navigate = useNavigate();
  const handleContinue = () => {
    navigate('/email', { state: { avatarImage } });
  };

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="cont3">
      <div className='dibbble'>
        <h2>dribbble</h2>
        <FaAngleLeft className="back-icon" onClick={() => navigate(-1)} />
      </div>
      <div className="center-content">
        <h1 className='wel'>What brings you to dribbble?</h1>
        <p className='sub'>Select the options that best describe you.Don't worry, you can explore other options later.</p>
      </div>
      <div className="image-section">
        <div className={`image-box ${selectedImage === image1 ? 'selected' : ''}`} onClick={() => handleImageClick(image1)}>
          <img src={image1} alt="Image 1" className="image" />
          <p className="description">I'm a designer looking to share my work</p>
          {selectedImage === image1 && <FaCheckCircle className="tick-icon" />}
        </div>
        <div className={`image-box ${selectedImage === image2 ? 'selected' : ''}`} onClick={() => handleImageClick(image2)}>
          <img src={image2} alt="Image 2" className="image" />
          <p className="description">I'm looking to hire a desginer</p>
          {selectedImage === image2 && <FaCheckCircle className="tick-icon" />}
        </div>
        <div className={`image-box ${selectedImage === image3 ? 'selected' : ''}`} onClick={() => handleImageClick(image3)}>
          <img src={image3} alt="Image 3" className="image" />
          <p className="description">I'm looking for design inspiration</p>
          {selectedImage === image3 && <FaCheckCircle className="tick-icon" />}
        </div>
      </div>
      <p className='multiple'>Anything else?You can select multiple</p>
      <button className="finish" onClick={handleContinue}>Finish</button>
    </div>
  );
};

export default Select;



