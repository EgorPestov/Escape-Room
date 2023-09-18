import { Helmet } from 'react-helmet-async';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { FormEvent, useState, ChangeEvent } from 'react';
import { login } from '../../store/api-actions';
import { useAppDispatch } from '../../hooks/useAppDispatch/useAppDispatch';
import { PASSWORD_MAX_LENGTH, PASSWORD_MIN_LENGTH, PASSWORD_REGEXP } from '../../const';

export const Login = () => {
  const dispatch = useAppDispatch();
  const [AuthInfo, setAuthInfo] = useState({ login: '', password: '' });

  const isValidPassword = PASSWORD_REGEXP.test(AuthInfo.password);
  const isNeedDisable = !AuthInfo.login || !isValidPassword;

  const handleLoginChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setAuthInfo({ ...AuthInfo, login: evt.target.value });
  };

  const handlePasswordChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setAuthInfo({ ...AuthInfo, password: evt.target.value });
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    dispatch(login({
      email: AuthInfo.login,
      password: AuthInfo.password,
    }));
  };

  return (
    <div className="wrapper">
      <Helmet>
        <title>Авторизация</title>
      </Helmet>
      <Header />
      <main className="decorated-page login">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source
              type="image/webp"
              srcSet="img/content/maniac/maniac-size-m.webp, img/content/maniac/maniac-size-m@2x.webp 2x"
            />
            <img
              src="img/content/maniac/maniac-size-m.jpg"
              srcSet="img/content/maniac/maniac-size-m@2x.jpg 2x"
              width={1366}
              height={768}
              alt=""
            />
          </picture>
        </div>
        <div className="container container--size-l">
          <div className="login__form">
            <form
              className="login-form"
              action=""
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="login-form__inner-wrapper">
                <h1 className="title title--size-s login-form__title">Вход</h1>
                <div className="login-form__inputs">
                  <div className="custom-input login-form__input">
                    <label className="custom-input__label" htmlFor="email">
                      E–mail
                    </label>
                    <input
                      value={AuthInfo.login}
                      onChange={handleLoginChange}
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Адрес электронной почты"
                      required
                    />
                  </div>
                  <div className="custom-input login-form__input">
                    <label className="custom-input__label" htmlFor="password">
                      Пароль
                    </label>
                    <input
                      value={AuthInfo.password}
                      onChange={handlePasswordChange}
                      minLength={PASSWORD_MIN_LENGTH}
                      maxLength={PASSWORD_MAX_LENGTH}
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Пароль"
                      required
                    />
                  </div>
                </div>
                <button
                  className="btn btn--accent btn--general login-form__submit"
                  type="submit"
                  disabled={isNeedDisable}
                >
                  Войти
                </button>
                {!AuthInfo.login && (
                  <p style={{ color: 'red' }}>
                    Введите e-mail
                  </p>
                )}
                {!isValidPassword && (
                  <p style={{ color: 'red' }}>
                    Длина пароля должна быть от {PASSWORD_MIN_LENGTH} до {PASSWORD_MAX_LENGTH} символов (минимум 1 буква и 1 символ)
                  </p>
                )}
              </div>
              <label className="custom-checkbox login-form__checkbox">
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
        </div>
      </main>
      <Footer />
    </div>
  );
};
