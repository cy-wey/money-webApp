import styled from 'styled-components';
import React, {ChangeEventHandler, useState} from "react";

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
type Props = {
    noteValue: string;
    noteOnChange: (value: string) => void;
}


const NumberPad: React.FC<Props> = (props) => {

    const note = props.noteValue;
    const noteOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        props.noteOnChange(e.target.value)
    }

    const [output, _setOutput] = useState('0');
    const setOutput = (output: string) => {
        if (output.length > 16) {
            output = output.slice(0, 16)
        } else if (output.length === 0) {
            output = '0';
        }
        _setOutput(output)
    }
    const onClickButtonWrapper = (e: React.MouseEvent) => {
        const text = (e.target as HTMLButtonElement).textContent;
        if (text === null) {
            return
        }
        ;
        switch (text) {
            case '0':
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                if (output === '0') {
                    setOutput(text);
                } else {
                    setOutput(output + text)
                }
                break;
            case '.':
                if (output.indexOf('.') >= 0) {
                    return;
                }
                setOutput(output + '.')
                break;
            case '清空':
                setOutput('');
                break;
            case '删除':
                if (output.length === 1) {
                    setOutput('');
                } else {
                    setOutput(output.slice(0, -1))
                }
                break;
            case '完成':
                console.log('确认')
                break;


        }
    }
    return (
        <Wrapper>
            <div className="title">
                <input type="text" placeholder="输入备注..." value={note} onChange={noteOnChange}></input>
                <span>{output}</span>
            </div>
            <div className="buttonList clearfix" onClick={onClickButtonWrapper}>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>删除</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>清空</button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button className="OK">完成</button>
                <button className="zero">0</button>
                <button>.</button>
            </div>
        </Wrapper>
    )
}
export {NumberPad}