import React from 'react';

import RootNavigator from './src/RootNavigator/RootNavigator';

const App = props => {
  console.disableYellowBox = true
  return (
      <RootNavigator />
  )
};

export default App;