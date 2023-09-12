import { QuestCard } from '../quest-card.tsx/quest-card';
import { useAppSelector } from '../../hooks/useAppSelector/useAppSelector';
import { getQuests } from '../../store/quests-process/selectors';

export const QuestsList = () => {
  const quests = useAppSelector(getQuests);
  return (
    <div className="cards-grid">
      {quests.map((quest) => (
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
};
