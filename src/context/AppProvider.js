import { useState, useMemo, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [search, setSearch] = useState('');
  const [isDark, setIsDark] = useState(false);
  const theme = {
    light: {
      backgroundBase: '#f9f9f9',
      backgroundLevel1: '#ffffff',
      backgroundLevel2: '#f0f0f0',
      borderBase: '#e5e5e5',
      textColorBase: '#222222',
    },
    dark: {
      backgroundBase: '#181818',
      backgroundLevel1: '#202020',
      backgroundLevel2: '#313131',
      borderBase: '#383838',
      textColorBase: '#ffffff',
    },
  };

  const [mode, setMode] = useState(theme['light']);

  useLayoutEffect(() => {
    if (localStorage.getItem('theme') === null) {
      localStorage.setItem('theme', JSON.stringify(theme['light']));
    }
    const selectedTheme = JSON.parse(localStorage.getItem('theme'));
    const dark = selectedTheme.backgroundBase === theme['dark'].backgroundBase;
    setIsDark(dark);
    setMode(selectedTheme);
  }, []);

  const handleTheme = () => {
    const newTheme =
      mode.backgroundBase === theme['light'].backgroundBase
        ? theme['dark']
        : theme['light'];
    setMode(newTheme);
    localStorage.setItem('theme', JSON.stringify(newTheme));
    setIsDark((prev) => !prev);
  };
  const values = useMemo(
    () => ({ search, setSearch, theme, mode, handleTheme, isDark }),
    [search, mode, isDark]
  );

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

AppProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AppProvider;
