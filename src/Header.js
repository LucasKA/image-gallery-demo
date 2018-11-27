import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    return (
      <header className={`header bg-${this.props.background} bb b--${this.props.borderColor} fixed top-0 flex h3 items-center justify-center w-100 mv0 pv0 z-1`}>
        {this.props.children}
      </header>
    );
  }
}

Header.propTypes = {
  background: PropTypes.string,
  borderColor: PropTypes.string,
};
Header.defaultProps = {
  background: 'black',
  borderColor: 'black',
};

export default Header;
