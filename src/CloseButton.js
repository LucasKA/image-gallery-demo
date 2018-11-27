import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CloseButton extends Component {
  render() {
    return (
      <button
        className="bg-transparent bn near-white flex items-center"
        onClick={this.props.onClick}
      >
      <i className="material-icons md-24">
        clear
      </i>
      </button>
    );
  }
}

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CloseButton;
