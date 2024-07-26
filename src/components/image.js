import React from 'react';
import { useSelector } from 'react-redux';
import './Image.css';

const Image = () => {
  const currentIndex = useSelector((state) => state.currentIndex);
  const images = useSelector((state) => state.images);

  return (
    <div className="image-container">
      <img src={images[currentIndex]} alt="slide" style={{ width: '50%', height: 'auto' }} />
    </div>
  );
};

export default Image;
