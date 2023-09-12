export type QuestType = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: 'easy' | 'medium' | 'hard';
  type: 'adventures' | 'horror' | 'mystic' | 'detective' | 'sci-fi';
  peopleMinMax: [number, number];
}

export const mockQuests: QuestType[] = [
  {
    id: 'b2da7692-2f63-4ba1-b5b6-5c98b0f5c61a',
    title: 'Склеп',
    previewImg: 'https://grading.design.pages.academy/static/quest/crypt.jpg',
    previewImgWebp: 'https://grading.design.pages.academy/static/quest/crypt.webp',
    level: 'hard',
    type: 'horror',
    peopleMinMax: [
      2,
      5
    ]
  },
  {
    id: '012cd932-9908-4db1-936e-346cb3ee3205',
    title: 'Маньяк',
    previewImg: 'https://grading.design.pages.academy/static/quest/maniac.jpg',
    previewImgWebp: 'https://grading.design.pages.academy/static/quest/maniac.webp',
    level: 'medium',
    type: 'horror',
    peopleMinMax: [
      3,
      6
    ]
  },
  {
    id: '4b281d94-6314-4bfe-9b55-6ea62306e176',
    title: 'Ритуал',
    previewImg: 'https://grading.design.pages.academy/static/quest/ritual.jpg',
    previewImgWebp: 'https://grading.design.pages.academy/static/quest/ritual.webp',
    level: 'hard',
    type: 'mystic',
    peopleMinMax: [
      3,
      5
    ]
  },
  {
    id: 'ba70f1b5-b232-4d36-bd31-1e7a28385bbd',
    title: 'Тайны старого особняка',
    previewImg: 'https://grading.design.pages.academy/static/quest/palace.jpg',
    previewImgWebp: 'https://grading.design.pages.academy/static/quest/palace.webp',
    level: 'easy',
    type: 'detective',
    peopleMinMax: [
      2,
      5
    ]
  },
  {
    id: '571095af-57a0-46b5-bf48-4f270ce33170',
    title: 'Хижина в лесу',
    previewImg: 'https://grading.design.pages.academy/static/quest/hut.jpg',
    previewImgWebp: 'https://grading.design.pages.academy/static/quest/hut.webp',
    level: 'medium',
    type: 'mystic',
    peopleMinMax: [
      4,
      7
    ]
  },
  {
    id: 'c502d80b-9998-4520-8913-46c651a04fb8',
    title: 'Фатальный эксперимент',
    previewImg: 'https://grading.design.pages.academy/static/quest/experiment.jpg',
    previewImgWebp: 'https://grading.design.pages.academy/static/quest/experiment.webp',
    level: 'hard',
    type: 'adventures',
    peopleMinMax: [
      5,
      8
    ]
  },
  {
    id: 'c4ae64ef-0317-416e-b252-8f66d2c2eea5',
    title: 'Метро 2033',
    previewImg: 'https://grading.design.pages.academy/static/quest/metro.jpg',
    previewImgWebp: 'https://grading.design.pages.academy/static/quest/metro.webp',
    level: 'medium',
    type: 'sci-fi',
    peopleMinMax: [
      6,
      8
    ]
  },
  {
    id: 'fca6d625-59c5-49cf-8817-af89a999ccf4',
    title: 'Старый чердак',
    previewImg: 'https://grading.design.pages.academy/static/quest/loft.jpg',
    previewImgWebp: 'https://grading.design.pages.academy/static/quest/loft.webp',
    level: 'easy',
    type: 'detective',
    peopleMinMax: [
      2,
      3
    ]
  },
  {
    id: '8b2bbfab-3fac-4d8f-a8bc-245e3345dce5',
    title: 'Марс-2056',
    previewImg: 'https://grading.design.pages.academy/static/quest/mars.jpg',
    previewImgWebp: 'https://grading.design.pages.academy/static/quest/mars.webp',
    level: 'easy',
    type: 'sci-fi',
    peopleMinMax: [
      2,
      5
    ]
  },
  {
    id: '1f0dffa4-15ee-4d41-8833-39260c1ee3e5',
    title: 'Последний рубеж',
    previewImg: 'https://grading.design.pages.academy/static/quest/frontier.jpg',
    previewImgWebp: 'https://grading.design.pages.academy/static/quest/frontier.webp',
    level: 'medium',
    type: 'adventures',
    peopleMinMax: [
      4,
      7
    ]
  },
  {
    id: '07888b24-5b6e-417d-b617-7c7750d01814',
    title: 'История призраков',
    previewImg: 'https://grading.design.pages.academy/static/quest/ghosts.jpg',
    previewImgWebp: 'https://grading.design.pages.academy/static/quest/ghosts.webp',
    level: 'easy',
    type: 'mystic',
    peopleMinMax: [
      5,
      6
    ]
  }
];

export type FullQuestType = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: 'easy' | 'medium' | 'hard';
  type: 'adventures' | 'horror' | 'mystic' | 'detective' | 'sci-fi';
  peopleMinMax: [number, number];
  description: string;
  coverImg: string;
  coverImgWebp: string;
}

