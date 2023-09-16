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
import { hasError } from '../../store/quests-process/selectors';
import { useAppSelector } from '../../hooks/useAppSelector/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch/useAppDispatch';
import { checkAuth, fetchQuests } from '../../store/api-actions';
import { PrivateMyQuestsRoute } from '../private-routes/private-my-quests-route/private-my-quests-route';
import { getAuthStatus } from '../../store/user-process/selectors';
import { PrivateLoginRoute } from '../private-routes/private-login-route/private-login-route';
import { PrivateBookingRoute } from '../private-routes/private-booking-route/private-booking-route';
import { LoadingScreen } from '../loading-screen/loading-screen';
import { AuthStatus } from '../../const';
import { ErrorScreen } from '../error-screen/error-screen';

export const App = () => {
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    let isMounted = true;

    if (isMounted) {
      dispatch(fetchQuests());
      dispatch(checkAuth());
    }

    return () => {
      isMounted = false;
    };
  }, [dispatch]);

  const authStatus = useAppSelector(getAuthStatus);
  const isError = useAppSelector(hasError);

  if (isError) {
    return (
      <ErrorScreen />);
  }

  if (authStatus === AuthStatus.Unknown) {
    return <LoadingScreen />;
  } else {
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
            path={`${AppRoute.Quest}/:id${AppRoute.Booking}`}
            element={
              <PrivateBookingRoute authorizationStatus={authStatus}>
                <Booking />
              </PrivateBookingRoute>
            }
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
  }
};
