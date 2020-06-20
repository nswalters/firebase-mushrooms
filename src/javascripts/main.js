import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';
import auth from './components/auth/auth';
import authData from './helpers/data/authData';
import myNavbar from './components/myNavbar/myNavbar';

import 'bootstrap';
import '../styles/main.scss';

// be able to log in
// be able to log out
// see login button if we're not logged in
// see a logout button if we ARE logged in
// see a list of mushrooms (like a forest) if we ARE logged in

const init = () => {
  firebase.initializeApp(apiKeys.firebaseConfig);
  authData.checkLoginStatus();
  auth.loginButton();
  myNavbar.logoutEvent();
};

init();
