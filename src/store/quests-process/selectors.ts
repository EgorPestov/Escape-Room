import { NameSpace } from '../../const';
import { State } from '../../hooks/useAppSelector/useAppSelector';
import { QuestType, FullQuestType, BookingType } from '../../mocks';

export const getActivePage = (state: State): string => state[NameSpace.Quests].activePage;
export const getActiveId = (state: State): string | undefined => state[NameSpace.Quests].activeId;
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
