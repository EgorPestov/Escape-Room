export const AppRoute = {
  Root: '/',
  Login: '/login',
  Quest: '/quest',
  Booking: '/booking',
  MyQuests: '/my-quests',
  Contacts: '/contacts',
  NotFound: '/404',
} as const;

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
