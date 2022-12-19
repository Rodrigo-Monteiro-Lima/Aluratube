import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { StyledSearch } from './Search.styled';

const Search = () => {
  const { search, setSearch, mode } = useContext(AppContext);
  return (
    <StyledSearch theme={mode}>
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
