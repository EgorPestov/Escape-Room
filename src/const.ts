import { LatLngExpression } from 'leaflet';

export const SAINT_P_COORDS = [59.9386, 30.3141] as LatLngExpression;
export const OFFICE_COORDS = [59.968456, 30.31759] as LatLngExpression;

export const MAP_ZOOM_VALUE_CITY = 10;

export const MAP_ZOOM_VALUE_OFFICE = 11;

export const URL_MARKER_DEFAULT = '/markup/img/svg/pin-default.svg';

export const URL_MARKER_ACTIVE = '/markup/img/svg/pin-active.svg';

export const PASSWORD_MIN_LENGTH = 3;

export const PASSWORD_MAX_LENGTH = 15;

export const PASSWORD_REGEXP = /^(?=.*[A-Za-zА-Яа-я])(?=.*\d).{3,15}$/;

export const FORM_NAME_REGEXP = /^[a-zA-Zа-яА-Я\s-]*$/;

export const FORM_PHONE_REGEXP = /^\+[0-9]{11}$/;

export const CONTACT_NAME_MIN_LENGTH = 1;

export const CONTACT_NAME_MAX_LENGTH = 15;

export const PHONE_MAX_LENGTH = 12;

export const AppRoute = {
  Root: '/',
  Login: '/login',
  Quest: '/quest',
  Booking: '/booking',
  MyQuests: '/my-quests',
  Contacts: '/contacts',
  NotFound: '/404',
} as const;

export const APIRoute = {
  Quests: '/quest',
  Booking: '/booking',
  Reservations: '/reservation',
  Login: '/login',
  Logout: '/logout',
} as const;

export type AppRouteType = typeof AppRoute;

export const LevelFilterTypes = {
  all: 'Любой',
  easy: 'Лёгкий',
  medium: 'Средний',
  hard: 'Сложный',
} as const;

export type LevelFilterTypeValues = typeof LevelFilterTypes[keyof typeof LevelFilterTypes];

export const LevelFilterNames = ['all', 'easy', 'medium', 'hard'] as const;

export type LevelFilterTypeKeys = keyof typeof LevelFilterTypes;

export const GenreFilterTypes = {
  'all-quests': 'Все квесты',
  'adventures': 'Приключения',
  'horror': 'Ужасы',
  'mystic': 'Мистика',
  'detective': 'Детектив',
  'sci-fi': 'Sci-fi',
} as const;

export type GenreFilterTypeKeys = keyof typeof GenreFilterTypes;

export const AuthStatus = {
  Auth: 'AUTH',
  NoAuth: 'NO_AUTH',
  Unknown: 'UNKNOWN',
} as const;

type AuthStatusType = typeof AuthStatus;

export type AuthStatusValuesType = AuthStatusType[keyof AuthStatusType];

export const NameSpace = {
  Quests: 'QUESTS',
  User: 'USER',
} as const;

export type NameSpaceType = typeof NameSpace;

export const ValidationMessages = {
  ContactPerson: 'Укажите имя (только буквы, допускается дефис и пробел)',
  Phone: 'Укажите номер телефона (в формате +79991112233)',
  PeopleCount: 'Укажите количество участников',
} as const;

export const AppPage = {
  Main: 'Квесты',
  Contacts: 'Контакты',
  MyQuests: 'Мои бронирования',
} as const;

export const Dates = {
  today: 'today',
  tomorrow: 'tomorrow',
} as const;

export const DateTranslates = {
  'today': 'сегодня',
  'tomorrow': 'завтра',
} as const;
