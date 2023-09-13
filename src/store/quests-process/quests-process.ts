import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace, LevelFilterTypeKeys, GenreFilterTypeKeys } from '../../const';
import { QuestType, FullQuestType, mockQuests } from '../../mocks';

export type QuestsProcessType = {
  activePage: string;
  activeId: string | null;
  activeFilterByGenreType: GenreFilterTypeKeys;
  activeFilterByLevelType: LevelFilterTypeKeys;
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
  activeFilterByGenreType: 'all-quests',
  activeFilterByLevelType: 'all',
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

export const { setActivePage, setActiveId, setActiveFilterByGenreType, setActiveFilterByLevelType, setError, setQuests,
  setBackupQuests, setQuestsLoadStatus, setFullQuest, setFullQuestLoadStatus, filterQuests } = questsProcessSlice.actions;
