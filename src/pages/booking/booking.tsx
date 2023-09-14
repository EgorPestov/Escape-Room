import { useParams } from 'react-router-dom';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { Helmet } from 'react-helmet-async';
import { useAppDispatch } from '../../hooks/useAppDispatch/useAppDispatch';
import { useLayoutEffect, useState, ChangeEvent, FormEvent } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector/useAppSelector';
import { getFullQuest, getFullQuestLoadStatus, getBookings, getActiveBooking } from '../../store/quests-process/selectors';
import { LoadingScreen } from '../../components/loading-screen/loading-screen';
import { Map } from '../../components/map/map';
import { fetchBookings, fetchFullQuest } from '../../store/api-actions';
import { formatTime } from '../../utils';
import { bookQuest } from '../../store/api-actions';

export const Booking = () => {
  const [BookingInfo, setBookingInfo] = useState({
    date: '',
    time: '',
    contactPerson: '',
    phone: '',
    withChildren: false,
    peopleCount: 1,
    placeId: ''
  });

  const currentId = useParams().id;
  const dispatch = useAppDispatch();
  const fullQuest = useAppSelector(getFullQuest);
  const isFullQuestLoading = useAppSelector(getFullQuestLoadStatus);
  const bookings = useAppSelector(getBookings);
  const currentBooking = useAppSelector(getActiveBooking);

  useLayoutEffect(() => {
    dispatch(fetchFullQuest({ id: currentId }));
    dispatch(fetchBookings({ id: currentId }));
  }, [dispatch, currentId,]);

  if (isFullQuestLoading || fullQuest === null || bookings === null || currentBooking === undefined) {
    return (
      <LoadingScreen />
    );
  }

  const { id, location, slots } = currentBooking;
  const { title, level, type, peopleMinMax, description, coverImg, coverImgWebp } = fullQuest;

  const handleContactChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setBookingInfo({ ...BookingInfo, contactPerson: evt.target.value });
  };

  const handlePhoneChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setBookingInfo({ ...BookingInfo, phone: evt.target.value });
  };

  const handlePeopleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setBookingInfo({ ...BookingInfo, peopleCount: Number(evt.target.value) });
  };

  const handleSlotChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setBookingInfo({ ...BookingInfo, date: evt.target.dataset.day, time: evt.target.dataset.time, placeId: id });
  };

  const handleChildrenChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setBookingInfo({ ...BookingInfo, withChildren: evt.target.checked });
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(bookQuest({
      id: currentId,
      date: BookingInfo.date,
      time: BookingInfo.time,
      contactPerson: BookingInfo.contactPerson,
      phone: BookingInfo.phone,
      withChildren: BookingInfo.withChildren,
      peopleCount: BookingInfo.peopleCount,
      placeId: BookingInfo.placeId,
    }));
  };

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
            onSubmit={handleSubmit}
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
                        onChange={handleSlotChange}
                        data-time={slot.time}
                        data-day={'today'}
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
                        onChange={handleSlotChange}
                        data-time={slot.time}
                        data-day={'tomorrow'}
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
                  value={BookingInfo.contactPerson}
                  onChange={handleContactChange}
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
                  value={BookingInfo.phone}
                  onChange={handlePhoneChange}
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
                  value={BookingInfo.peopleCount}
                  onChange={handlePeopleChange}
                  type="number"
                  id="person"
                  name="person"
                  placeholder="Количество участников"
                  required
                />
              </div>
              <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--children">
                <input
                  onChange={handleChildrenChange}
                  type="checkbox"
                  id="children"
                  name="children"
                  checked={BookingInfo.withChildren}
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
