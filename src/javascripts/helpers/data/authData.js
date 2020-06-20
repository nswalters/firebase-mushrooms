import firebase from 'firebase/app';
import 'firebase/auth';

const authDiv = $('#auth');
const forestDiv = $('#forest');
const logoutButton = $('#navbar-logout-button');

const checkLoginStatus = () => {
  // if user is logged in: show mushrooms, hide login btn, show logout btn
  // else do the opposite
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      forestDiv.removeClass('hide');
      logoutButton.removeClass('hide');
    } else {
      authDiv.removeClass('hide');
      forestDiv.addClass('hide');
      logoutButton.addClass('hide');
    }
  });
};

export default {
  checkLoginStatus,
};