export const mockFullQuests: FullQuestType[] = [
  {
    id: 'b2da7692-2f63-4ba1-b5b6-5c98b0f5c61a',
    title: 'Склеп',
    description: 'Средневековое кладбище таит в себе много страшных тайн. Местные жители говорят, что в склепе похоронен граф вампир, который по ночам выходит на охоту, чтобы испить человеческой крови. Через час солнце опустится за горизонт, успеете ли вы убить вампира и выбраться из склепа?',
    previewImg: 'https://grading.design.pages.academy/static/quest/crypt.jpg',
    previewImgWebp: 'https://grading.design.pages.academy/static/quest/crypt.webp',
    coverImg: 'https://grading.design.pages.academy/static/quest/crypt@2x.jpg',
    coverImgWebp: 'https://grading.design.pages.academy/static/quest/crypt@2x.webp',
    level: 'hard',
    type: 'horror',
    peopleMinMax: [
      2,
      5
    ]
  },
  {
    id: '012cd932-9908-4db1-936e-346cb3ee3205',
    title: 'Маньяк',
    description: 'В комнате с приглушённым светом несколько человек, незнакомых друг с другом, приходят в себя. Никто не помнит, что произошло прошлым вечером. Руки и ноги связаны, но одному из вас получилось освободиться. На стене висит пугающий таймер и запущен отсчёт 60 минут. Сможете ли вы разобраться в стрессовой ситуации, помочь другим, разобраться что произошло и выбраться из комнаты?',
    previewImg: 'https://grading.design.pages.academy/static/quest/maniac.jpg',
    previewImgWebp: 'https://grading.design.pages.academy/static/quest/maniac.webp',
    coverImg: 'https://grading.design.pages.academy/static/quest/maniac@2x.jpg',
    coverImgWebp: 'https://grading.design.pages.academy/static/quest/maniac@2x.webp',
    level: 'medium',
    type: 'horror',
    peopleMinMax: [
      3,
      6
    ]
  },
  {
    'id': '4b281d94-6314-4bfe-9b55-6ea62306e176',
    'title': 'Ритуал',
    'description': 'Тяжелый воздух угнетает, в ночи вы оказываетесь запертыми в сыром помещении вместе с другими ничего не понимающими жертвами. Сквозь щель в двери вы видите, как некто в капюшоне готовит площадку как будто для проведения мистического обряда. Удастся ли вам выбраться, пока вы не станете жертвой ритуала?',
    'previewImg': 'https://grading.design.pages.academy/static/quest/ritual.jpg',
    'previewImgWebp': 'https://grading.design.pages.academy/static/quest/ritual.webp',
    'coverImg': 'https://grading.design.pages.academy/static/quest/ritual@2x.jpg',
    'coverImgWebp': 'https://grading.design.pages.academy/static/quest/ritual@2x.webp',
    'level': 'hard',
    'type': 'mystic',
    'peopleMinMax': [
      3,
      5
    ]
  },
  {
    id: 'ba70f1b5-b232-4d36-bd31-1e7a28385bbd',
    title: 'Тайны старого особняка',
    description: 'Погрузитесь в атмосферу служебных помещений закулисья, которые хранят множество тайн и загадок. Вы окажитесь в старом особняке и увидите все, что скрывают его запутанные коридоры.',
    previewImg: 'https://grading.design.pages.academy/static/quest/palace.jpg',
    previewImgWebp: 'https://grading.design.pages.academy/static/quest/palace.webp',
    coverImg: 'https://grading.design.pages.academy/static/quest/palace@2x.jpg',
    coverImgWebp: 'https://grading.design.pages.academy/static/quest/palace@2x.webp',
    level: 'easy',
    type: 'detective',
    peopleMinMax: [
      2,
      5
    ]
  },
  {
    id: '571095af-57a0-46b5-bf48-4f270ce33170',
    title: 'Хижина в лесу',
    description: 'Вы с друзьями оказались в заброшенной хижине. Какую тайну она скрывает и как из неё выбраться? На эти вопросы вам предстоит найти ответ, чтобы вернуться домой.',
    previewImg: 'https://grading.design.pages.academy/static/quest/hut.jpg',
    previewImgWebp: 'https://grading.design.pages.academy/static/quest/hut.webp',
    coverImg: 'https://grading.design.pages.academy/static/quest/hut@2x.jpg',
    coverImgWebp: 'https://grading.design.pages.academy/static/quest/hut@2x.webp',
    level: 'medium',
    type: 'mystic',
    peopleMinMax: [
      4,
      7
    ]
  },
  {
    id: 'c502d80b-9998-4520-8913-46c651a04fb8',
    title: 'Фатальный эксперимент',
    description: 'Вы стоите на пороге нового научного открытия, которое перевернет судьбу человечества. Но что-то идёт не так, и ядерный реактор, который работает на полную мощность, сигнализирует о скорой поломке. Удастся ли вам починить его в отведенное время и предотвратить гибель людей в этом фатальном эксперименте?',
    previewImg: 'https://grading.design.pages.academy/static/quest/experiment.jpg',
    previewImgWebp: 'https://grading.design.pages.academy/static/quest/experiment.webp',
    coverImg: 'https://grading.design.pages.academy/static/quest/experiment@2x.jpg',
    coverImgWebp: 'https://grading.design.pages.academy/static/quest/experiment@2x.webp',
    level: 'hard',
    type: 'adventures',
    peopleMinMax: [
      5,
      8
    ]
  },
  {
    id: 'c4ae64ef-0317-416e-b252-8f66d2c2eea5',
    title: 'Метро 2033',
    description: 'Мир погрузился в хаус постапокалипсиса после ядерного взрыва. Все крупные города были стёрты с лица земли и только в метро на глубине осталась жизнь. Но и здесь творится хаус. У вас и вашей команды есть только одна цель — выжить.',
    previewImg: 'https://grading.design.pages.academy/static/quest/metro.jpg',
    previewImgWebp: 'https://grading.design.pages.academy/static/quest/metro.webp',
    coverImg: 'https://grading.design.pages.academy/static/quest/metro@2x.jpg',
    coverImgWebp: 'https://grading.design.pages.academy/static/quest/metro@2x.webp',
    level: 'medium',
    type: 'sci-fi',
    peopleMinMax: [
      6,
      8
    ]
  },
  {
    id: 'fca6d625-59c5-49cf-8817-af89a999ccf4',
    title: 'Старый чердак',
    description: 'Какую тайну хранит старый чердак? Каждая вещь здесь имеет свой тайный смысл и приближает к вас к раскрытию главной тайны. Почувствуйте себя настоящими детективами и докопайтесь до истины.',
    previewImg: 'https://grading.design.pages.academy/static/quest/loft.jpg',
    previewImgWebp: 'https://grading.design.pages.academy/static/quest/loft.webp',
    coverImg: 'https://grading.design.pages.academy/static/quest/loft@2x.jpg',
    coverImgWebp: 'https://grading.design.pages.academy/static/quest/loft@2x.webp',
    level: 'easy',
    type: 'detective',
    peopleMinMax: [
      2,
      3
    ]
  },
  {
    id: '8b2bbfab-3fac-4d8f-a8bc-245e3345dce5',
    title: 'Марс-2056',
    description: '2055 год. Вы отправились на Марс в научно-исследовательскую экспедицию. Цель экспедиции колонизация планеты.  Вы прибыли на место, развернули временный лагерь, построили комплекс жизнеобеспечения и начали свою работу. У вас команда высококвалифицированных специалистов в своем деле. Но что-то идёт не так — теперь вам нужно улететь с красной планеты как можно быстрее, чтобы спасти свою жизнь.',
    previewImg: 'https://grading.design.pages.academy/static/quest/mars.jpg',
    previewImgWebp: 'https://grading.design.pages.academy/static/quest/mars.webp',
    coverImg: 'https://grading.design.pages.academy/static/quest/mars@2x.jpg',
    coverImgWebp: 'https://grading.design.pages.academy/static/quest/mars@2x.webp',
    level: 'easy',
    type: 'sci-fi',
    peopleMinMax: [
      2,
      5
    ]
  },
  {
    id: '1f0dffa4-15ee-4d41-8833-39260c1ee3e5',
    title: 'Последний рубеж',
    description: 'Никто не знает, что произошло, но необходимо выбираться любой ценой. Дойдут ли все до конца? Но это точно последний шанс спастись.',
    previewImg: 'https://grading.design.pages.academy/static/quest/frontier.jpg',
    previewImgWebp: 'https://grading.design.pages.academy/static/quest/frontier.webp',
    coverImg: 'https://grading.design.pages.academy/static/quest/frontier@2x.jpg',
    coverImgWebp: 'https://grading.design.pages.academy/static/quest/frontier@2x.webp',
    level: 'medium',
    type: 'adventures',
    peopleMinMax: [
      4,
      7
    ]
  },
  {
    id: '07888b24-5b6e-417d-b617-7c7750d01814',
    title: 'История призраков',
    description: 'Ещё вчера они бегали по улицам, а сегодня сквозь них проходят толпы. Почему они застряли между мирами, что держит их на другой стороне? Узнай их историю и не забудь: духи бывают и хорошими, и плохими.',
    previewImg: 'https://grading.design.pages.academy/static/quest/ghosts.jpg',
    previewImgWebp: 'https://grading.design.pages.academy/static/quest/ghosts.webp',
    coverImg: 'https://grading.design.pages.academy/static/quest/ghosts@2x.jpg',
    coverImgWebp: 'https://grading.design.pages.academy/static/quest/ghosts@2x.webp',
    level: 'easy',
    type: 'mystic',
    peopleMinMax: [
      5,
      6
    ]
  }
];
