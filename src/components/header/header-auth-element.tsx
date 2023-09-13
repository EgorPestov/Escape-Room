import { NavLink } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks/useAppDispatch/useAppDispatch';
import { logout } from '../../store/api-actions';

export const HeaderAuthElement = () => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <NavLink
      className="btn btn--accent header__side-item"
      to={AppRoute.Root}
      onClick={handleClick}
    >
      Выйти
    </NavLink>
  );
};
