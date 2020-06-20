// import utils from '../../helpers/utils';
import mushroomData from '../../helpers/data/mushroomData';

// get all mushrooms
// loop and create domstring
// printtodom

const buildForest = () => {
  mushroomData.getMushrooms()
    .then((response) => console.error('Get Mushrooms Worked!!', response.data))
    .catch((err) => console.error('Get Mushrooms BROKE :(', err));

  // const domString = 'I SEE MOAR MUSHROOMS!!!';
  // utils.printToDom('#forest', domString);
};

export default {
  buildForest,
};
