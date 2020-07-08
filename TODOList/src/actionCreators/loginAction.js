import React from 'react';
import TYPES from '../const/types';
import firebase from 'firebase';

const emailChanged = text => {
  return {
    type: TYPES.EMAIL_CHANGED,
    payload: text,
  };
};

const passwordChanged = text => {
  return {
    type: TYPES.PASSWORD_CHANGED,
    payload: text,
  };
};

const startLogin = (email, password) => {
  console.log(email);
  return ((dispatch) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email,password)
      .then(user => {
        console.log(user);
      })
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email,password)
          .then(user => {
            console.log(user);
          })
          .catch(() => {
            console.log('login failed');
            // dispatch({type:LOGIN_USER_SUCCESS, payload:user});
          });
      });
  };)
};

export {emailChanged, passwordChanged,startLogin};
