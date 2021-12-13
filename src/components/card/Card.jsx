import React, { useState, useEffect } from 'react';
import Tags from './tags/Tags';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';

const Card = ({ cards, sorting }) => {
  if (sorting === 'comments') {
    cards.sort((a, b) => a.comments - b.comments);
  }
  if (sorting === 'likes') {
    cards.sort((a, b) => a.likes - b.likes);
  }

  return (
    <>
      {cards.map(item => (
        <article className="card" key={item.id}>
          <a href={item.pageURL}>
            <img
              src={item.largeImageURL}
              alt="pet image"
              style={{ width: '200px', height: '200px', objectFit: 'cover' }}
            />
          </a>
          <div className="card-info">
            <div className="comments">
              <FontAwesomeIcon icon={faComment} />:{item.comments}
            </div>
            <div className="likes">
              <span className="text">{item.likes}</span>
              <div className="heart"></div>
            </div>
          </div>
          <Tags tags={item.tags} />
        </article>
      ))}
    </>
  );
};
export default Card;
