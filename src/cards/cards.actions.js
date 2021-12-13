import getCardsData from '../gateway';
export const DATA_RECEIVED = 'DATA_RECEIVED';
export const cardsDataReceived = cards => {
  return {
    type: DATA_RECEIVED,
    payload: {
      cards,
    },
  };
};
export const fetchCardsData = () => {
  return function (dispatch) {
    getCardsData().then(cards => {
      dispatch(cardsDataReceived(cards.data.hits));
    });
  };
};
