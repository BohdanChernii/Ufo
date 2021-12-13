import { DATA_RECEIVED } from './cards.actions.js';
const initialState = {
  cards: [],
};
export const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_RECEIVED: {
      return {
        ...state,
        cards: action.payload.cards,
      };
    }
    default:
      return state;
  }
};
