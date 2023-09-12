import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AppRoute } from '../../const';

export const NotFound = () => (
  <div data-testid="not-found-page">
    <Helmet>
      <title>404: Not found</title>
    </Helmet>
    <h1>
      404.
      <br />
      <small>Page not found</small>
    </h1>
    <Link to={AppRoute.Root}>Go to main page</Link>
  </div>
);
