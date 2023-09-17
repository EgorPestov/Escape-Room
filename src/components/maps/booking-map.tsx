import 'leaflet/dist/leaflet.css';
import { TileLayer, useMap } from 'react-leaflet';
import { BookingType } from '../../types';
import { useEffect, memo } from 'react';
import L from 'leaflet';
import { Icon } from 'leaflet';
import { useAppDispatch } from '../../hooks/useAppDispatch/useAppDispatch';
import { setActiveBookingId } from '../../store/quests-process/quests-process';
import { getActiveBookingId } from '../../store/quests-process/selectors';
import { URL_MARKER_ACTIVE, URL_MARKER_DEFAULT, MAP_ZOOM_VALUE_CITY } from '../../const';
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

const BookingMapComponent = ({ bookings, selectedId }: MapProps) => {
  const dispatch = useAppDispatch();
  const activeId = useAppSelector(getActiveBookingId);
  const map = useMap();
  map.zoomControl.setPosition('topright');

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      bookings.forEach((booking) => {
        const { id } = booking;
        const { coords } = booking.location;
        const marker = L.marker(coords).addTo(map);

        marker.setIcon(activeId !== undefined && id === activeId ? activeIcon : defaultIcon);
        marker.on('click', () => {
          dispatch(setActiveBookingId(id));
          map.setView(coords, MAP_ZOOM_VALUE_CITY);
        });
      });
    }

    return () => {
      map.eachLayer((layer) => {
        if (layer instanceof L.Marker) {
          map.removeLayer(layer);
        }
      });
      isMounted = false;
    };
  }, [bookings, selectedId, dispatch, activeId, map]);

  return (
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  );
};

export const BookingMap = memo(BookingMapComponent);
