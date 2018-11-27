import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GalleryControls extends Component {
  render() {
    return (
      <section className={`footer bg-${this.props.background} ph4 bg-near-black near-white fixed bottom-0 flex h3 items-center justify-between w-100 mv0 pv0`}>
        <i className="material-icons">
          exposure_plus_1
        </i>
        <i className="material-icons">
          chat
        </i>
        <i className="material-icons">
          add
        </i>
        <i className="material-icons">
          forward
        </i>
      </section>
    );
  }
}

GalleryControls.propTypes = {
  background: PropTypes.string,
  children: PropTypes.node,
};
GalleryControls.defaultProps = {
  background: 'black',
  children: null,
};

export default GalleryControls;
