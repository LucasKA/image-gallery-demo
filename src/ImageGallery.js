import React, { Component } from 'react';
import DetailView from './ImageGalleryDetailView';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

class ImageGallery extends Component {
  lockRef = React.createRef();
  lockElement = null;

  state = {
    showDetail: false,
    startingImage: null,
  }

  componentDidMount() {
    this.lockElement = this.lockRef.current;
  }

  openDetailView = (index) => {
    this.setState({
      startingImage: index,
      showDetail: true
    });
    disableBodyScroll(this.lockElement)
  }

  closeDetailView = () => {
    this.setState({
      showDetail: false,
      startingImage: null,
    })
    clearAllBodyScrollLocks()
  }

  render() {
    return (
      <section className="image-gallery pt1">
       { (this.state.startingImage !== null) && this.state.showDetail ?
          <div
            pose={this.state.showDetail ? 'herpa' : 'derpa'}
          >
            <DetailView
              closeDetail={() => this.closeDetailView()}
              images={this.props.images}
              opacity={90}
              ref={this.lockRef}
              startingImage={this.state.startingImage}
              visible={this.state.showDetail}
            />
          </div>
          : null
      }

        <div className="flex flex-wrap mh1 z-1">
          {this.props.images.map(
            (image, index) =>
              <div
                className="w-50 w-25-l pv1 ph2 pointer grow"
                key={`image-${index + 1}`}
                role="button"
                onClick={() => {
                  this.openDetailView(index)
                }}
              >
                <img
                  alt={image.alt}
                  className="ma0 pa0 w-100"
                  src={`${process.env.PUBLIC_URL}${image.thumbnail}`}
                />
              </div>
          )}
        </div>
      </section>
    );
  }
}


export default ImageGallery;
