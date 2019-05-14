import React from 'react';
import PropTypes from 'prop-types';

const MAX_RATING = 5;

const PlaceCard = ({offer, onTitleClick, onImageClick}) => {
  const {
    imageSrc,
    mark,
    price,
    inBookmarks,
    title,
    type,
    rating,
  } = offer;

  const bookMarkBtnClasses = [`place-card__bookmark-button`, `button`];

  if (inBookmarks) {
    bookMarkBtnClasses.push(`place-card__bookmark-button--active`);
  }

  const ratingWidth = Math.round(rating) * 100 / MAX_RATING;

  return <article className="cities__place-card place-card">
    {mark ? (
      <div className="place-card__mark">
        <span>{mark}</span>
      </div>
    ) : null}
    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href="#" onClick={onImageClick}>
        <img className="place-card__image" src={imageSrc} width="260" height="200" alt="Place image" />
      </a>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button className={bookMarkBtnClasses.join(` `)} type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark" />
          </svg>
          <span className="visually-hidden">{inBookmarks ? `In` : `To`} bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: `${ratingWidth}%`}} />
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <a href="#" onClick={onTitleClick}>{title}</a>
      </h2>
      <p className="place-card__type">{type}</p>
    </div>
  </article>;
};

PlaceCard.propTypes = {
  offer: PropTypes.shape({
    mark: PropTypes.string,
    imageSrc: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inBookmarks: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  onTitleClick: PropTypes.func.isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default PlaceCard;
