import React from 'react';
import { BaseCSS } from 'styled-bootstrap-grid';
import GlobalStyle from './styles/GlobalStyle';
import UserFeedbackPage from './components/UserFeedbackPage';


function App() {
  return (
    <>
      <BaseCSS />
      <GlobalStyle />
      <UserFeedbackPage/>
    </>
  );
}

export default App;
