import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';

export const MyQuests = () => (
  <div className="wrapper">
    <Helmet>
      <title>Мои Квесты</title>
    </Helmet>
    <Header />
    <main className="page-content decorated-page">
      <div className="decorated-page__decor" aria-hidden="true">
        <picture>
          <source
            type="image/webp"
            srcSet="img/content/maniac/maniac-bg-size-m.webp, img/content/maniac/maniac-bg-size-m@2x.webp 2x"
          />
          <img
            src="img/content/maniac/maniac-bg-size-m.jpg"
            srcSet="img/content/maniac/maniac-bg-size-m@2x.jpg 2x"
            width={1366}
            height={1959}
            alt="Фоновая картинка"
          />
        </picture>
      </div>
      <div className="container">
        <div className="page-content__title-wrapper">
          <h1 className="title title--size-m page-content__title">
            Мои бронирования
          </h1>
        </div>
        <div className="cards-grid">
          <div className="quest-card">
            <div className="quest-card__img">
              <picture>
                <source
                  type="image/webp"
                  srcSet="img/content/maniac/maniac-size-s.webp, img/content/maniac/maniac-size-s@2x.webp 2x"
                />
                <img
                  src="img/content/maniac/maniac-size-s.jpg"
                  srcSet="img/content/maniac/maniac-size-s@2x.jpg 2x"
                  width={344}
                  height={232}
                  alt="Мужчина в маске в тёмном переходе."
                />
              </picture>
            </div>
            <div className="quest-card__content">
              <div className="quest-card__info-wrapper">
                <a className="quest-card__link" href="quest.html">
                  Маньяк
                </a>
                <span className="quest-card__info">
                  [сегодня, 17:00. наб. реки Карповки 5, лит П
                  <br />
                  м. Петроградская]
                </span>
              </div>
              <ul className="tags quest-card__tags">
                <li className="tags__item">
                  <svg width={11} height={14} aria-hidden="true">
                    <use xlinkHref="#icon-person" />
                  </svg>
                  6 чел
                </li>
                <li className="tags__item">
                  <svg width={14} height={14} aria-hidden="true">
                    <use xlinkHref="#icon-level" />
                  </svg>
                  Средний
                </li>
              </ul>
              <button
                className="btn btn--accent btn--secondary quest-card__btn"
                type="button"
              >
                Отменить
              </button>
            </div>
          </div>
          <div className="quest-card">
            <div className="quest-card__img">
              <picture>
                <source
                  type="image/webp"
                  srcSet="img/content/palace/palace-size-s.webp, img/content/palace/palace-size-s@2x.webp 2x"
                />
                <img
                  src="img/content/palace/palace-size-s.jpg"
                  srcSet="img/content/palace/palace-size-s@2x.jpg 2x"
                  width={344}
                  height={232}
                  alt="Замок на возвышенности."
                />
              </picture>
            </div>
            <div className="quest-card__content">
              <div className="quest-card__info-wrapper">
                <a className="quest-card__link" href="quest.html">
                  Тайны старого особняка
                </a>
                <span className="quest-card__info">
                  [завтра, 17:00. наб. реки Карповки 5, лит П
                  <br />
                  м. Петроградская]
                </span>
              </div>
              <ul className="tags quest-card__tags">
                <li className="tags__item">
                  <svg width={11} height={14} aria-hidden="true">
                    <use xlinkHref="#icon-person" />
                  </svg>
                  3 чел
                </li>
                <li className="tags__item">
                  <svg width={14} height={14} aria-hidden="true">
                    <use xlinkHref="#icon-level" />
                  </svg>
                  Лёгкий
                </li>
              </ul>
              <button
                className="btn btn--accent btn--secondary quest-card__btn"
                type="button"
              >
                Отменить
              </button>
            </div>
          </div>
          <div className="quest-card">
            <div className="quest-card__img">
              <picture>
                <source
                  type="image/webp"
                  srcSet="img/content/maniac/maniac-size-s.webp, img/content/maniac/maniac-size-s@2x.webp 2x"
                />
                <img
                  src="img/content/maniac/maniac-size-s.jpg"
                  srcSet="img/content/maniac/maniac-size-s@2x.jpg 2x"
                  width={344}
                  height={232}
                  alt="Мужчина в маске в тёмном переходе."
                />
              </picture>
            </div>
            <div className="quest-card__content">
              <div className="quest-card__info-wrapper">
                <a className="quest-card__link" href="quest.html">
                  Маньяк
                </a>
                <span className="quest-card__info">
                  [завтра, 20:00. наб. реки Карповки 5, лит П
                  <br />
                  м. Петроградская]
                </span>
              </div>
              <ul className="tags quest-card__tags">
                <li className="tags__item">
                  <svg width={11} height={14} aria-hidden="true">
                    <use xlinkHref="#icon-person" />
                  </svg>
                  6 чел
                </li>
                <li className="tags__item">
                  <svg width={14} height={14} aria-hidden="true">
                    <use xlinkHref="#icon-level" />
                  </svg>
                  Средний
                </li>
              </ul>
              <button
                className="btn btn--accent btn--secondary quest-card__btn"
                type="button"
              >
                Отменить
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);
