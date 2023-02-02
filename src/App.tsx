import React from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import styled from 'styled-components';
import {Money} from './views/Money';
import {NoMatch} from './views/NoMatch';
import {Tags} from './views/Tags';
import {Tag} from './views/Tag';
import {Statistics} from './views/Statistiics';
import {DataMatrix} from "./components/DataMatrix";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: calc(100vh - var(--vh-offset, 0px));
`;

const Dm = styled.div`
  @media(min-width: 800px) {

  }
 
`

function App() {
  return (
    <Router>
      <Wrapper>
        <Routes>
          <Route path="/money" element={<Money/>}/>
          <Route path="/tags" element={<Tags/>}/>
          <Route path="/tags/:id" element={<Tag/>}/>
          <Route path="/statistics" element={<Statistics/>}/>
          <Route path="/*" element={<NoMatch/>}/>
          <Route path="/" element={<Navigate to="/money"/>}/>
        </Routes>
      </Wrapper>
      <DataMatrix/>
    </Router>
  );
}

export default App;
