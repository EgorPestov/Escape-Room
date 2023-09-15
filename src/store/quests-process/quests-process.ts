import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace, LevelFilterTypeKeys, GenreFilterTypeKeys } from '../../const';
import { QuestType, FullQuestType, BookingType } from '../../types';

export type QuestsProcessType = {
  activePage: string;
  activeFilterByGenreType: GenreFilterTypeKeys;
  activeFilterByLevelType: LevelFilterTypeKeys;
  quests: QuestType[];
  backupQuests: QuestType[];
  fullQuest: FullQuestType | null;
  bookings: BookingType[] | null;
  isBookingsLoading: boolean;
  isFullQuestLoading: boolean;
  isQuestsLoading: boolean;
  neededPage: string;
  hasError: boolean;
  activeBookingId: string | undefined;
}

export const initialState: QuestsProcessType = {
  activePage: '',
  activeFilterByGenreType: 'all-quests',
  activeFilterByLevelType: 'all',
  quests: [],
  backupQuests: [],
  fullQuest: null,
  bookings: null,
  isBookingsLoading: false,
  isFullQuestLoading: false,
  isQuestsLoading: true,
  neededPage: '/',
  hasError: false,
  activeBookingId: undefined,
};

export const questsProcessSlice = createSlice({
  name: NameSpace.Quests,
  initialState,
  reducers: {
    setActivePage: (state, action: PayloadAction<string>) => {
      state.activePage = action.payload;
    },
    setActiveFilterByGenreType: (state, action: PayloadAction<GenreFilterTypeKeys>) => {
      state.activeFilterByGenreType = action.payload;
    },
    setActiveFilterByLevelType: (state, action: PayloadAction<LevelFilterTypeKeys>) => {
      state.activeFilterByLevelType = action.payload;
    },
    setQuests: (state, action: PayloadAction<QuestType[]>) => {
      state.quests = action.payload;
    },
    setBackupQuests: (state, action: PayloadAction<QuestType[]>) => {
      state.backupQuests = action.payload;
    },
    setQuestsLoadStatus: (state, action: PayloadAction<boolean>) => {
      state.isQuestsLoading = action.payload;
    },
    setFullQuest: (state, action: PayloadAction<FullQuestType | null>) => {
      state.fullQuest = action.payload;
    },
    setFullQuestLoadStatus: (state, action: PayloadAction<boolean>) => {
      state.isFullQuestLoading = action.payload;
    },
    setBookings: (state, action: PayloadAction<BookingType[] | null>) => {
      state.bookings = action.payload;
    },
    setBookingsLoadStatus: (state, action: PayloadAction<boolean>) => {
      state.isBookingsLoading = action.payload;
    },
    setError: (state, action: PayloadAction<boolean>) => {
      state.hasError = action.payload;
    },
    setActiveBookingId: (state, action: PayloadAction<string | undefined>) => {
      state.activeBookingId = action.payload;
    },
    setNeededPage: (state, action: PayloadAction<string>) => {
      state.neededPage = action.payload;
    },
    filterQuests: (state) => {
      state.quests = state.backupQuests;
      if (state.activeFilterByGenreType === 'all-quests' && state.activeFilterByLevelType === 'all') {
        state.quests = state.backupQuests;
      } else if (state.activeFilterByGenreType === 'all-quests') {
        state.quests = state.quests.filter((quest) => quest.level === state.activeFilterByLevelType);
      } else if (state.activeFilterByLevelType === 'all') {
        state.quests = state.quests.filter((quest) => quest.type === state.activeFilterByGenreType);
      } else {
        state.quests = state.quests.filter((quest) => quest.level === state.activeFilterByLevelType && quest.type === state.activeFilterByGenreType);
      }
    },
  }
});

export const { setActivePage, setActiveFilterByGenreType, setActiveFilterByLevelType,
  setError, setQuests, setBackupQuests, setQuestsLoadStatus, setFullQuest, setBookings, setBookingsLoadStatus,
  setFullQuestLoadStatus, setNeededPage, filterQuests, setActiveBookingId } = questsProcessSlice.actions;
