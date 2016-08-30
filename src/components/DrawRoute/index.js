import React, { PropTypes } from 'react'
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';

class DrawRoute extends React.Component {
  constructor(props) {
    super(props)

    this.drawingManager = new google.maps.drawing.DrawingManager({
      drawingMode: google.maps.drawing.OverlayType.MARKER,
      drawingControl: true,
      drawingControlOptions: {
        position: google.maps.ControlPosition.TOP_CENTER,
        drawingModes: ['polygon']
      },
    });

    this._processPolygonCoords = this._processPolygonCoords.bind(this)

    google.maps.event.addListener(this.drawingManager, 'polygoncomplete', this._processPolygonCoords);
  }

  _processPolygonCoords(polygon) {
    const points = []
    polygon.getPath().forEach(coord => {
      points.push({
        latitude: coord.lat(),
        longitude: coord.lng()
      })
    })
    this.props.input.onChange(points)
  }
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <GoogleMapLoader
        containerElement={
          <div
            style={{
              height: '800px',
            }}
          />
        }
        googleMapElement={
          <GoogleMap
            ref={(map) => {
              this.drawingManager.setMap(map.props.map);
            }}
            defaultZoom={18}
            defaultCenter={{ lat: -23.632746, lng: -46.713787 }}
            onClick={() => {}}
          >

          </GoogleMap>
        }
      />
    )
  }
}


export default DrawRoute
