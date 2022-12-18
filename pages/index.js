import config from '../config.json';
import { CSSReset } from '../src/components/CSSReset.styled';
import Menu from '../src/components/Menu';
import Header from '../src/components/Header';
import Timeline from '../src/components/Timeline';
import Favorite from '../src/components/Favorite';

function HomePage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
      <CSSReset />
      <Menu />
      <Header config={config} />
      <Timeline playlists={config.playlists} />
      <Favorite list={config.favorites} />
    </div>
  );
}

export default HomePage;
