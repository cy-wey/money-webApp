import styled from "styled-components";
import {Button} from "./Button";
import {useEffect, useState} from "react";
import ReactDOM, {createPortal} from "react-dom";
import {createRoot} from "react-dom/client";

const Warrper = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .4);

  > div {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translateX(-50%);
    min-width: 15em;
    max-width: 90%;
    background: white;
    border-radius: 6px;

    .title {
      margin: 10px 20px;
    }

    .content {
      margin: 10px 20px;
    }

    .footer {
      padding: 10px 16px;
      float: right;

      > button {
        padding: 10px 20px;
        margin-left: 8px;
        border: none;
        border-radius: 4px;
      }

      .ok {
        color: #fcfcfc;
        background: #303e9f;
      }

      .cancel {
        color: #000000E0;
        background: #fff;
        border: 1px solid #d9d9d9;
      }
    }
  }
`

export const MessageBox = (props: any) => {
  return (
    <Warrper>
      <div>
        <h3 className='title'>{props.title}</h3>
        <div className='content'>{props.content}</div>
        <div className='footer'>
          <button className="ok" onClick={props.ok}>确认</button>
          <button className='cancel' onClick={props.cancel}>取消</button>
        </div>
      </div>
    </Warrper>
  )
}

export const messageBox = (options: any) => {
  const onOK = () => {
    if (options.ok?.() !== false) {
      root.unmount()
    }
  }

  const onCancel = () => {
    root.unmount()
  }
  const {title, content, ok} = options
  const component = <MessageBox title={options.title} content={options.content} ok={onOK} cancel={onCancel}/>
  const div = document.createElement('div')
  document.body.append(div)
  const root = createRoot(div)
  root.render(component)
}
