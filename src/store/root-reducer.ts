import { userProcessSlice } from './user-process/user-process';
import { questsProcessSlice } from './quests-process/quests-process';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  [userProcessSlice.name]: userProcessSlice.reducer,
  [questsProcessSlice.name]: questsProcessSlice.reducer,
});
