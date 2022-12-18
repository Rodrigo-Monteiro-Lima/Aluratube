import { StyledBanner, StyledHeader } from './Header.styled';

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

export default Header;
