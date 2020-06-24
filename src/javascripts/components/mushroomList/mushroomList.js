import mushroomComponent from '../mushroom/mushroom';
import mushroomData from '../../helpers/data/mushroomData';
import utils from '../../helpers/utils';

const removeShroomEvent = (e) => {
  const mushroomId = e.target.closest('.card').id;
  console.error(mushroomId);

  // actually delete this mushroom from firebase
  mushroomData.deleteMushroom(mushroomId)
    .then(() => {
      // reprint the dom (so the lil shroomie goes bye bye)
      // eslint-disable-next-line no-use-before-define
      buildForest();
    })
    .catch((err) => console.error('could not delete mushroom', err));
};

const buildForest = () => {
  mushroomData.getMushrooms()
    .then((mushrooms) => {
      let domString = `
        <h2 class="text-center">Forest</h2>
        <div class="d-flex flex-wrap">
      `;

      mushrooms.forEach((mushroom) => {
        domString += mushroomComponent.mushroomMaker(mushroom);
      });

      domString += '</div>';

      utils.printToDom('#forest', domString);

      $('body').on('click', '.delete-shroom', removeShroomEvent);
    })
    .catch((err) => console.error('Get Mushrooms BROKE :(', err));
};

export default {
  buildForest,
};
