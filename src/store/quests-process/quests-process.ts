import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace, LevelSortTypeValues, GenreSortTypeValues, LevelSortTypes, GenreSortTypes } from '../../const';
import { QuestType, FullQuestType, mockQuests } from '../../mocks';

export type QuestsProcessType = {
  activePage: string;
  activeId: string | null;
  activeSortByGenreType: GenreSortTypeValues;
  activeSortByLevelType: LevelSortTypeValues;
  quests: QuestType[];
  backupQuests: QuestType[];
  fullQuest: FullQuestType | null;
  isFullQuestLoading: boolean;
  isQuestsLoading: boolean;
  hasError: boolean;
}

export const initialState: QuestsProcessType = {
  activePage: 'квесты',
  activeId: null,
  activeSortByGenreType: 'Все квесты',
  activeSortByLevelType: 'любой',
  quests: mockQuests,
  backupQuests: mockQuests,
  fullQuest: null,
  isFullQuestLoading: false,
  isQuestsLoading: true,
  hasError: false,
};

export const questsProcessSlice = createSlice({
  name: NameSpace.Quests,
  initialState,
  reducers: {
    setActivePage: (state, action: PayloadAction<string>) => {
      state.activePage = action.payload;
    },
    setActiveId: (state, action: PayloadAction<string | null>) => {
      state.activeId = action.payload;
    },
    setQuests: (state, action: PayloadAction<QuestType[]>) => {
      state.quests = action.payload;
    },
    setBackupQuests: (state, action: PayloadAction<QuestType[]>) => {
      state.quests = action.payload;
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
    setError: (state, action: PayloadAction<boolean>) => {
      state.hasError = action.payload;
    },
    sortQuestsByLevel: (state, action: PayloadAction<LevelSortTypeValues>) => {
      state.activeSortByLevelType = action.payload;
      switch (state.activeSortByLevelType) {
        case LevelSortTypes.all:
          state.quests = state.backupQuests;
          break;
        case LevelSortTypes.easy:
          state.quests = state.backupQuests;
          state.quests = state.quests.filter((quest) => quest.level === 'easy');
          break;
        case LevelSortTypes.medium:
          state.quests = state.backupQuests;
          state.quests = state.quests.filter((quest) => quest.level === 'medium');
          break;
        case LevelSortTypes.hard:
          state.quests = state.backupQuests;
          state.quests = state.quests.filter((quest) => quest.level === 'hard');
          break;
      }
    },
    sortQuestsByGenre: (state, action: PayloadAction<GenreSortTypeValues>) => {
      state.activeSortByGenreType = action.payload;
      switch (state.activeSortByGenreType) {
        case GenreSortTypes['all-quests']:
          state.quests = state.backupQuests;
          break;
        case GenreSortTypes['adventures']:
          state.quests = state.backupQuests;
          state.quests = state.quests.filter((quest) => quest.type === 'adventures');
          break;
        case GenreSortTypes['detective']:
          state.quests = state.backupQuests;
          state.quests = state.quests.filter((quest) => quest.type === 'detective');
          break;
        case GenreSortTypes['horror']:
          state.quests = state.backupQuests;
          state.quests = state.quests.filter((quest) => quest.type === 'horror');
          break;
        case GenreSortTypes['mystic']:
          state.quests = state.backupQuests;
          state.quests = state.quests.filter((quest) => quest.type === 'mystic');
          break;
        case GenreSortTypes['sci-fi']:
          state.quests = state.backupQuests;
          state.quests = state.quests.filter((quest) => quest.type === 'sci-fi');
          break;
      }
    },
  }
});

export const { setActivePage, setActiveId, setError, setQuests, setBackupQuests, setQuestsLoadStatus,
  setFullQuest, setFullQuestLoadStatus, sortQuestsByLevel, sortQuestsByGenre } = questsProcessSlice.actions;
