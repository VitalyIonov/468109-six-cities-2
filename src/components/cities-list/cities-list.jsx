import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {actionCreator} from '../../reducer';

const CitiesList = ({cities, currentItem, onChangeItem, handleCityChange}) => {
  const handleCityClick = (city) => () => {
    handleCityChange(city);
    onChangeItem(city);
  };

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li key={city.name} className="locations__item">
          <a
            className={`locations__item-link tabs__item ${currentItem.name === city.name ? `tabs__item--active` : ``}`}
            href="#"
            onClick={handleCityClick(city)}
          >
            <span>{city.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    location: PropTypes.object
  })),
  currentItem: PropTypes.PropTypes.shape({
    name: PropTypes.string,
    location: PropTypes.object
  }),
  onChangeItem: PropTypes.func.isRequired,
  handleCityChange: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  handleCityChange: (city) => dispatch(actionCreator.changeCity(city))
});

export {CitiesList};

export default connect(null, mapDispatchToProps)(CitiesList);
