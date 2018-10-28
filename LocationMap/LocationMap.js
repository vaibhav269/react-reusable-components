import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class LocationMap extends Component {
    constructor(){
        super();
        this.mapDetail = {
            center: {
              lat: 29.8543,
              lng: 77.8880
            },
            zoom: 11
          }
    }  
 
  render() {
    return (
        <div style={{backgroundColor:'#e9e7e8'}}>
            <h4 className = "font-weight-bold text-center p-3"> Or meet me at the office </h4>
            <div style={{ height: '20vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyC83dIZlSqAHLzUp58xsJXLE74Z72nB0K8' }}
                    defaultCenter={this.mapDetail.center}
                    defaultZoom={this.mapDetail.zoom}
                >
                <AnyReactComponent
                    lat={this.mapDetail.lat}
                    lng={this.mapDetail.lng}
                />
                </GoogleMapReact>
            </div>
            <div className="p-2 text-muted">                
                <p>ONE MIDTOWN</p>
                <p>11 Hoi Shing Rd</p>
                <p>Tsuen Wan</p>
            </div>
      </div>
    );
  }
}
 
export default LocationMap;