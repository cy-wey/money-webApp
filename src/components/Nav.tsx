import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import {Icon} from './Icon';


const Wrapper = styled.nav`
  width: 100%;
  background: #FCFCFC;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  line-height: 12px;
  z-index: 100;
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
            fill: #303E9F;
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
          <Icon name="tag"/>
            标签
          </NavLink>
        </li>
        <li>
          <NavLink to="/money" className={({isActive}) =>
            isActive ? activeClassName : undefined
          }>
            <Icon name="money"/>
            记账
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" className={({isActive}) =>
            isActive ? activeClassName : undefined
          }>
            <Icon name="statistics"/>
            统计
          </NavLink>
        </li>
      </ul>
    </Wrapper>
  );
};

export {Nav};