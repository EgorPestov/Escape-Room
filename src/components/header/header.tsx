import { NavLink } from 'react-router-dom';
import { AppRoute } from '../../const';
import { getStyleForNavLink } from '../../utils';

export const Header = () => (
  <header className="header">
    <div className="container container--size-l">
      <NavLink className="logo header__logo" to={AppRoute.Root} aria-label="Перейти на Главную" style={getStyleForNavLink}>
        <svg width={134} height={52} aria-hidden="true">
          <use xlinkHref="#logo" />
        </svg>
      </NavLink>
      <nav className="main-nav header__main-nav">
        <ul className="main-nav__list">
          <li className="main-nav__item">
            <NavLink className="link active" to={AppRoute.Root} style={getStyleForNavLink}>
              Квесты
            </NavLink>
          </li>
          <li className="main-nav__item">
            <NavLink className="link" to={AppRoute.Contacts} style={getStyleForNavLink}>
              Контакты
            </NavLink>
          </li>
          <li className="main-nav__item">
            <NavLink className="link" to={AppRoute.MyQuests}>
              Мои бронирования
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="header__side-nav">
        <NavLink className="btn btn--accent header__side-item" to={AppRoute.Login}>
          Войти
        </NavLink>
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
