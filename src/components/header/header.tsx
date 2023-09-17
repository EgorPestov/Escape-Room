import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { AppRoute, AuthStatus, AppPage } from '../../const';
import { getStyleForNavLink } from '../../utils';
import { useAppDispatch } from '../../hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector/useAppSelector';
import { getActivePage } from '../../store/quests-process/selectors';
import { setActivePage } from '../../store/quests-process/quests-process';
import { getAuthStatus } from '../../store/user-process/selectors';
import { HeaderAuthElement } from './header-auth-element';
import { HeaderNoAuthElement } from './header-no-auth-element';

const HeaderComponent = () => {
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
                className={`link ${activePage === AppPage.Main ? 'active' : ''}`}
                to={AppRoute.Root}
                style={getStyleForNavLink}
                onClick={() => dispatch(setActivePage(AppPage.Main))}
              >
                {AppPage.Main}
              </NavLink>
            </li>
            <li className="main-nav__item">
              <NavLink
                className={`link ${activePage === AppPage.Contacts ? 'active' : ''}`}
                to={AppRoute.Contacts}
                style={getStyleForNavLink}
                onClick={() => dispatch(setActivePage(AppPage.Contacts))}
              >
                {AppPage.Contacts}
              </NavLink>
            </li>
            <li className="main-nav__item">
              {authStatus === AuthStatus.Auth ?
                <NavLink
                  className={`link ${activePage === AppPage.MyQuests ? 'active' : ''}`}
                  to={AppRoute.MyQuests}
                  onClick={() => dispatch(setActivePage(AppPage.MyQuests))}
                >
                  {AppPage.MyQuests}
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

export const Header = memo(HeaderComponent);
