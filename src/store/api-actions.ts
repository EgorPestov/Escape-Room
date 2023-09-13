import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch } from '../hooks/useAppDispatch/useAppDispatch';
import { State } from '../hooks/useAppSelector/useAppSelector';
import { QuestType, FullQuestType } from '../mocks';
import { redirectToRoute } from './actions';
import { APIRoute, AppRoute } from '../const';
import { toast } from 'react-toastify';
import { setError, setQuests, setBackupQuests, setQuestsLoadStatus, setFullQuest, setFullQuestLoadStatus, setActivePage } from './quests-process/quests-process';
import { saveToken, dropToken } from '../services/token';
import { setUserData } from './user-process/user-process';

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

export const checkAuth = createAsyncThunk<void, undefined, thunkObjType>(
  'USER/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<UserData>(APIRoute.Login);
    dispatch(setUserData(data));
  }
);

export const login = createAsyncThunk<void, AuthData, thunkObjType>(
  'USER/login',
  async ({ email, password }, { dispatch, extra: api }) => {
    const { data: { token } } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(token);
    dispatch(redirectToRoute(AppRoute.Root));
    dispatch(setActivePage('квесты'));
    dispatch(checkAuth());
    // dispatch(fetchQuests());
  }
);

export const logout = createAsyncThunk<void, undefined, thunkObjType>(
  'USER/logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  }
);
