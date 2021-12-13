import React, { useEffect, useState } from 'react';
import Card from './card/Card';
import debounce from 'lodash.debounce';
import '../index.scss';
import { connect } from 'react-redux';
import { allCards } from '../cards/cards.selectors';
import { fetchCardsData } from '../cards/cards.actions';

const getFilteredItems = (tags, cards) => {
  if (!tags) {
    return cards;
  }
  return cards.filter(card => card.tags.includes(tags));
};
const CardsBoard = ({ cards, fetchCardsData }) => {
  const [sorting, setSorting] = useState([]);
  const [input, inputChange] = useState('');
  useEffect(() => {
    fetchCardsData();
    document.querySelector('.filter-tags').addEventListener('keyup', debounced);
    return () => {
      document.querySelector('.filter-tags').removeEventListener('keyup', debounced);
    };
  }, []);
  const handleChangeActivity = e => {
    setSorting(e.target.value);
  };

  const filterCards = getFilteredItems(input, cards);
  const filteredCards = e => inputChange(e?.target?.value);
  const debounced = debounce(filteredCards, 300);

  return (
    <div className="page">
      <div className="sort">
        <span className="sort-text">сортувати</span>
        <select name="" id="" value="" onChange={e => handleChangeActivity(e)}>
          <option value=""></option>
          <option value="comments">по коментарям</option>
          <option value="likes">по лайкам</option>
        </select>
        <div className="filter">
          <input
            type="text"
            className="filter-tags"
            placeholder="Відфільтрувати за тегами"
            onChange={debounced}
          />
        </div>
      </div>
      <section className="wrapper">
        <Card cards={filterCards} sorting={sorting} />
      </section>
    </div>
  );
};
const mapState = state => {
  return {
    cards: allCards(state),
  };
};
const mapDispatch = {
  fetchCardsData: fetchCardsData,
};
export default connect(mapState, mapDispatch)(CardsBoard);
