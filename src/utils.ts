import { BookingType } from './types';

export const getStyleForNavLink = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? {
      cursor: 'default',
    }
    : {
      cursor: 'pointer',
    };

export const formatTime = (timeString: string, date: string) => {
  const now = new Date();
  const [hours, minutes] = timeString.split(':');
  const time = new Date(now.getFullYear(), now.getMonth(), now.getDate(), parseInt(hours, 10), parseInt(minutes, 10));

  const formattedHours = String(time.getHours()).padStart(2, '0');
  const formattedMinutes = String(time.getMinutes()).padStart(2, '0');

  return `${date}${formattedHours}h${formattedMinutes}m`;
};

export const filterUniqueAddresses = (data: BookingType[]) => {
  const uniqueAddresses = new Set();
  const filteredData = [];

  for (const item of data) {
    if (!uniqueAddresses.has(item.location.address)) {
      uniqueAddresses.add(item.location.address);
      filteredData.push(item);
    }
  }

  return filteredData;
};
