import { useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { AppRoute } from '../../const';
import { LevelFilterTypes, GenreFilterTypes } from '../../const';
import { useAppDispatch } from '../../hooks/useAppDispatch/useAppDispatch';
import { getFullOffer, getFullQuestLoadStatus } from '../../store/quests-process/selectors';
import { fetchFullQuest } from '../../store/api-actions';
import { useAppSelector } from '../../hooks/useAppSelector/useAppSelector';
import { LoadingScreen } from '../../components/loading-screen/loading-screen';

export const Quest = () => {
  const dispatch = useAppDispatch();
  const questId = useParams().id;
  const isFullQuestLoading = useAppSelector(getFullQuestLoadStatus);

  useLayoutEffect(() => {
    dispatch(fetchFullQuest({ id: questId }));
  }, [questId, dispatch]);

  const fullQuest = useAppSelector(getFullOffer);
  if (isFullQuestLoading || fullQuest === null) {
    return (
      <LoadingScreen />
    );
  }

  const { id, title, level, type, peopleMinMax, description, coverImg, coverImgWebp } = fullQuest;

  return (
    <div className="wrapper">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header />
      <main className="decorated-page quest-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source
              type="image/webp"
              srcSet={coverImgWebp}
            />
            <img
              src={coverImg}
              width={1366}
              height={768}
              alt={title}
            />
          </picture>
        </div>
        <div className="container container--size-l">
          <div className="quest-page__content">
            <h1 className="title title--size-l title--uppercase quest-page__title">
              {title}
            </h1>
            <p className="subtitle quest-page__subtitle">
              <span className="visually-hidden">Жанр:</span>{GenreFilterTypes[type]}
            </p>
            <ul className="tags tags--size-l quest-page__tags">
              <li className="tags__item">
                <svg width={11} height={14} aria-hidden="true">
                  <use xlinkHref="#icon-person" />
                </svg>
                {peopleMinMax[0]}–{peopleMinMax[1]} чел
              </li>
              <li className="tags__item">
                <svg width={14} height={14} aria-hidden="true">
                  <use xlinkHref="#icon-level" />
                </svg>
                {LevelFilterTypes[level]}
              </li>
            </ul>
            <p className="quest-page__description">
              {description}
            </p>
            <Link
              className="btn btn--accent btn--cta quest-page__btn"
              to={`${AppRoute.Quest}/${id}${AppRoute.Booking}`}
            >
              Забронировать
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
