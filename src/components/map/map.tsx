import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import { BookingType } from '../../mocks';
import { useEffect, useRef } from 'react';
import L from 'leaflet';
import { Map as LeafletMap, Icon } from 'leaflet';
import { useAppDispatch } from '../../hooks/useAppDispatch/useAppDispatch';
import { setActiveBookingId } from '../../store/quests-process/quests-process';
import { getActiveBookingId } from '../../store/quests-process/selectors';
import { SAINT_P_COORDS, URL_MARKER_ACTIVE, URL_MARKER_DEFAULT, MAP_ZOOM_VALUE } from '../../const';
import { useAppSelector } from '../../hooks/useAppSelector/useAppSelector';


const defaultIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [42, 42],
  iconAnchor: [23, 42]
});

const activeIcon = new Icon({
  iconUrl: URL_MARKER_ACTIVE,
  iconSize: [42, 42],
  iconAnchor: [23, 42]
});

type MapProps = {
  bookings: BookingType[];
  selectedId: string | undefined;
};

export const Map = ({ bookings, selectedId }: MapProps) => {
  const mapRef = useRef<LeafletMap>(null);
  const dispatch = useAppDispatch();
  const activeId = useAppSelector(getActiveBookingId);


  useEffect(() => {
    if (mapRef.current) {
      bookings.forEach((booking) => {
        const { id } = booking;
        const { coords } = booking.location;
        const marker = L.marker(coords).addTo(mapRef.current);

        marker.setIcon(activeId !== undefined && id === activeId ? activeIcon : defaultIcon);
        marker.on('click', () => {
          dispatch(setActiveBookingId(id));
          mapRef.current?.setView(coords, MAP_ZOOM_VALUE);
        });
      });


    }
  }, [bookings, selectedId, dispatch, activeId]);

  return (
    <div className="map">
      <MapContainer ref={mapRef} className="map__container" center={SAINT_P_COORDS} zoom={MAP_ZOOM_VALUE} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
};
