import config from '../config.json'

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

const Header = () => {
  return (
    <div>
      <img src="" alt="banner" />
      <img src={config.github} alt="profile pic" />
      {config.name}
      {config.job}
    </div>
  )
}

const Timeline = () => {
  return (
    <div>Timeline</div>
  )
}