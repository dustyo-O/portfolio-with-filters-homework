import { PropTypes } from 'prop-types';

import './Toolbar.css';

export default function Toolbar({ filters, selected, onSelectFilter }) {
  const onFilterClick = (filter) => {
    return () => {
      onSelectFilter(filter);
    }
  }

  return (
    <div className="Toolbar">
      {
        filters.map(filter => (
          <div
            key={filter}
            className={`Toolbar-Filter${selected === filter ? ' Toolbar-Filter_Selected' : ''}`}
            onClick={selected === filter ? undefined : onFilterClick(filter)}
          >
            {filter}
          </div>
        ))
      }
    </div>
  )
}

Toolbar.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string.isRequired),
  selected: PropTypes.string.isRequired,
  onSelectFilter: PropTypes.func.isRequired
};
