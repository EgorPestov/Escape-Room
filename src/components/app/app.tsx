import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Main } from '../../pages/main/main';
import { NotFound } from '../../pages/404/404';
import { Login } from '../../pages/login/login';
import { Contacts } from '../../pages/contacts/contacts';
import { MyQuests } from '../../pages/my-quests/my-quests';
import { Quest } from '../../pages/quest/quest';
import { Booking } from '../../pages/booking/booking';


export const App = () => (
  <HelmetProvider>
    <Routes>
      <Route
        path={AppRoute.Root}
        element={<Main />}
      />
      <Route
        path={`${AppRoute.Quest}/:id`}
        element={<Quest />}
      />
      <Route
        path={`${AppRoute.Quest}/:id/${AppRoute.Booking}`}
        element={<Booking />}
      />
      <Route
        path={AppRoute.Login}
        element={<Login />}
      />
      <Route
        path={AppRoute.Contacts}
        element={<Contacts />}
      />
      <Route
        path={AppRoute.MyQuests}
        element={<MyQuests />}
      />
      <Route
        path='*'
        element={<NotFound />}
      />
    </Routes>
  </HelmetProvider>
);
