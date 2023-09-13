import { NavLink } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import { getStyleForNavLink } from '../../utils';
import { useAppDispatch } from '../../hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector/useAppSelector';
import { getActivePage } from '../../store/quests-process/selectors';
import { setActivePage } from '../../store/quests-process/quests-process';
import { getAuthStatus } from '../../store/user-process/selectors';
import { HeaderAuthElement } from './header-auth-element';
import { HeaderNoAuthElement } from './header-no-auth-element';

export const Header = () => {
  const dispatch = useAppDispatch();
  const activePage = useAppSelector(getActivePage);
  const authStatus = useAppSelector(getAuthStatus);

  return (
    <header className="header">
      <div className="container container--size-l">
        <NavLink
          className="logo header__logo"
          to={AppRoute.Root}
          aria-label="Перейти на Главную"
          style={getStyleForNavLink}
        >
          <svg width={134} height={52} aria-hidden="true">
            <use xlinkHref="#logo" />
          </svg>
        </NavLink>
        <nav className="main-nav header__main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <NavLink
                className={`link ${activePage === 'квесты' ? 'active' : ''}`}
                to={AppRoute.Root}
                style={getStyleForNavLink}
                onClick={() => dispatch(setActivePage('квесты'))}
              >
                Квесты
              </NavLink>
            </li>
            <li className="main-nav__item">
              <NavLink
                className={`link ${activePage === 'контакты' ? 'active' : ''}`}
                to={AppRoute.Contacts}
                style={getStyleForNavLink}
                onClick={() => dispatch(setActivePage('контакты'))}
              >
                Контакты
              </NavLink>
            </li>
            <li className="main-nav__item">
              {authStatus === AuthStatus.Auth ?
                <NavLink
                  className={`link ${activePage === 'мои бронирования' ? 'active' : ''}`}
                  to={AppRoute.MyQuests}
                  onClick={() => dispatch(setActivePage('мои бронирования'))}
                >
                  Мои бронирования
                </NavLink> : ''}
            </li>
          </ul>
        </nav>
        <div className="header__side-nav">
          {authStatus === AuthStatus.Auth ? <HeaderAuthElement /> : <HeaderNoAuthElement />}
          <a
            className="link header__side-item header__phone-link"
            href="tel:88003335599"
          >
            8 (000) 111-11-11
          </a>
        </div>
      </div>
    </header >
  );
};
