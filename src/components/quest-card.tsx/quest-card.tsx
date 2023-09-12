import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { QuestType } from '../../mocks';
import { LevelTranslations } from '../../const';

type QuestCardProps = QuestType;


export const QuestCard = (
  {
    id,
    title,
    previewImg,
    previewImgWebp,
    level,
    type,
    peopleMinMax,
  }: QuestCardProps
) => (
  <div className="quest-card" data-type={type}>
    <div className="quest-card__img">
      <picture>
        <source
          type="image/webp"
          srcSet={previewImgWebp}
        />
        <img
          src={previewImg}
          srcSet={previewImg}
          width={344}
          height={232}
          alt={title}
        />
      </picture>
    </div>
    <div className="quest-card__content">
      <div className="quest-card__info-wrapper">
        <Link className="quest-card__link" to={`${AppRoute.Quest}/${id}`}>
          {title}
        </Link>
      </div>
      <ul className="tags quest-card__tags">
        <li className="tags__item">
          <svg width={11} height={14} aria-hidden="true">
            <use xlinkHref="#icon-person" />
          </svg>
          {peopleMinMax[0]}–{peopleMinMax[1]}&nbsp;чел
        </li>
        <li className="tags__item">
          <svg width={14} height={14} aria-hidden="true">
            <use xlinkHref="#icon-level" />
          </svg>
          {LevelTranslations[level]}
        </li>
      </ul>
    </div>
  </div>
);
