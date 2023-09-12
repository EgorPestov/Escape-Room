import { LevelSortTypeValues } from '../../const';
import { useAppDispatch } from '../../hooks/useAppDispatch/useAppDispatch';
import { sortQuestsByLevel } from '../../store/quests-process/quests-process';

export const FilterLevelForm = () => {
  const dispatch = useAppDispatch();

  const handleClick = (item: LevelSortTypeValues) => {
    dispatch(sortQuestsByLevel(item));
  };

  return (
    <fieldset className="filter__section">
      <legend className="visually-hidden">Сложность</legend>
      <ul className="filter__list">
        <li className="filter__item" onClick={() => handleClick('любой')}>
          <input type="radio" name="level" id="any" defaultChecked />
          <label className="filter__label" htmlFor="any">
            <span className="filter__label-text">Любой</span>
          </label>
        </li>
        <li className="filter__item" onClick={() => handleClick('лёгкий')}>
          <input type="radio" name="level" id="easy" />
          <label className="filter__label" htmlFor="easy">
            <span className="filter__label-text">Лёгкий</span>
          </label>
        </li>
        <li className="filter__item" onClick={() => handleClick('средний')}>
          <input type="radio" name="level" id="middle" />
          <label className="filter__label" htmlFor="middle">
            <span className="filter__label-text">Средний</span>
          </label>
        </li>
        <li className="filter__item" onClick={() => handleClick('сложный')}>
          <input type="radio" name="level" id="hard" />
          <label className="filter__label" htmlFor="hard">
            <span className="filter__label-text">Сложный</span>
          </label>
        </li>
      </ul>
    </fieldset>
  );
};
