import { Helmet } from 'react-helmet-async';
import { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { deleteReservation, fetchReservations } from '../../store/api-actions';
import { useAppDispatch } from '../../hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector/useAppSelector';
import { getReservations, getReservationsLoadStatus } from '../../store/quests-process/selectors';
import { LoadingScreen } from '../../components/loading-screen/loading-screen';
import { DateTranslates, LevelFilterTypes } from '../../const';

export const MyQuests = () => {
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    let isMounted = true;
    if (isMounted) {
      dispatch(fetchReservations());
    }

    return () => {
      isMounted = false;
    };
  }, [dispatch]);

  const reservations = useAppSelector(getReservations);
  const isReservationsLoading = useAppSelector(getReservationsLoadStatus);


  if (isReservationsLoading) {
    return <LoadingScreen />;
  } else {
    return (
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
              {reservations.map((reservation) => (
                <div key={reservation.id} className="quest-card">
                  <div className="quest-card__img">
                    <picture>
                      <source
                        type="image/webp"
                        srcSet={reservation.quest.previewImgWebp}
                      />
                      <img
                        src={reservation.quest.previewImg}
                        width={344}
                        height={232}
                        alt={reservation.quest.title}
                      />
                    </picture>
                  </div>
                  <div className="quest-card__content">
                    <div className="quest-card__info-wrapper">
                      <Link className="quest-card__link" to={`${AppRoute.Quest}/${reservation.quest.id}`}>
                        {reservation.quest.title}
                      </Link>
                      <span className="quest-card__info">
                        [{DateTranslates[reservation.date]}, {reservation.time}. {reservation.location.address}]
                      </span>
                    </div>
                    <ul className="tags quest-card__tags">
                      <li className="tags__item">
                        <svg width={11} height={14} aria-hidden="true">
                          <use xlinkHref="#icon-person" />
                        </svg>
                        {reservation.peopleCount} чел
                      </li>
                      <li className="tags__item">
                        <svg width={14} height={14} aria-hidden="true">
                          <use xlinkHref="#icon-level" />
                        </svg>
                        {LevelFilterTypes[reservation.quest.level]}
                      </li>
                    </ul>
                    <button
                      className="btn btn--accent btn--secondary quest-card__btn"
                      type="button"
                      onClick={() => {
                        dispatch(deleteReservation({ id: reservation.id }));
                      }}
                    >
                      Отменить
                    </button>
                  </div>
                </div>
              ))}
              <h1 className={reservations.length === 0 ? '' : 'visually-hidden'}>Вы пока что не забронировали ни один квест. Самое время выбрать!</h1>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
};
