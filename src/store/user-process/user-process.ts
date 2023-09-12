import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthStatusValuesType, AuthStatus, NameSpace } from '../../const';
import { UserData } from '../api-actions';


type UserProcessType = {
  authorizationStatus: AuthStatusValuesType;
  userData: UserData | null;
}

export const initialState: UserProcessType = {
  authorizationStatus: AuthStatus.Unknown,
  userData: null,
};

export const userProcessSlice = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserData>) => {
      state.userData = action.payload;
    }
  }
});

export const { setUserData } = userProcessSlice.actions;
