import { useAppDispatch } from '../../hooks/useAppDispatch/useAppDispatch';
import { fetchQuests } from '../../store/api-actions';

export const ErrorScreen = () => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(fetchQuests());
  };

  return (
    <>
      <h1>Сервер недоступен</h1>
      <button
        onClick={handleClick}
        type="button"
      >
        Попробовать еще раз
      </button>
    </>
  );
};
