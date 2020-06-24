import mycologistData from './mycologistData';
import mycologistMushroomData from './mycologistMushroomData';
import mushroomData from './mushroomData';

const getSingleMycoWithShrooms = (mycologistId) => new Promise((resolve, reject) => {
  // get the mycologist id is mycologistId
  mycologistData.getMycologistById(mycologistId)
    .then((response) => {
      const mycologist = response.data;
      mycologist.id = mycologistId;
      mycologist.mushrooms = [];

      // get all of their mycologistMushrooms using the mycologist.uid
      mycologistMushroomData.getMycoShroomsByMycoUid(mycologist.uid).then((mycoShrooms) => {
        // get all of the mushrooms
        mushroomData.getMushrooms().then((allMushrooms) => {
          // add the mycologists owned mushrooms to mycologist.mushrooms[]
          mycoShrooms.forEach((mycoShroom) => {
            const mushroom = allMushrooms.find((m) => m.id === mycoShroom.mushroomId);
            mycologist.mushrooms.push(mushroom);
          });
          resolve(mycologist);
        });
      });
    })
    .catch((err) => reject(err));
});

export default {
  getSingleMycoWithShrooms,
};
