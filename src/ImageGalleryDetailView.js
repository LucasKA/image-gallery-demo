import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CloseButton from './CloseButton'
import ImageGalleryControls from './ImageGalleryControls';
import Header from './Header';
import NavigationButton from './NavigationButton';
import SwipeableViews from 'react-swipeable-views'
//import PropTypes from 'prop-types';


class ImageGalleryDetailView extends Component {
  state = {
    title: null,
    index: null,
  }

  incrementGallery = () => (
    this.setState((prevState)=> ({index: prevState.index + 1 }))
  )

  decrementGallery = () => {
    this.setState((prevState)=> ({index: prevState.index - 1 }))
  }

  handleSwipe = (index, type) => {
    if (type === 'end') {
      return this.setState({
        title: this.props.images[this.state.index].alt,
        index,
       })
    }
    return null
  };

  handleClickChange = (index) => {
    this.setState({ title: this.props.images[this.state.index].alt });
  }

  componentWillMount() {
    this.setState({
      title: this.props.images[this.props.startingImage].alt,
      index: this.props.startingImage
    })
  }

  render() {
    return (
        <div
          className={`image-gallery-detail-view
            ${this.props.visible ? 'fixed' : 'dn'}
            bg-black-${this.props.opacity}
            w-100 h-100 top-0 pa0 z-2`
          }
        >
          <Header
            background="dark-gray"
            borderColor="dark-gray"
          >
            <h3 className="near-white f4 fw6">
              {this.state.title}
            </h3>
            <span className="absolute right-0">
              <CloseButton
                onClick={this.props.closeDetail}
              />
            </span>
          </Header>
          <div className="h-100 w-100 flex items-center justify-between">
            <div className="dn db-l">
              <NavigationButton
                hide={this.state.index === 0}
                icon='keyboard_arrow_left'
                onClick={() => this.decrementGallery()}
              />
            </div>
            <SwipeableViews
              index={this.state.index}
              onSwitching={this.handleSwipe}
              onTransitionEnd={this.handleClickChange}
            >
              {this.props.images.map(
                (image, index) =>
                  <div
                    className="h-100 flex flex-column justify-center items-center"
                    key={`swipeable-image-${index + 1}`}
                  >
                    <img
                      className="w-100 mw8"
                      alt={image.alt}
                      src={`${process.env.PUBLIC_URL}${image.url}`}
                    />
                  </div>
              )}
            </SwipeableViews>
            <div className="dn db-l">
              <NavigationButton
                hide={this.state.index === this.props.images.length - 1}
                icon='keyboard_arrow_right'
                onClick={() => this.incrementGallery()}
              />
            </div>
          </div>

          <ImageGalleryControls
            background="dark-gray"
          />
        </div>
    );
  }
}

ImageGalleryDetailView.propTypes = {
  opacity: PropTypes.number,
  images: PropTypes.array,
  closeDetail: PropTypes.func.isRequired,
  startingImage: PropTypes.number.isRequired,
};
ImageGalleryDetailView.defaultProps = {
  opacity: 80,
  images: null,
};

export default ImageGalleryDetailView;
