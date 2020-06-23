import mycologistComponent from '../mycologist/mycologist';
import mycologistData from '../../helpers/data/mycologistData';
import utils from '../../helpers/utils';

const buildMycologsts = () => {
  mycologistData.getMycologists()
    .then((mycologists) => {
      let domString = `
      <h2 class="text-center">Mycologists</h2>
      <div class="d-flex flex-wrap">
    `;

      mycologists.forEach((mycologist) => {
        domString += mycologistComponent.mycologistMaker(mycologist);
      });

      domString += '</div>';

      utils.printToDom('#mycologists', domString);
    })
    .catch((err) => console.error('Get Mycologists BROKE :(', err));
};

export default {
  buildMycologsts,
};
