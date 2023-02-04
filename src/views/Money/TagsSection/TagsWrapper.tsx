import styled from 'styled-components';

const TagsWrapper = styled.div`
  margin-top: 60px;
  margin-bottom: 320px;
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
        fill: #999;
        margin-bottom: 12px;
      }

      > .edit-icon {
        fill: #303E9F;
      }

      &.selected {
        color: #303E9F;

        > .icon {
          fill: #303E9F;
        }
      }
    }
  }
`

export {TagsWrapper};