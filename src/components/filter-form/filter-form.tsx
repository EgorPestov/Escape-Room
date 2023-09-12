import { FilterGenreForm } from './filter-genre-form';
import { FilterLevelForm } from './filter-level-form';

export const FilterForm = () => (
  <div className="page-content__item">
    <form className="filter" action="#" method="get">
      <FilterGenreForm />
      <FilterLevelForm />
    </form>
  </div>
);
