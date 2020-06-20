import auth from './components/auth/auth';

import 'bootstrap';
import '../styles/main.scss';

// be able to log in
// be able to log out
// see login button if we're not logged in
// see a logout button if we ARE logged in
// see a list of mushrooms (like a forest) if we ARE logged in

const init = () => {
  auth.loginButton();
};

init();
