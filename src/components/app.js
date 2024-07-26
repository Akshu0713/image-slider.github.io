import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import Image from './image';
import Navigation from './navigation';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Image Slider</h1>
        <Image />
        <Navigation />
      </div>
    </Provider>
  );
};

export default App;
