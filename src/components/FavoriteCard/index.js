import PropTypes from 'prop-types';

const FavoriteCard = ({ favorite: { thumb, url, name } }) => {
  return (
    <a href={url}>
      <img src={thumb} />
      <span>{name}</span>
    </a>
  );
};

FavoriteCard.propTypes = {
  favorite: PropTypes.shape({
    thumb: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default FavoriteCard;
