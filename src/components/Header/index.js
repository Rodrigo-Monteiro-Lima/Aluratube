import { StyledBanner, StyledHeader } from './Header.styled';
import PropTypes from 'prop-types';

const Header = ({ config: { bg, github, name, job } }) => {
  return (
    <StyledHeader>
      <StyledBanner bg={bg} />
      <section className="user-info">
        <img src={github} alt="profile pic" />
        <div>
          <h2>{name}</h2>
          <p>{job}</p>
        </div>
      </section>
    </StyledHeader>
  );
};

Header.propTypes = {
  config: PropTypes.shape({
    bg: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired,
  }).isRequired,
};

export default Header;
