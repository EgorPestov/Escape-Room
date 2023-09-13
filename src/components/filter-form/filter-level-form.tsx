import { LevelFilterTypeKeys } from '../../const';
import { useAppDispatch } from '../../hooks/useAppDispatch/useAppDispatch';
import { filterQuests, setActiveFilterByLevelType } from '../../store/quests-process/quests-process';

export const FilterLevelForm = () => {
  const dispatch = useAppDispatch();

  const handleClick = (item: LevelFilterTypeKeys) => {
    dispatch(setActiveFilterByLevelType(item));
    dispatch(filterQuests());
  };

  return (
    <fieldset className="filter__section">
      <legend className="visually-hidden">Сложность</legend>
      <ul className="filter__list">
        <li className="filter__item" onClick={() => handleClick('all')}>
          <input type="radio" name="level" id="any" defaultChecked />
          <label className="filter__label" htmlFor="any">
            <span className="filter__label-text">Любой</span>
          </label>
        </li>
        <li className="filter__item" onClick={() => handleClick('easy')}>
          <input type="radio" name="level" id="easy" />
          <label className="filter__label" htmlFor="easy">
            <span className="filter__label-text">Лёгкий</span>
          </label>
        </li>
        <li className="filter__item" onClick={() => handleClick('medium')}>
          <input type="radio" name="level" id="middle" />
          <label className="filter__label" htmlFor="middle">
            <span className="filter__label-text">Средний</span>
          </label>
        </li>
        <li className="filter__item" onClick={() => handleClick('hard')}>
          <input type="radio" name="level" id="hard" />
          <label className="filter__label" htmlFor="hard">
            <span className="filter__label-text">Сложный</span>
          </label>
        </li>
      </ul>
    </fieldset>
  );
};
