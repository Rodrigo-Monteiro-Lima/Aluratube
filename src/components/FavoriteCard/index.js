const FavoriteCard = ({ favorite: { thumb, url, name } }) => {
  return (
    <a href={url}>
      <img src={thumb} />
      <span>{name}</span>
    </a>
  );
};

export default FavoriteCard;
