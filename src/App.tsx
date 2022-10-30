import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import {Nav} from './components/Nav';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`;

function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
          <Routes>
            <Route path="/money" element={<Money/>}/>
            <Route path="/tags" element={<Tabs/>}/>
            <Route path="/statistics" element={<Statistics/>}/>
            <Route path="/*" element={<NoMatch/>}/>
            <Route path="/" element={<Navigate to="/money"/>}/>
          </Routes>
        </Main>
        <Nav/>
      </Wrapper>
    </Router>
  );
}

function Money() {
  return <h2>记账页</h2>;
}

function Tabs() {
  return <h2>标签页</h2>;
}

function Statistics() {
  return <h2>统计页</h2>;
}

function NoMatch() {
  return <h1>页面不存在</h1>;
}

export default App;
