import styled from 'styled-components';

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

      &.selected::after {
        color: #303E9F;
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

const Category = () => {
  return (
    <Wrapper>
      <ul>
        <li className="selected">支出</li>
        <li>收入</li>
      </ul>
    </Wrapper>
  );
};

export {Category};