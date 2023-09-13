import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch } from '../hooks/useAppDispatch/useAppDispatch';
import { State } from '../hooks/useAppSelector/useAppSelector';
import { QuestType, FullQuestType } from '../mocks';
import { redirectToRoute } from './actions';
import { APIRoute, AppRoute } from '../const';
import { toast } from 'react-toastify';
import {
  setActiveId, setActivePage, setActiveFilterByGenreType, setActiveFilterByLevelType, setError, setQuests,
  setBackupQuests, setQuestsLoadStatus, setFullQuest, setFullQuestLoadStatus, filterQuests
} from './quests-process/quests-process';

type thunkObjType = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}

export type UserData = {
  email: string;
  token: string;
  password: string;
};

export type AuthData = {
  email: string;
  password: string;
};

export const fetchQuests = createAsyncThunk<void, undefined, thunkObjType>(
  'QUESTS/fetchQuests',
  async (_arg, { dispatch, extra: api }) => {
    try {
      dispatch(setQuestsLoadStatus(true));
      const { data } = await api.get<QuestType[]>(APIRoute.Quests);
      dispatch(setQuests(data));
      dispatch(setBackupQuests(data));
      dispatch(setError(false));
    } catch {
      dispatch(setError(true));
      throw new Error;
    } finally {
      dispatch(setQuestsLoadStatus(false));
    }
  }
);

export const fetchFullQuest = createAsyncThunk<void, { id: string | undefined }, thunkObjType>(
  'QUESTS/fetchFullQuest',
  async ({ id }, { dispatch, extra: api }) => {
    try {
      dispatch(setFullQuestLoadStatus(true));
      const url = id !== undefined ? `${APIRoute.Quests}/${id}` : '';
      const { data } = await api.get<FullQuestType>(url);
      dispatch(setFullQuest(data));
      dispatch(setFullQuestLoadStatus(false));
    } catch {
      toast.error('Quest is not available, please try again');
      throw new Error;
    }
  }
);
