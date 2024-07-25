import { createStore } from 'redux';

const initialState = {
  currentIndex: 0,
  images: [
    require('./images/image1.jpg').default,
    require('./images/image2.jpg').default,
    require('./images/image3.jpg').default,
    require('./images/image4.jpg').default,
    require('./images/image5.jpg').default
  ]
};

const NEXT_IMAGE = 'NEXT_IMAGE';
const PREV_IMAGE = 'PREV_IMAGE';

export const nextImage = () => ({ type: NEXT_IMAGE });
export const prevImage = () => ({ type: PREV_IMAGE });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_IMAGE:
      return {
        ...state,
        currentIndex: (state.currentIndex + 1) % state.images.length
      };
    case PREV_IMAGE:
      return {
        ...state,
        currentIndex: (state.currentIndex - 1 + state.images.length) % state.images.length
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
