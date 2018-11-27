import React, { Component } from 'react';
//import PropTypes from 'prop-types';

class CloseButton extends Component {
  render() {
    return (
      <button
        className={`${this.props.hide ? 'dn' : 'flex'} h4 ba b--dark-gray bg-transparent pointer justify-center flex-column white-70 bg-animate hover-bg-white-10`}
        onClick={this.props.onClick}
      >
        <i className="material-icons">
          {this.props.icon}
        </i>
      </button>
    );
  }
}

export default CloseButton;
