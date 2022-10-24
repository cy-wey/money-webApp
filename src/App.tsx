import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link, Navigate
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/money">记账</Link>
            </li>
            <li>
              <Link to="/tags">标签</Link>
            </li>
            <li>
              <Link to="/statistics">统计</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/money" element={<Money/>}/>
          <Route path="/tags" element={<Tabs/>}/>
          <Route path="/statistics" element={<Statistics/>}/>
          <Route path="/*" element={<NoMatch/>}/>
          <Route path="/" element={<Navigate to="/money"/>}/>
        </Routes>
      </div>
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
  return <h1>页面不存在</h1>
}

export default App;
