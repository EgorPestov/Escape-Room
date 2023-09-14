import { useParams } from 'react-router-dom';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { Helmet } from 'react-helmet-async';
import { useAppDispatch } from '../../hooks/useAppDispatch/useAppDispatch';
import { useLayoutEffect } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector/useAppSelector';
import { getFullQuest, getFullQuestLoadStatus, getBookings, getActiveId, getActiveBooking } from '../../store/quests-process/selectors';
import { LoadingScreen } from '../../components/loading-screen/loading-screen';
import { Map } from '../../components/map/map';
import { fetchBookings, fetchFullQuest } from '../../store/api-actions';
import { formatTime } from '../../utils';

export const Booking = () => {
  const currentId = useParams().id;
  const dispatch = useAppDispatch();
  const fullQuest = useAppSelector(getFullQuest);
  const activeId = useAppSelector(getActiveId);
  const isFullQuestLoading = useAppSelector(getFullQuestLoadStatus);
  const bookings = useAppSelector(getBookings);
  const currentBooking = useAppSelector(getActiveBooking);

  useLayoutEffect(() => {
    dispatch(fetchFullQuest({ id: currentId }));
    dispatch(fetchBookings({ id: currentId }));
  }, [dispatch, activeId, currentId,]);

  if (isFullQuestLoading || fullQuest === null || bookings === null || currentBooking === undefined) {
    return (
      <LoadingScreen />
    );
  }

  const { id, location, slots } = currentBooking;
  console.log(slots)
  const { title, level, type, peopleMinMax, description, coverImg, coverImgWebp } = fullQuest;

  return (
    <div className="wrapper">
      <Helmet>
        <title>Бронирование</title>
      </Helmet>
      <Header />
      <main className="page-content decorated-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source
              type="image/webp"
              srcSet={coverImgWebp}
            />
            <img
              src={coverImg}
              width={1366}
              height={1959}
              alt={title}
            />
          </picture>
        </div>
        <div className="container container--size-s">
          <div className="page-content__title-wrapper">
            <h1 className="subtitle subtitle--size-l page-content__subtitle">
              Бронирование квеста
            </h1>
            <p className="title title--size-m title--uppercase page-content__title">
              {title}
            </p>
          </div>
          <div className="page-content__item">
            <div className="booking-map">
              <Map bookings={bookings} selectedId={id} />
              <p className="booking-map__address">
                Вы выбрали: {location.address}
              </p>
            </div>
          </div>
          <form
            className="booking-form"
            action="https://echo.htmlacademy.ru/"
            method="post"
          >
            <fieldset className="booking-form__section">
              <legend className="visually-hidden">Выбор даты и времени</legend>
              <fieldset className="booking-form__date-section">
                <legend className="booking-form__date-title">Сегодня</legend>
                <div className="booking-form__date-inner-wrapper">
                  {slots.today.map((slot) => (
                    <label key={slot.time} className="custom-radio booking-form__date">
                      <input
                        type="radio"
                        id={formatTime(slot.time, 'today')}
                        name="date"
                        required
                        defaultValue={formatTime(slot.time, 'today')}
                        disabled={!slot.isAvailable}
                      />
                      <span className="custom-radio__label">{slot.time}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
              <fieldset className="booking-form__date-section">
                <legend className="booking-form__date-title">Завтра</legend>
                <div className="booking-form__date-inner-wrapper">
                  {slots.today.map((slot) => (
                    <label key={slot.time} className="custom-radio booking-form__date">
                      <input
                        type="radio"
                        id={formatTime(slot.time, 'tomorrow')}
                        name="date"
                        required
                        defaultValue={formatTime(slot.time, 'tomorrow')}
                        disabled={!slot.isAvailable}
                      />
                      <span className="custom-radio__label">{slot.time}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
            </fieldset>
            <fieldset className="booking-form__section">
              <legend className="visually-hidden">Контактная информация</legend>
              <div className="custom-input booking-form__input">
                <label className="custom-input__label" htmlFor="name">
                  Ваше имя
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Имя"
                  required
                  pattern="[А-Яа-яЁёA-Za-z'- ]{1,}"
                />
              </div>
              <div className="custom-input booking-form__input">
                <label className="custom-input__label" htmlFor="tel">
                  Контактный телефон
                </label>
                <input
                  type="tel"
                  id="tel"
                  name="tel"
                  placeholder="Телефон"
                  required
                  pattern="[0-9]{10,}"
                />
              </div>
              <div className="custom-input booking-form__input">
                <label className="custom-input__label" htmlFor="person">
                  Количество участников
                </label>
                <input
                  type="number"
                  id="person"
                  name="person"
                  placeholder="Количество участников"
                  required
                />
              </div>
              <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--children">
                <input
                  type="checkbox"
                  id="children"
                  name="children"
                  defaultChecked
                />
                <span className="custom-checkbox__icon">
                  <svg width={20} height={17} aria-hidden="true">
                    <use xlinkHref="#icon-tick" />
                  </svg>
                </span>
                <span className="custom-checkbox__label">
                  Со мной будут дети
                </span>
              </label>
            </fieldset>
            <button
              className="btn btn--accent btn--cta booking-form__submit"
              type="submit"
            >
              Забронировать
            </button>
            <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--agreement">
              <input
                type="checkbox"
                id="id-order-agreement"
                name="user-agreement"
                required
              />
              <span className="custom-checkbox__icon">
                <svg width={20} height={17} aria-hidden="true">
                  <use xlinkHref="#icon-tick" />
                </svg>
              </span>
              <span className="custom-checkbox__label">
                Я согласен с
                <a className="link link--active-silver link--underlined" href="#">
                  правилами обработки персональных данных
                </a>
                и пользовательским соглашением
              </span>
            </label>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};
