import firebase from 'firebase/app';
import 'firebase/auth';

import mushroomList from '../../components/mushroomList/mushroomList';
import mycologistList from '../../components/mycologistList/mycologistList';

const authDiv = $('#auth');
const forestDiv = $('#forest');
const mycologistsDiv = $('#mycologists');
const logoutButton = $('#navbar-logout-button');
const singleMycoDiv = $('#single-myco');

const checkLoginStatus = () => {
  // if user is logged in: show mushrooms, hide login btn, show logout btn
  // else do the opposite
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      forestDiv.removeClass('hide');
      mycologistsDiv.removeClass('hide');
      singleMycoDiv.removeClass('hide');
      logoutButton.removeClass('hide');

      mushroomList.buildForest();
      mycologistList.buildMycologsts();
    } else {
      authDiv.removeClass('hide');
      forestDiv.addClass('hide');
      mycologistsDiv.addClass('hide');
      singleMycoDiv.addClass('hide');
      logoutButton.addClass('hide');
    }
  });
};

export default {
  checkLoginStatus,
};
