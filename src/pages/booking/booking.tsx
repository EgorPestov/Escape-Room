import { useParams } from 'react-router-dom';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { Helmet } from 'react-helmet-async';
import { useAppDispatch } from '../../hooks/useAppDispatch/useAppDispatch';
import { useLayoutEffect, useEffect, useState, ChangeEvent } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector/useAppSelector';
import { getFullQuest, getFullQuestLoadStatus, getBookings, getActiveBooking } from '../../store/quests-process/selectors';
import { LoadingScreen } from '../../components/loading-screen/loading-screen';
import { BookingMap } from '../../components/maps/booking-map/booking-map';
import { fetchBookings, fetchFullQuest, bookQuest } from '../../store/api-actions';
import { formatTime } from '../../utils';
import { useForm } from 'react-hook-form';
import classes from './booking.module.css';
import { CONTACT_NAME_MAX_LENGTH, CONTACT_NAME_MIN_LENGTH, Dates, FORM_NAME_REGEXP, FORM_PHONE_REGEXP, MAP_ZOOM_VALUE_CITY, PHONE_MAX_LENGTH, SAINT_P_COORDS, ValidationMessages } from '../../const';
import { MapContainer } from 'react-leaflet';

type BookingData = {
  date: string;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  placeId: string;
};

export const Booking = () => {
  const [BookingInfo, setBookingInfo] = useState<BookingData>({
    date: '',
    time: '',
    contactPerson: '',
    phone: '',
    withChildren: false,
    peopleCount: 1,
    placeId: ''
  });

  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<BookingData>();
  const currentId = useParams().id;
  const dispatch = useAppDispatch();
  const fullQuest = useAppSelector(getFullQuest);
  const isFullQuestLoading = useAppSelector(getFullQuestLoadStatus);
  const bookings = useAppSelector(getBookings);
  const currentBooking = useAppSelector(getActiveBooking);

  useLayoutEffect(() => {
    let isMounted = true;
    if (isMounted) {
      dispatch(fetchFullQuest({ id: currentId }));
      dispatch(fetchBookings({ id: currentId }));

    }
    return () => {
      isMounted = false;
    };
  }, [dispatch, currentId]);

  useEffect(() => {
    setSelectedSlot(null);
  }, [currentBooking]);

  if (isFullQuestLoading || fullQuest === null || bookings === null || currentBooking === undefined) {
    return (
      <LoadingScreen />
    );
  }

  const { id, location, slots } = currentBooking;
  const { title, peopleMinMax, coverImg, coverImgWebp } = fullQuest;

  const handleContactChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setBookingInfo({ ...BookingInfo, contactPerson: evt.target.value });
  };

  const handlePhoneChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setBookingInfo({ ...BookingInfo, phone: evt.target.value });
  };

  const handlePersonChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setBookingInfo({ ...BookingInfo, peopleCount: Number(evt.target.value) });
  };

  const handleSlotChange = (evt: ChangeEvent<HTMLInputElement>) => {
    if (evt.target.dataset.day && evt.target.dataset.time) {
      setBookingInfo({ ...BookingInfo, date: evt.target.dataset.day, time: evt.target.dataset.time, placeId: id });
      setSelectedSlot(formatTime(evt.target.dataset.time, evt.target.dataset.day));
    }
  };

  const handleChildrenChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setBookingInfo({ ...BookingInfo, withChildren: evt.target.checked });
  };

  const onSubmit = () => {
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

  const validateName = (value: string) => {
    if (!FORM_NAME_REGEXP.test(value)) {
      return ValidationMessages.ContactPerson;
    }
    return true;
  };

  const validatePhone = (value: string) => {
    if (!FORM_PHONE_REGEXP.test(value)) {
      return ValidationMessages.Phone;
    }
    return true;
  };

  const validatePerson = (value: number) => {
    if (value < peopleMinMax[0]) {
      return `Минимальное количество участников: ${peopleMinMax[0]}`;
    } else if (value > peopleMinMax[1]) {
      return `Максимальное количество участников: ${peopleMinMax[1]}`;
    } else {
      return true;
    }
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
              <div className="map">
                <MapContainer className="map__container" attributionControl={false} center={SAINT_P_COORDS} zoom={MAP_ZOOM_VALUE_CITY} scrollWheelZoom={false} zoomControl>
                  <BookingMap bookings={bookings} selectedId={id} />
                </MapContainer>
              </div>
              <p className="booking-map__address">
                Вы выбрали: {location.address}
              </p>
            </div>
          </div>
          <form
            onSubmit={(event) => void handleSubmit(onSubmit)(event)}
            className="booking-form"
            action=""
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
                        data-day={Dates.today}
                        type="radio"
                        id={formatTime(slot.time, Dates.today)}
                        name="date"
                        required
                        defaultValue={formatTime(slot.time, Dates.today)}
                        disabled={!slot.isAvailable}
                        checked={selectedSlot === formatTime(slot.time, Dates.today)}
                      />
                      <span className="custom-radio__label">{slot.time}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
              <fieldset className="booking-form__date-section">
                <legend className="booking-form__date-title">Завтра</legend>
                <div className="booking-form__date-inner-wrapper">
                  {slots.tomorrow.map((slot) => (
                    <label key={slot.time} className="custom-radio booking-form__date">
                      <input
                        onChange={handleSlotChange}
                        data-time={slot.time}
                        data-day={Dates.tomorrow}
                        type="radio"
                        id={formatTime(slot.time, Dates.tomorrow)}
                        name="date"
                        required
                        defaultValue={formatTime(slot.time, Dates.tomorrow)}
                        disabled={!slot.isAvailable}
                        checked={selectedSlot === formatTime(slot.time, Dates.tomorrow)}
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
                  type="text"
                  minLength={CONTACT_NAME_MIN_LENGTH}
                  maxLength={CONTACT_NAME_MAX_LENGTH}
                  id="name"
                  placeholder="Имя"
                  {...register('contactPerson', { required: ValidationMessages.ContactPerson, onChange: handleContactChange, validate: validateName })}
                />
                {errors.contactPerson && <span role="alert" className={classes.validation}>{errors.contactPerson?.message}</span>}
              </div>
              <div className="custom-input booking-form__input">
                <label className="custom-input__label" htmlFor="tel">
                  Контактный телефон
                </label>
                <input
                  value={BookingInfo.phone}
                  type="tel"
                  maxLength={PHONE_MAX_LENGTH}
                  id="tel"
                  placeholder="Телефон"
                  {...register('phone', { required: ValidationMessages.Phone, onChange: handlePhoneChange, validate: validatePhone })}
                />
                {errors.phone && <span role="alert" className={classes.validation}>{errors.phone?.message}</span>}
              </div>
              <div className="custom-input booking-form__input">
                <label className="custom-input__label" htmlFor="person">
                  Количество участников
                </label>
                <input
                  type="number"
                  id="person"
                  value={BookingInfo.peopleCount}
                  placeholder="Количество участников"
                  {...register('peopleCount', { required: ValidationMessages.PeopleCount, onChange: handlePersonChange, validate: validatePerson })}
                />
                {errors.peopleCount && <span role="alert" className={classes.validation}>{errors.peopleCount?.message}</span>}
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
