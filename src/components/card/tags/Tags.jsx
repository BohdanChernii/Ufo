import React from 'react';
import './index.scss';
const Tags = ({ tags }) => {
  return (
    <section className="tag">
      {tags.split(',').map((item, index) => (
        <p className="tag-item" style={{ background: 'red' }} key={index}>
          {item}
        </p>
      ))}
    </section>
  );
};
export default Tags;
