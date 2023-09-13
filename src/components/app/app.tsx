import { useLayoutEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Main } from '../../pages/main/main';
import { NotFound } from '../../pages/404/404';
import { Login } from '../../pages/login/login';
import { Contacts } from '../../pages/contacts/contacts';
import { MyQuests } from '../../pages/my-quests/my-quests';
import { Quest } from '../../pages/quest/quest';
import { Booking } from '../../pages/booking/booking';
import { useAppDispatch } from '../../hooks/useAppDispatch/useAppDispatch';
import { checkAuth, fetchQuests } from '../../store/api-actions';
import { PrivateMyQuestsRoute } from '../private-routes/private-my-quests-route/private-my-quests-route';
import { useAppSelector } from '../../hooks/useAppSelector/useAppSelector';
import { getAuthStatus } from '../../store/user-process/selectors';
import { PrivateLoginRoute } from '../private-routes/private-login-route/private-login-route';

export const App = () => {
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    dispatch(fetchQuests());
    dispatch(checkAuth());
  }, [dispatch]);

  const authStatus = useAppSelector(getAuthStatus);

  return (
    <HelmetProvider>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<Main />}
        />
        <Route
          path={`${AppRoute.Quest}/:id`}
          element={<Quest />}
        />
        <Route
          path={`${AppRoute.Quest}/:id/${AppRoute.Booking}`}
          element={<Booking />}
        />
        <Route
          path={AppRoute.Login}
          element={
            <PrivateLoginRoute authorizationStatus={authStatus}>
              <Login />
            </PrivateLoginRoute>
          }
        />
        <Route
          path={AppRoute.Contacts}
          element={<Contacts />}
        />
        <Route
          path={AppRoute.MyQuests}
          element={
            <PrivateMyQuestsRoute authorizationStatus={authStatus}>
              <MyQuests />
            </PrivateMyQuestsRoute>
          }
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </HelmetProvider>
  );
};
