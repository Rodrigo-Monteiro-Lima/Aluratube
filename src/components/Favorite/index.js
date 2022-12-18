import FavoriteCard from '../FavoriteCard';
import { StyledFavorites } from './Favorite.styled';

const Favorite = ({ list }) => {
  return (
    <StyledFavorites>
      <section>
        <h2>Aluratubers Favoritos</h2>
        <div>
          {list.map((item) => (
            <FavoriteCard key={item.name} favorite={item} />
          ))}
        </div>
      </section>
    </StyledFavorites>
  );
};

export default Favorite;
