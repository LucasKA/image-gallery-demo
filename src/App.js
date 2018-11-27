import React, { Component } from 'react';
import ImageGallery from './ImageGallery';
import Header from './Header';
import response from './response.json';


class App extends Component {
  render() {
    return (
      <div className="system-sans-serif w-100">
        <Header
          background="near-white"
          borderColor="moon-gray"
        >
          <h3 className="fw6 gray mv0">
            Image Gallery
          </h3>
        </Header>
        <div className="mt5">
          <ImageGallery
            images={response.data}
          />
        </div>
      </div>
    );
  }
}

export default App;
