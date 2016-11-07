import {
  UPLOAD_IMAGE
} from '../actions/actionTypes';

const initialState = {
  image: ''
};

export default function image(state = initialState, action = {}) {
  console.log('action ', action);

  switch (action.type) {
    case UPLOAD_IMAGE:
      return {
        ...state,
        image: action.payload
      };
    default:
      return state;
  }
}
