import styled from 'styled-components';
import {Icon} from '../../components/Icon';

const Wrapper = styled.div`
  margin-top: 10px;
  flex-grow: 1;

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-row-gap: 26px;

    > li {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #444;

      > .icon {
        height: 50px;
        width: 50px;
        fill: #ddd;
        margin-bottom: 12px;
      }

      &.selected {
        color: #303E9F;

        > .icon {
          fill: #303E9F;
        }
      }
    }
  }
`;

const OutputTabs = () => {
  return (
    <Wrapper>
      <ul>
        <li className="selected">
          <Icon className="icon " name="餐饮"/>
          <span>餐饮</span>
        </li>
        <li>
          <Icon className="icon" name="水果"/>
          <span>水果</span>
        </li>
        <li>
          <Icon className="icon" name="餐饮"/>
          <span>餐饮</span>
        </li>
        <li>
          <Icon className="icon" name="餐饮"/>
          <span>餐饮</span>
        </li>
        <li>
          <Icon className="icon" name="餐饮"/>
          <span>餐饮</span>
        </li>
        <li>
          <Icon className="icon" name="餐饮"/>
          <span>餐饮</span>
        </li>
        <li>
          <Icon className="icon" name="餐饮"/>
          <span>餐饮</span>
        </li>
      </ul>
    </Wrapper>
  );
};

export {OutputTabs};