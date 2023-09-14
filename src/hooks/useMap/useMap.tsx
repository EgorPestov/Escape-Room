import { useEffect, useState, useRef, MutableRefObject } from 'react';
import { LocationType } from '../../mocks';
import { Map, TileLayer } from 'leaflet';

const useMap = (
  mapRef: MutableRefObject<HTMLElement | null>,
  location: LocationType
): Map | null => {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: location.coords[0],
          lng: location.coords[1],
        },
        zoom: 13,
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        }
      );

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, location.coords]);

  return map;
};
