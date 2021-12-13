import React from 'react';
import store from '../store.js';
import { Provider } from 'react-redux';
import CardsBoard from './CardsBoard';
const App = () => {
  return (
    <Provider store={store}>
      <CardsBoard />
    </Provider>
  );
};
export default App;
