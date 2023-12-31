import { NameSpace } from '../../const';
import { State } from '../../hooks/useAppSelector/useAppSelector';
import { QuestType, FullQuestType, BookingType, ReservationType } from '../../types';

export const getActivePage = (state: State): string => state[NameSpace.Quests].activePage;
export const getActiveSortByGenreType = (state: State): string => state[NameSpace.Quests].activeFilterByGenreType;
export const getActiveSortByLevelType = (state: State): string => state[NameSpace.Quests].activeFilterByLevelType;
export const getQuests = (state: State): QuestType[] => state[NameSpace.Quests].quests;
export const getFullQuest = (state: State): FullQuestType | null => state[NameSpace.Quests].fullQuest;
export const getQuestsLoadStatus = (state: State): boolean => state[NameSpace.Quests].isQuestsLoading;
export const getFullQuestLoadStatus = (state: State): boolean => state[NameSpace.Quests].isFullQuestLoading;
export const hasError = (state: State): boolean => state[NameSpace.Quests].hasError;
export const getNeededPage = (state: State): string => state[NameSpace.Quests].neededPage;
export const getBookings = (state: State): BookingType[] | null => state[NameSpace.Quests].bookings;
export const getBookingsLoadStatus = (state: State): boolean => state[NameSpace.Quests].isBookingsLoading;
export const getActiveBookingId = (state: State): string | undefined => state[NameSpace.Quests].activeBookingId;
export const getReservations = (state: State): ReservationType[] => state[NameSpace.Quests].reservations;
export const getReservationsLoadStatus = (state: State): boolean => state[NameSpace.Quests].isReservationsLoading;
export const getActiveBooking = (state: State): BookingType | undefined => {
  if (state[NameSpace.Quests].activeBookingId !== undefined) {
    return state[NameSpace.Quests].bookings?.filter((booking) => booking.id === state[NameSpace.Quests].activeBookingId)[0];
  }
  return undefined;
};
