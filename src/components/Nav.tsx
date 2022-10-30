import {NavLink} from 'react-router-dom';
import styled from "styled-components"
require('icons/money.svg');
require('icons/tag.svg');
require('icons/statistics.svg')
const Wrapper = styled.nav`
  width: 100%;
  background: #FCFCFC;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  > ul {
    height: 60px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
  }
`


const Nav = () => {
  return (
    <Wrapper>
      <ul>
        <li>
          <NavLink to="/money">
            <svg>
              <use xlinkHref={'#money.svg'}/>
            </svg>
            记账</NavLink>
        </li>
        <li>
          <NavLink to="/tags">标签</NavLink>
        </li>
        <li>
          <NavLink to="/statistics">统计</NavLink>
        </li>
      </ul>
    </Wrapper>
  )
}

export {Nav}