import mycologistComponent from '../mycologist/mycologist';
import mycologistData from '../../helpers/data/mycologistData';
import singleMycologist from '../singleMycologist/singleMycologist';
import utils from '../../helpers/utils';

const buildMycologsts = () => {
  mycologistData.getMycologists()
    .then((mycologists) => {
      let domString = `
      <h2 class="text-center">Mycologist Hut</h2>
      <div class="d-flex flex-wrap">
    `;

      mycologists.forEach((mycologist) => {
        domString += mycologistComponent.mycologistMaker(mycologist);
      });

      domString += '</div>';

      utils.printToDom('#mycologists', domString);

      $('body').on('click', '.myco-card', singleMycologist.buildMycologist);
    })
    .catch((err) => console.error('Get Mycologists BROKE :(', err));
};

export default {
  buildMycologsts,
};
