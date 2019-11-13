import React, {PureComponent} from 'react';

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    static getDerivedStateFromProps(props) {
      const {initialItem} = props;

      if (initialItem) {
        return {
          currentItem: initialItem
        };
      }

      return {};
    }

    constructor(props) {
      super(props);

      this.state = {
        currentItem: null
      };

      this._handleChangeItem = this._handleChangeItem.bind(this);
    }

    _handleChangeItem(newItem) {
      this.setState({
        currentItem: newItem
      });
    }

    render() {
      const {currentItem} = this.state;

      return (
        <Component
          {...this.props}
          currentItem={currentItem}
          onChangeItem={this._handleChangeItem}
        />
      );
    }
  }

  WithActiveItem.propTypes = {};

  return WithActiveItem;
};

export default withActiveItem;
