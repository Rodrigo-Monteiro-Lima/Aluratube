import config from '../../config.json';
import Menu from '../components/Menu';
import Header from '../components/Header';
import Timeline from '../components/Timeline';
import Favorite from '../components/Favorite';
import AppProvider from '../context/AppProvider';

function HomePage() {
  return (
    <AppProvider>
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <Menu />
        <Header config={config} />
        <Timeline playlists={config.playlists} />
        <Favorite list={config.favorites} />
      </div>
    </AppProvider>
  );
}

export default HomePage;
