import { Navigate } from 'react-router-dom';
import { AppRoute, AuthStatus, AuthStatusValuesType } from '../../../const';
import { LoadingScreen } from '../../loading-screen/loading-screen';
import { useAppDispatch } from '../../../hooks/useAppDispatch/useAppDispatch';
import { setNeededPage } from '../../../store/quests-process/quests-process';

type PrivateRouteProps = {
  authorizationStatus: AuthStatusValuesType;
  children: JSX.Element;
}

export const PrivateBookingRoute = ({ authorizationStatus, children }: PrivateRouteProps) => {
  const dispatch = useAppDispatch();

  if (authorizationStatus === AuthStatus.Unknown) {
    return <LoadingScreen />;
  }

  if (authorizationStatus !== AuthStatus.Auth) {
    dispatch(setNeededPage(window.location.pathname));
    return <Navigate to={AppRoute.Login} />;
  }

  return children;
};
