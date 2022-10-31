import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

require('../icons/money.svg');
require('../icons/tag.svg');
require('../icons/statistics.svg');
const Wrapper = styled.nav`
  width: 100%;
  background: #FCFCFC;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  line-height: 12px;

  > ul {
    display: flex;

    > li {
      width: 33.333%;
      text-align: center;
      font-size: 12px;

      > a {
        padding: 10px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .icon {
          height: 20px;
          width: 20px;
          display: block;
          margin-bottom: 8px;
          fill: #444;
        }
        &.selected {
          color: #303E9F;
          
          .icon {
            fill: #fff;
            background: #303E9F;
            border-radius: 2px;
          }
        }
      }
    }
  }
`;

const Nav = () => {
  let activeClassName = 'selected';
  return (
    <Wrapper>
      <ul>
        <li>
          <NavLink to="/tags" className={({isActive}) =>
            isActive ? activeClassName : undefined
          }>
            <svg className="icon">
              <use xlinkHref={'#tag'}/>
            </svg>
            标签
          </NavLink>
        </li>
        <li>
          <NavLink to="/money" className={({isActive}) =>
            isActive ? activeClassName : undefined
          }>
            <svg className="icon">
              <use xlinkHref={'#money'}/>
            </svg>
            记账</NavLink>
        </li>
        <li>
          <NavLink to="/statistics" className={({isActive}) =>
            isActive ? activeClassName : undefined
          }>
            <svg className="icon">
              <use xlinkHref={'#statistics'}/>
            </svg>
            统计
          </NavLink>
        </li>
      </ul>
    </Wrapper>
  );
};

export {Nav};