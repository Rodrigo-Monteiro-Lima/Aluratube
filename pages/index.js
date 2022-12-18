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
`;
const Header = () => {
  return (
    <StyledHeader>
      <img src="" alt="banner" />
      <img src={config.github} alt="profile pic" />
      {config.name}
      {config.job}
    </StyledHeader>
  )
}

const Timeline = () => {
  return (
    <div>Timeline</div>
  )
}