import { NavLink } from 'react-router-dom';
import { AppRoute } from '../../const';

export const HeaderNoAuthElement = () => (
  <NavLink
    className="btn header__side-item header__login-btn"
    to={AppRoute.Login}
  >
    Вход
  </NavLink>
);
