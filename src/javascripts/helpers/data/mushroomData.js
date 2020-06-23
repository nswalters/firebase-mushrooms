import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

// const getMushrooms = () => axios.get(`${baseUrl}/mushrooms.json`);

const getMushrooms = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/mushrooms.json`)
    .then((response) => {
      const mushroomObjects = response.data;
      const mushrooms = [];
      Object.keys(mushroomObjects).forEach((mushroomId) => {
        // add the id onto each object
        mushroomObjects[mushroomId].id = mushroomId;

        // put the object onto the mushrooms array
        mushrooms.push(mushroomObjects[mushroomId]);
      });
      // take the response
      // format it into an array of objects
      // adding the id onto each object
      // resolve the new array of objects
      resolve(mushrooms);
    })
    .catch((err) => reject(err));
});

export default {
  getMushrooms,
};
