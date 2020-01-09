import React from 'react';
import { BaseCSS } from 'styled-bootstrap-grid';
import { Provider } from 'react-redux';

import GlobalStyle from './styles/GlobalStyle';
import UserFeedbackPage from './components/UserFeedbackPage';
import store from './store/store';


function App() {
  return (
    <>
      <Provider store={store}>
        <BaseCSS />
        <GlobalStyle />
        <UserFeedbackPage/>
      </Provider>
    </>
  );
}

export default App;
