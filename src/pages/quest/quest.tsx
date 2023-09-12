import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { AppRoute } from '../../const';
import { mockFullQuests } from '../../mocks';
import { LevelTranslations, TypeTranslations } from '../../const';


export const Quest = () => {
  const idContainer = useParams();
  const fullQuest = mockFullQuests.find((quest) => quest.id === idContainer.id);
  if (fullQuest === undefined) {
    return <Navigate to={AppRoute.NotFound} />;
  }
  const { title, previewImg, previewImgWebp, level, type, peopleMinMax, description, coverImg, coverImgWebp } = fullQuest;

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
              srcSet={`${previewImgWebp}, ${coverImgWebp} 2x`}
            />
            <img
              src={previewImg}
              srcSet={`${coverImg} 2x`}
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
              <span className="visually-hidden">Жанр:</span>{TypeTranslations[type]}
            </p>
            <ul className="tags tags--size-l quest-page__tags">
              <li className="tags__item">
                <svg width={11} height={14} aria-hidden="true">
                  <use xlinkHref="#icon-person" />
                </svg>
                {peopleMinMax[0]}–{peopleMinMax[1]}&nbsp;чел
              </li>
              <li className="tags__item">
                <svg width={14} height={14} aria-hidden="true">
                  <use xlinkHref="#icon-level" />
                </svg>
                {LevelTranslations[level]}
              </li>
            </ul>
            <p className="quest-page__description">
              {description}
            </p>
            <a
              className="btn btn--accent btn--cta quest-page__btn"
              href="booking.html"
            >
              Забронировать
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
