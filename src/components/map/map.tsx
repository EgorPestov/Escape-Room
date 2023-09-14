import 'leaflet/dist/leaflet.css';
import { Map as LeafletMap } from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LocationType } from '../../mocks';
import { useEffect, useRef } from 'react';

type MapProps = {
  location: LocationType;
}

export const Map = ({ location }: MapProps) => {
  const { coords, address } = location;
  const mapRef = useRef<LeafletMap>(null);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setView(coords, 13);
    }
  }, [coords]);

  return (
    <div className="map">
      <MapContainer ref={mapRef} className="map__container" center={coords} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coords}>
          <Popup>
            {address}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
