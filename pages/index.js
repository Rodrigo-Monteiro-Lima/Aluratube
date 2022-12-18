import config from '../config.json'
import styled from 'styled-components';

function HomePage() {
  return (
  <div>
    <Menu />
    <Header />
    <Timeline />
  </div>
  )
}

export default HomePage;


const Menu = () => {
  return (
    <div>Menu</div>
  )
}

const StyledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 1rem 2rem;
    gap: 1rem;
  }
`;
const Header = () => {
  return (
    <StyledHeader>
      {/* <img src="" alt="banner" /> */}
      <section className="user-info">
        <img src={config.github} alt="profile pic" />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  )
}

const Timeline = () => {
  return (
    <div>Timeline</div>
  )
}