import { GenreFilterTypeKeys } from '../../const';
import { useAppDispatch } from '../../hooks/useAppDispatch/useAppDispatch';
import { filterQuests, setActiveFilterByGenreType } from '../../store/quests-process/quests-process';


export const FilterGenreForm = () => {
  const dispatch = useAppDispatch();

  const handleClick = (item: GenreFilterTypeKeys) => {
    dispatch(setActiveFilterByGenreType(item));
    dispatch(filterQuests());
  };

  return (
    <fieldset className="filter__section">
      <legend className="visually-hidden">Тематика</legend>
      <ul className="filter__list">
        <li className="filter__item">
          <input type="radio" name="type" id="all" onClick={() => handleClick('all-quests')} defaultChecked />
          <label className="filter__label" htmlFor="all">
            <svg className="filter__icon" width={26} height={30} aria-hidden="true">
              <use xlinkHref="#icon-all-quests" />
            </svg>
            <span className="filter__label-text">Все квесты</span>
          </label>
        </li>
        <li className="filter__item">
          <input type="radio" name="type" id="adventure" onClick={() => handleClick('adventures')} />
          <label className="filter__label" htmlFor="adventure">
            <svg className="filter__icon" width={36} height={30} aria-hidden="true">
              <use xlinkHref="#icon-adventure" />
            </svg>
            <span className="filter__label-text">Приключения</span>
          </label>
        </li>
        <li className="filter__item">
          <input type="radio" name="type" id="horror" onClick={() => handleClick('horror')} />
          <label className="filter__label" htmlFor="horror">
            <svg className="filter__icon" width={30} height={30} aria-hidden="true">
              <use xlinkHref="#icon-horror" />
            </svg>
            <span className="filter__label-text">Ужасы</span>
          </label>
        </li>
        <li className="filter__item">
          <input type="radio" name="type" id="mystic" onClick={() => handleClick('mystic')} />
          <label className="filter__label" htmlFor="mystic">
            <svg className="filter__icon" width={30} height={30} aria-hidden="true">
              <use xlinkHref="#icon-mystic" />
            </svg>
            <span className="filter__label-text">Мистика</span>
          </label>
        </li>
        <li className="filter__item">
          <input type="radio" name="type" id="detective" onClick={() => handleClick('detective')} />
          <label className="filter__label" htmlFor="detective">
            <svg className="filter__icon" width={40} height={30} aria-hidden="true">
              <use xlinkHref="#icon-detective" />
            </svg>
            <span className="filter__label-text">Детектив</span>
          </label>
        </li>
        <li className="filter__item">
          <input type="radio" name="type" id="sciFi" onClick={() => handleClick('sci-fi')} />
          <label className="filter__label" htmlFor="sciFi">
            <svg className="filter__icon" width={28} height={30} aria-hidden="true">
              <use xlinkHref="#icon-sci-fi" />
            </svg>
            <span className="filter__label-text">Sci-fi</span>
          </label>
        </li>
      </ul>
    </fieldset>
  );
};
