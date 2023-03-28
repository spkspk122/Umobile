import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';

//routes
import {RouteStack} from './src/routes';

const AppRoutes = () => {
  return <RouteStack />;
};

function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}

export default App;