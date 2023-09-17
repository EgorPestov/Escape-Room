import { LevelFilterNames, LevelFilterTypeKeys, LevelFilterTypes } from '../../const';
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
        {LevelFilterNames.map((item) => (
          <li key={item} className="filter__item">
            <input type="radio" name="level" id={item} onClick={() => handleClick(item)} defaultChecked={item === LevelFilterNames[0]} />
            <label className="filter__label" htmlFor={item}>
              <span className="filter__label-text">{LevelFilterTypes[item]}</span>
            </label>
          </li>
        ))}
      </ul>
    </fieldset>
  );
};
