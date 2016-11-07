import {
  INCREMENT,
  DECREMENT,
  UPLOAD_IMAGE
} from './actionTypes';
import axios from 'axios';


const base = 'http://localhost:3000/api';

export function increment() {
  return {
    type: INCREMENT
  };
}

export function decrement() {
  return {
    type: DECREMENT
  };
}

export function uploadImage(image) {
  axios.post(`${base}/image`, {
    image: image,
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  return {
    type: UPLOAD_IMAGE,
    payload: image
  }
};
