import { useState, useMemo, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';
import { createClient } from '@supabase/supabase-js';

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

  const PROJECT_URL = 'https://tmwvcynbcqecplowdhhy.supabase.co';
  const PUBLIC_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRtd3ZjeW5iY3FlY3Bsb3dkaGh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzE0ODYzMTMsImV4cCI6MTk4NzA2MjMxM30.cKfQMh1ClORopagoR3LmzKS2Syw84O5RpMn_60DBuPc';
  const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

  const values = useMemo(
    () => ({ search, setSearch, theme, mode, handleTheme, isDark, supabase }),
    [search, mode, isDark]
  );

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

AppProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AppProvider;
