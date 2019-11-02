import React, {Component} from 'react';
import PropTypes from 'prop-types';

import ProposalCard from '../proposalCard/proposalCard';

class ProposalList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeCardId: null
    };

    this._cardMouseEnterHandler = this._cardMouseEnterHandler.bind(this);
    this._cardMouseLeaveHandler = this._cardMouseLeaveHandler.bind(this);
  }

  _cardMouseEnterHandler(id) {
    this.setState({
      activeCardId: id
    });
  }

  _cardMouseLeaveHandler() {
    this.setState({
      activeCardId: null
    });
  }

  render() {
    const {data, onPlaceTitleClick} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {data.map((proposal) => (
          <ProposalCard
            key={proposal.id}
            proposal={proposal}
            onCardMouseEnter={this._cardMouseEnterHandler}
            onCardMouseLeave={this._cardMouseLeaveHandler}
            onPlaceTitleClick={onPlaceTitleClick}
          />
        ))}
      </div>
    );
  }
}

ProposalList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
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
  })).isRequired,
  onPlaceTitleClick: PropTypes.func.isRequired
};

export default ProposalList;
