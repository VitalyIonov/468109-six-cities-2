import React from 'react';
import PropTypes from 'prop-types';

const ProposalCard = ({proposal, onCardMouseEnter, onCardMouseLeave, onPlaceTitleClick}) => {
  const {id, image, price, period, rating, description, type} = proposal;

  return (
    <article
      className="cities__place-card place-card"
      onMouseEnter={() => onCardMouseEnter(id)}
      onMouseLeave={onCardMouseLeave}
    >
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={image.src} width={image.width} height={image.height} alt={image.alt} />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;{period}</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{"width": {rating}}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name" onClick={onPlaceTitleClick}>
          <a href="#">{description}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

ProposalCard.propTypes = {
  proposal: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.shape({
      src: PropTypes.string,
      width: PropTypes.string,
      height: PropTypes.string,
      alt: PropTypes.string
    }),
    price: PropTypes.string,
    period: PropTypes.string,
    rating: PropTypes.string,
    description: PropTypes.string,
    type: PropTypes.string
  }).isRequired,
  onCardMouseEnter: PropTypes.func,
  onCardMouseLeave: PropTypes.func,
  onPlaceTitleClick: PropTypes.func
};

export default ProposalCard;
