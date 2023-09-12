import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace, LevelSortTypeValues, GenreSortTypeValues, LevelSortTypes, GenreSortTypes } from '../../const';
import { QuestType, FullQuestType, mockQuests } from '../../mocks';

export type QuestsProcessType = {
  activePage: string;
  activeId: string | null;
  activeSortByGenreType: GenreSortTypeValues;
  activeSortByLevelType: LevelSortTypeValues;
  quests: QuestType[];
  fullQuest: FullQuestType | null;
  isFullQuestLoading: boolean;
  isQuestsLoading: boolean;
  hasError: boolean;
}

export const initialState: QuestsProcessType = {
  activePage: 'квесты',
  activeId: null,
  activeSortByGenreType: 'все квесты',
  activeSortByLevelType: 'любой',
  quests: mockQuests,
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
      const allQuests = state.quests;
      switch (state.activeSortByLevelType) {
        case LevelSortTypes.all:
          state.quests = allQuests;
          break;
        case LevelSortTypes.easy:
          state.quests.filter((quest) => quest.level === 'easy');
          break;
        case LevelSortTypes.medium:
          state.quests.filter((quest) => quest.level === 'medium');
          break;
        case LevelSortTypes.hard:
          state.quests.filter((quest) => quest.level === 'hard');
          break;
      }
    },
    sortQuestsByGenre: (state, action: PayloadAction<GenreSortTypeValues>) => {
      state.activeSortByGenreType = action.payload;
      const allQuests = state.quests;
      switch (state.activeSortByGenreType) {
        case GenreSortTypes.all:
          state.quests = allQuests;
          break;
        case GenreSortTypes.adventures:
          state.quests.filter((quest) => quest.type === 'adventures');
          break;
        case GenreSortTypes.detective:
          state.quests.filter((quest) => quest.type === 'detective');
          break;
        case GenreSortTypes.horror:
          state.quests.filter((quest) => quest.type === 'horror');
          break;
        case GenreSortTypes.mystic:
          state.quests.filter((quest) => quest.type === 'mystic');
          break;
        case GenreSortTypes['sci-fi']:
          state.quests.filter((quest) => quest.type === 'sci-fi');
          break;
      }
    },
  }
});

export const { setActivePage, setActiveId, setError, setQuests, setQuestsLoadStatus,
  setFullQuest, setFullQuestLoadStatus, sortQuestsByLevel, sortQuestsByGenre } = questsProcessSlice.actions;
