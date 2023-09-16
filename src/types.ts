export type QuestType = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: 'easy' | 'medium' | 'hard';
  type: 'adventures' | 'horror' | 'mystic' | 'detective' | 'sci-fi';
  peopleMinMax: [number, number];
}

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

export type BookingType = {
  id: string;
  location: LocationType;
  slots: Slots;
}

export type LocationType = {
  address: string;
  coords: [number, number];
}

export type Slots = {
  today: Times[];
  tomorrow: Times[];
}

export type Times = {
  time: string;
  isAvailable: boolean;
}

export type ReservationType = {
  date: 'today' | 'tomorrow';
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  id: string;
  location: LocationType;
  quest: QuestType;
};
