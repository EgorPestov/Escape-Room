import { Navigate } from 'react-router-dom';
import { AppRoute, AuthStatus, AuthStatusValuesType} from '../../../const';

type PrivateRouteProps = {
  authorizationStatus: AuthStatusValuesType;
  children: JSX.Element;
}

export const PrivateLoginRoute = ({authorizationStatus, children}: PrivateRouteProps) => {
  if (authorizationStatus === AuthStatus.Unknown) {
    return null;
  }
  return (
    authorizationStatus === AuthStatus.NoAuth
      ? children
      : <Navigate to={AppRoute.Root} />
  );
};
