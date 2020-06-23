import mycologistData from '../../helpers/data/mycologistData';

const buildMycologist = (e) => {
  const mycologistId = e.target.closest('.card').id;

  mycologistData.getMycologistById(mycologistId)
    .then((response) => {
      // todo use response.data to create a single mycologist div/card/whatnot
      console.error(response.data);
    })
    .catch((err) => console.error('problem with single mycologist', err));
};

export default {
  buildMycologist,
};
