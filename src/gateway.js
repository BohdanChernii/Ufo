const axios = require('axios').default;
const getCardsData = () =>
  axios
    .get(
      'https://pixabay.com/api/?key=24742503-924ee553755a28336bdc09ec3&q=cats&image_type=all&per_page=100',
    )
    .then(response => response);

console.log(getCardsData());
export default getCardsData;
