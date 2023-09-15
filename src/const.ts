import { LatLngExpression } from 'leaflet';

export const SAINT_P_COORDS = [59.9386, 30.3141] as LatLngExpression;

export const MAP_ZOOM_VALUE = 10;

export const URL_MARKER_DEFAULT = '/markup/img/svg/pin-default.svg';

export const URL_MARKER_ACTIVE = '/markup/img/svg/pin-active.svg';

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

export type AppRouteType = typeof APIRoute;

export const LevelFilterTypes = {
  all: 'любой',
  easy: 'лёгкий',
  medium: 'средний',
  hard: 'сложный',
} as const;

export type LevelFilterTypeValues = typeof LevelFilterTypes[keyof typeof LevelFilterTypes];

export type LevelFilterTypeKeys = keyof typeof LevelFilterTypes;

export const LevelFilterValues = Object.values(LevelFilterTypes);

export const GenreFilterTypes = {
  'all-quests': 'Все квесты',
  'adventures': 'Приключения',
  'horror': 'Ужасы',
  'mystic': 'Мистика',
  'detective': 'Детектив',
  'sci-fi': 'Sci-fi',
} as const;

export type GenreFilterTypeValues = typeof GenreFilterTypes[keyof typeof GenreFilterTypes];

export type GenreFilterTypeKeys = keyof typeof GenreFilterTypes;

export const GenreFilterValues = Object.values(GenreFilterTypes);

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
