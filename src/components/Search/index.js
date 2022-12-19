import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { StyledSearch } from './Search.styled';

const Search = () => {
  const { search, setSearch } = useContext(AppContext);
  return (
    <StyledSearch>
      <input
        type="text"
        onChange={({ target }) => setSearch(target.value)}
        value={search}
      />
      <button>🔎</button>
    </StyledSearch>
  );
};

export default Search;
