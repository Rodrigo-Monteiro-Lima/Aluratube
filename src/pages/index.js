import config from '../../config.json';
import Menu from '../components/Menu';
import Header from '../components/Header';
import Timeline from '../components/Timeline';
import Favorite from '../components/Favorite';
import AppProvider from '../context/AppProvider';
import { useEffect, useState } from 'react';

function HomePage({ supabase }) {
  const [playlists, setPlaylists] = useState(config.playlists);
  const handleVideos = () => {
    supabase
      .from('video')
      .select('*')
      .then(({ data }) => {
        const newPlaylist = { ...playlists };
        data.forEach((video) => {
          const exist = newPlaylist[video.playlist].reduce((acc, curr) => {
            acc = curr.title == video.title;
            return acc;
          }, false);
          console.log(exist);
          if (!exist) {
            newPlaylist[video.playlist].push(video);
          }
        });
        setPlaylists(newPlaylist);
      });
  };
  useEffect(() => {
    handleVideos();
  }, []);

  return (
    <AppProvider>
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <Menu />
        <Header config={config} />
        <Timeline playlists={playlists} />
        <Favorite list={config.favorites} />
      </div>
    </AppProvider>
  );
}

export default HomePage;
