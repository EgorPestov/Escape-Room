import { memo } from 'react';
import { FilterGenreForm } from './filter-genre-form';
import { FilterLevelForm } from './filter-level-form';

const FilterFormComponent = () => (
  <div className="page-content__item">
    <form className="filter" action="#" method="get">
      <FilterGenreForm />
      <FilterLevelForm />
    </form>
  </div>
);

export const FilterForm = memo(FilterFormComponent);
