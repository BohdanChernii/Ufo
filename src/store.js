import { cardsReducer } from './cards/cards.reducer.js';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ || compose;
const enhancers = composeEnhancers(applyMiddleware(thunk));
const store = createStore(cardsReducer, enhancers);
export default store;
