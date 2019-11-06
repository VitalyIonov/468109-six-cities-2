import React, {PureComponent, createRef} from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this.mapRef = createRef();
  }

  componentDidMount() {
    const {cords} = this.props;

    const city = [52.38333, 4.9];
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    const zoom = 12;

    if (this.mapRef.current) {
      const map = leaflet.map(this.mapRef.current, {
        center: city,
        zoom,
        zoomControl: false,
        marker: true
      });

      map.setView(city, zoom);
      leaflet
        .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
        })
        .addTo(map);

      if (cords && cords.length) {
        cords.forEach((cord) => {
          leaflet
            .marker(cord, {icon})
            .addTo(map);
        });
      }
    }
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
