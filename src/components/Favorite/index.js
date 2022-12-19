import FavoriteCard from '../FavoriteCard';
import PropTypes from 'prop-types';
import { StyledFavorites } from './Favorite.styled';
import AppContext from '../../context/AppContext';
import { useContext } from 'react';

const Favorite = ({ list }) => {
  const { mode } = useContext(AppContext);
  return (
    <StyledFavorites theme={mode}>
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

Favorite.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Favorite;
