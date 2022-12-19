import { useContext } from 'react';
import { CSSReset } from '../components/CSSReset.styled';
import RegisterVideo from '../components/RegisterVideo';
import AppContext from '../context/AppContext';
import AppProvider from '../context/AppProvider';

function ProviderWrapper({ children }) {
  return <AppProvider>{children}</AppProvider>;
}

function MyApp({ Component, pageProps }) {
  const { mode } = useContext(AppContext);
  return (
    <>
      <CSSReset />
      <Component {...pageProps} />
      <RegisterVideo theme={mode} />
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
