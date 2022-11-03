import styled from 'styled-components';
import {useState} from 'react';

const Wrapper = styled.div`
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);

  > ul {
    display: flex;
    justify-content: center;

    > li {
      width: 74px;
      text-align: center;
      padding: 16px 0;
      position: relative;
      &.selected {
        color: #303E9F;
      }
      &.selected::after {
        content: '';
        display: block;
        height: 2px;
        background: #303E9F;
        width: 100%;
        position: absolute;
        bottom: 2px;
        left: 0;
      }
    }
  }
`;

type Props = {
  value: '-' | '+';
  onChange: (value: '-' | '+') => void
}

const Category: React.FC<Props> = (props) => {
  const categoryMap = {'-': '支出', '+': '收入'};
  type Keys = keyof typeof categoryMap
  const [categorylist] = useState<Keys[]>(['-', '+']);
  const category = props.value;
  return (
    <Wrapper>
      <ul>
        {categorylist.map(c =>
          <li key={c} className={category === c ? 'selected' : ''}
              onClick={() => {props.onChange(c);}}>{categoryMap[c]}</li>
        )}
      </ul>
    </Wrapper>
  );
};

export {Category};