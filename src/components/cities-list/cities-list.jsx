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
        <li key={city} className="locations__item">
          <a
            className={`locations__item-link tabs__item ${currentItem === city ? `tabs__item--active` : ``}`}
            href="#"
            onClick={handleCityClick(city)}
          >
            <span>{city}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentItem: PropTypes.string,
  onChangeItem: PropTypes.func.isRequired,
  handleCityChange: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  handleCityChange: (city) => dispatch(actionCreator.changeCity(city))
});

export {CitiesList};

export default connect(null, mapDispatchToProps)(CitiesList);
