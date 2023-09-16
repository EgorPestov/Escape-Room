import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { FilterForm } from '../../components/filter-form/filter-form';
import { QuestsList } from '../../components/quests-list/quests-list';
import { useAppDispatch } from '../../hooks/useAppDispatch/useAppDispatch';
import { filterQuests, setActiveFilterByGenreType, setActiveFilterByLevelType, setActivePage } from '../../store/quests-process/quests-process';
import { useAppSelector } from '../../hooks/useAppSelector/useAppSelector';
import { getQuests } from '../../store/quests-process/selectors';
import { AppPage } from '../../const';

export const Main = () => {
  const dispatch = useAppDispatch();
  const quests = useAppSelector(getQuests);
  useEffect(() => {
    dispatch(setActiveFilterByGenreType('all-quests'));
    dispatch(setActiveFilterByLevelType('all'));
    dispatch(setActivePage(AppPage.Main));
    dispatch(filterQuests());
  }, [dispatch]);


  return (
    <div className="wrapper">
      <Helmet>
        <title>Escape Room</title>
      </Helmet>
      <Header />
      <main className="page-content">
        <div className="container">
          <div className="page-content__title-wrapper">
            <h1 className="subtitle page-content__subtitle">
              квесты в Санкт-Петербурге
            </h1>
            <h2 className="title title--size-m page-content__title">
              Выберите тематику
            </h2>
          </div>
          <FilterForm />
          <h2 className="title visually-hidden">Выберите квест</h2>
          <QuestsList />
          <h1 className={quests.length === 0 ? '' : 'visually-hidden'}>Квестов нет, но вы держитесь</h1>
        </div>
      </main>
      <Footer />
    </div>
  );
};
