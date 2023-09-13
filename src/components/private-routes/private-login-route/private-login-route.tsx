import { Navigate } from 'react-router-dom';
import { AuthStatus, AuthStatusValuesType } from '../../../const';
import { LoadingScreen } from '../../loading-screen/loading-screen';
import { useAppSelector } from '../../../hooks/useAppSelector/useAppSelector';
import { getNeededPage } from '../../../store/quests-process/selectors';

type PrivateRouteProps = {
  authorizationStatus: AuthStatusValuesType;
  children: JSX.Element;
}

export const PrivateLoginRoute = ({ authorizationStatus, children }: PrivateRouteProps) => {
  const neededPage = useAppSelector(getNeededPage);

  if (authorizationStatus === AuthStatus.Unknown) {
    return <LoadingScreen />;
  }

  return (
    authorizationStatus === AuthStatus.Auth
      ? <Navigate to={neededPage} />
      : children
  );
};
