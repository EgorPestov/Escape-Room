import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { QuestCard } from '../quest-card.tsx/quest-card';
import { mockQuests } from '../../mocks';

export const QuestsList = () => (
  <div className="cards-grid">
    {mockQuests.map((quest) => (
      <QuestCard
        key={quest.id}
        id={quest.id}
        title={quest.title}
        previewImg={quest.previewImg}
        previewImgWebp={quest.previewImgWebp}
        level={quest.level}
        type={quest.type}
        peopleMinMax={quest.peopleMinMax}
      />
    )
    )}
  </div>
);
