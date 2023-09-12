export const AppRoute = {
  Root: '/',
  Login: '/login',
  Quest: '/quest',
  Booking: '/booking',
  MyQuests: '/my-quests',
  Contacts: '/contacts',
  NotFound: '/404',
} as const;

export const LevelSortTypes = {
  all: 'любой',
  easy: 'лёгкий',
  medium: 'средний',
  hard: 'сложный',
} as const;

export type LevelSortTypeValues = typeof LevelSortTypes[keyof typeof LevelSortTypes];

export const LevelSortValues = Object.values(LevelSortTypes);

export const GenreSortTypes = {
  'all-quests': 'Все квесты',
  'adventures': 'Приключения',
  'horror': 'Ужасы',
  'mystic': 'Мистика',
  'detective': 'Детектив',
  'sci-fi': 'Sci-fi',
} as const;

export type GenreSortTypeValues = typeof GenreSortTypes[keyof typeof GenreSortTypes];

export const GenreSortValues = Object.values(GenreSortTypes);

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
