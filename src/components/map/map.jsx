import React, {PureComponent, createRef} from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';

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
    const {currentCity} = this.props;

    if (this.map && cords && cords.length) {
      this.markersLayer.clearLayers();

      this.map.setView(currentCity);

      cords.forEach((cord) => {
        const marker = leaflet.marker(cord, {icon});

        this.markersLayer.addLayer(marker);
      });
    }
  }

  componentDidMount() {
    const {cords, currentCity} = this.props;
    const city = currentCity;

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
  cords: PropTypes.arrayOf(PropTypes.array),
  currentCity: PropTypes.array
};

export default Map;
