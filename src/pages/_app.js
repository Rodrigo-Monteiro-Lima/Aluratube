import { useContext, useState } from 'react';
import config from '../../config.json';
import { CSSReset } from '../components/CSSReset.styled';
import RegisterVideo from '../components/RegisterVideo';
import AppContext from '../context/AppContext';
import AppProvider from '../context/AppProvider';

function ProviderWrapper({ children }) {
  return <AppProvider>{children}</AppProvider>;
}

function MyApp({ Component, pageProps }) {
  const [playlists, setPlaylists] = useState(config.playlists);
  const { mode, supabase } = useContext(AppContext);
  return (
    <>
      <CSSReset />
      <Component
        {...pageProps}
        supabase={supabase}
        playlists={playlists}
        setPlaylists={setPlaylists}
      />
      <RegisterVideo
        theme={mode}
        supabase={supabase}
        setPlaylists={setPlaylists}
        playlists={playlists}
      />
    </>
  );
}

function _App(props) {
  return (
    <ProviderWrapper>
      <MyApp {...props} />
    </ProviderWrapper>
  );
}

export default _App;
