import React, {useEffect} from 'react';
import MainPage from './view';
import {initializeData} from './core/services';

function App() {
  useEffect(() => {
    initializeData();
  });

  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;
