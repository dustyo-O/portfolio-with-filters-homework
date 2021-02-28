import { useState } from 'react';
import { PropTypes } from 'prop-types';

import Masonry from 'react-masonry-component';
import Toolbar from '../Toolbar/Toolbar';

import './Portfolio.css';

const masonryOptions = {
  transitionDuration: 0
};

const FILTERS = ["All", "Websites", "Flayers", "Business Cards"];
const ALL_FILTER_INDEX = 0;

export default function Portfolio({ portfolio }) {
  const [currentFilter, setCurrentFilter] = useState(FILTERS[ALL_FILTER_INDEX]);

  const onSelectFilter = (value) => {
    console.log(value);
    setCurrentFilter(value);
  }

  const filteredPortfolio = currentFilter === FILTERS[ALL_FILTER_INDEX] ?
    portfolio :
    portfolio.filter(item => item.category === currentFilter);

  return (
    <div className="Portfolio">
      <div className="Portfolio-Toolbar">
        <Toolbar
          filters={FILTERS}
          selected={currentFilter}
          onSelectFilter={onSelectFilter}
        />
      </div>
      <Masonry
        className="Portfolio-Gallery"
        elementType={'div'}
        options={masonryOptions}
      >
        {filteredPortfolio.map((item, index) => (
          <img
            key={index}
            className="Portfolio-Item"
            alt={item.category}
            src={item.img}
          />
        ))}
      </Masonry>
    </div>
  );
};

Portfolio.propTypes = {
  portfolio: PropTypes.arrayOf(PropTypes.shape({
    img: PropTypes.string,
    category: PropTypes.string
  }))
};
