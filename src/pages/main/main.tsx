import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { FilterForm } from '../../components/filter-form/filter-form';
import { QuestsList } from '../../components/quests-list/quests-list';

export const Main = () => (
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
      </div>
    </main>
    <Footer />
  </div>
);
