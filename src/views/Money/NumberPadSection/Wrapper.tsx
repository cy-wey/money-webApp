import styled from "styled-components";

const Wrapper = styled.div`
  .title {
    display: flex;
    align-items: center;
    border-top: 0.5px solid #e4e4e4;
  }

  input {
    width: 100%;
    outline: none;
    color: #9C9C9C;
    padding-left: 10px;
    height: 44px;
    border: 0.5px solid #E4E4E4;
  }

  span {
    height: 44px;
    line-height: 44px;
    border: 0.5px solid #E4E4E4;
    display: block;
    width: 100%;
    text-align: right;
    padding-right: 10px;
    color: #CC0001;
    font-size: 18px;
  }

  .buttonList {
    //border: 1px solid red;
  }

  button {
    float: left;
    width: 25%;
    height: 50px;
    border: 0.5px solid #E4E4E4;
    background: #FCFCFC;
    font-size: 16px;

    &.OK {
      float: right;
      height: 100px;
      background: #303E9F;
      color: white;
    }

    &.zero {
      float: left;
      width: 50%;
    }
  }

`

export {Wrapper}