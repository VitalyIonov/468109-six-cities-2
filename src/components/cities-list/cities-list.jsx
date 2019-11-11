import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {actionCreator} from '../../reducer';

const CitiesList = ({cities, currentCity, handleCityClick}) => (
  <ul className="locations__list tabs__list">
    {cities.map((city) => (
      <li key={city} className="locations__item">
        <a
          className={`locations__item-link tabs__item ${currentCity === city ? `tabs__item--active` : ``}`}
          href="#"
          onClick={() => handleCityClick(city)}
        >
          <span>{city}</span>
        </a>
      </li>
    ))}
  </ul>
);

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentCity: PropTypes.string,
  handleCityClick: PropTypes.func
};

const mapDispatchToProps = (dispatch) => ({
  handleCityClick: (city) => dispatch(actionCreator.changeCity(city))
});

export {CitiesList};

export default connect(null, mapDispatchToProps)(CitiesList);
