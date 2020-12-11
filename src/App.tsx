import React from 'react';
import { NewsProvider } from './contexts/NewsContext';
import { SettingProvider } from './contexts/SettingContext';
import SettingModal from './components/SettingModal';
import AppLayout from './layouts/AppLayout';

const App = (): JSX.Element => (
  <>
    <NewsProvider>
      <SettingProvider>
        <AppLayout />
        <SettingModal />
      </SettingProvider>
    </NewsProvider>
  </>
);

export default App;
