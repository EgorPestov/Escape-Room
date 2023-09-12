export const AppRoute = {
  Root: '/',
  Login: '/login',
  Quest: '/quest',
  Booking: '/booking',
  MyQuests: '/my-quests',
  Contacts: '/contacts',
  NotFound: '/404',
} as const;

export const LevelTranslations = {
  easy: 'лёгкий',
  medium: 'средний',
  hard: 'сложный',
};

export const TypeTranslations = {
  adventures: 'приключения',
  horror: 'ужасы',
  mystic: 'мистика',
  detective: 'детектив',
  'sci-fi': 'sci-fi',
};
