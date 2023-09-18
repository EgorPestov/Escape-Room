import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import { URL_MARKER_ACTIVE, MAP_ZOOM_VALUE_OFFICE, OFFICE_COORDS } from '../../../const';

const activeIcon = new Icon({
  iconUrl: URL_MARKER_ACTIVE,
  iconSize: [42, 42],
  iconAnchor: [23, 42]
});

export const ContactsMap = () => (
  <MapContainer
    className="map__container"
    center={OFFICE_COORDS}
    zoom={MAP_ZOOM_VALUE_OFFICE}
    scrollWheelZoom={false}
    attributionControl={false}
  >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker icon={activeIcon} position={OFFICE_COORDS}>
      <Popup>
        Санкт-Петербург, Набережная реки Карповка, д 5П
      </Popup>
    </Marker>
  </MapContainer>
);
