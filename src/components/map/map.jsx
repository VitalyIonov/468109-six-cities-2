import React, {PureComponent, createRef} from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';

const city = [52.38333, 4.9];
const icon = leaflet.icon({
  iconUrl: `img/pin.svg`,
  iconSize: [30, 30]
});
const zoom = 12;

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this.mapRef = createRef();
  }

  _updateMarkers(cords) {
    console.log('cords', cords);

    if (this.map && cords && cords.length) {
      this.markersLayer.clearLayers();

      cords.forEach((cord) => {
        const marker = leaflet.marker(cord, {icon});

        this.markersLayer.addLayer(marker);
      });
    }
  }

  componentDidMount() {
    const {cords} = this.props;

    if (this.mapRef.current) {
      this.map = leaflet.map(this.mapRef.current, {
        center: city,
        zoom,
        zoomControl: false,
        marker: true
      });

      this.map.setView(city, zoom);
      leaflet
        .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
        })
        .addTo(this.map);

      this.markersLayer = new leaflet.LayerGroup();

      this.markersLayer.addTo(this.map);

      this._updateMarkers(cords);
    }
  }

  componentDidUpdate() {
    const {cords} = this.props;

    this._updateMarkers(cords);
  }

  render() {
    return (
      <section ref={this.mapRef} className="cities__map map"></section>
    );
  }
}

Map.propTypes = {
  cords: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number))
};

export default Map;
