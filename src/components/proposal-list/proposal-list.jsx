import React from 'react';
import PropTypes from 'prop-types';

import ProposalCard from '../proposal-card/proposal-card';

const ProposalList = ({data, onChangeItem, onPlaceTitleClick}) => {
  const _cardMouseEnterHandler = (id) => {
    onChangeItem(id);
  };

  const _cardMouseLeaveHandler = () => {
    onChangeItem(null);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {data.map((proposal) => (
        <ProposalCard
          key={proposal.id}
          proposal={proposal}
          onCardMouseEnter={_cardMouseEnterHandler}
          onCardMouseLeave={_cardMouseLeaveHandler}
          onPlaceTitleClick={onPlaceTitleClick}
        />
      ))}
    </div>
  );
};

ProposalList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    city: PropTypes.shape({
      name: PropTypes.string,
      location: PropTypes.object,
    }),
    image: PropTypes.shape({
      src: PropTypes.string,
      width: PropTypes.string,
      height: PropTypes.string,
      alt: PropTypes.string
    }),
    price: PropTypes.number,
    period: PropTypes.string,
    rating: PropTypes.number,
    description: PropTypes.string,
    type: PropTypes.string
  })).isRequired,
  currentItem: PropTypes.number,
  onChangeItem: PropTypes.func.isRequired,
  onPlaceTitleClick: PropTypes.func.isRequired
};

export default ProposalList;
