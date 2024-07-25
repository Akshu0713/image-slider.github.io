// src/components/Navigation.js

import React from 'react';
import { useDispatch } from 'react-redux';
import { nextImage, prevImage } from '../store';
import './Navigation.css';

const Navigation = () => {
  const dispatch = useDispatch();

  const handleNext = () => {
    dispatch(nextImage());
  };

  const handlePrev = () => {
    dispatch(prevImage());
  };

  return (
    <div className="navigation-buttons">
      <button className="button" onClick={handlePrev}>Back</button>
      <button className="button" onClick={handleNext}>Next</button>
    </div>
  );
};

export default Navigation;
