import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch } from '../hooks/useAppDispatch/useAppDispatch';
import { State } from '../hooks/useAppSelector/useAppSelector';
import { QuestType, FullQuestType, BookingType, ReservationType } from '../types';
import { redirectToRoute } from './actions';
import { APIRoute, AppPage, AppRoute } from '../const';
import { toast } from 'react-toastify';
import {
  setError, setQuests, setBackupQuests, setQuestsLoadStatus, setBookings,
  setBookingsLoadStatus, setFullQuest, setFullQuestLoadStatus, setNeededPage, setActiveBookingId, setActivePage, setReservationsLoadStatus, setReservations
} from './quests-process/quests-process';
import { saveToken, dropToken } from '../services/token';
import { setUserData } from './user-process/user-process';
import { filterUniqueAddresses } from '../utils';

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

export type BookingData = {
  id: string | undefined;
  date: string;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  placeId: string;
}

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

export const fetchBookings = createAsyncThunk<void, { id: string | undefined }, thunkObjType>(
  'QUESTS/fetchBookings',
  async ({ id }, { dispatch, extra: api }) => {
    try {
      dispatch(setBookingsLoadStatus(true));
      const url = id !== undefined ? `${APIRoute.Quests}/${id}${APIRoute.Booking}` : '';
      const { data } = await api.get<BookingType[]>(url);
      dispatch(setBookings(filterUniqueAddresses(data)));
      dispatch(setActiveBookingId(data[0].id));
      dispatch(setBookingsLoadStatus(false));
    } catch {
      toast.error('Bookings are not available, please try again');
      throw new Error;
    }
  }
);

export const fetchReservations = createAsyncThunk<void, undefined, thunkObjType>(
  'QUESTS/fetchReservations',
  async (_arg, { dispatch, extra: api }) => {
    try {
      dispatch(setReservationsLoadStatus(true));
      const { data } = await api.get<ReservationType[]>(APIRoute.Reservations);
      dispatch(setReservations(data));
      dispatch(setReservationsLoadStatus(false));
    } catch {
      toast.error('Reservations are not available, please try again');
      throw new Error;
    }
  }
);

export const deleteReservation = createAsyncThunk<void, { id: string | undefined }, thunkObjType>(
  'QUESTS/deleteReservation',
  async ({ id }, { dispatch, extra: api }) => {
    try {
      const url = id !== undefined ? `${APIRoute.Reservations}/${id}` : '';
      await api.delete(url);
      dispatch(fetchReservations());
    } catch {
      toast.error('Can\'t delete reservation, please try again');
      throw new Error;
    }
  }
);

export const bookQuest = createAsyncThunk<void, BookingData, thunkObjType>(
  'QUEST/bookQuest',
  async ({ id, date, time, contactPerson, phone, withChildren, peopleCount, placeId }, { dispatch, extra: api }) => {
    try {
      const url = id !== undefined ? `${APIRoute.Quests}/${id}${APIRoute.Booking}` : '';
      await api.post<BookingData>(url, { date, time, contactPerson, phone, withChildren, peopleCount, placeId });
      dispatch(setActivePage(AppPage.MyQuests));
      dispatch(redirectToRoute(AppRoute.MyQuests));
    } catch {
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
  async ({ email, password }, { dispatch, extra: api, getState }) => {
    try {
      const { data: { token } } = await api.post<UserData>(APIRoute.Login, { email, password });
      saveToken(token);
      const neededPage = getState().QUESTS.neededPage;
      dispatch(checkAuth());
      dispatch(redirectToRoute(neededPage));
    } finally {
      setTimeout(() => dispatch(setNeededPage(AppRoute.Root)), 1000);
    }
  }
);

export const logout = createAsyncThunk<void, undefined, thunkObjType>(
  'USER/logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  }
);
