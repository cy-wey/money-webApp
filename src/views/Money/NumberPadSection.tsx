import React, {ChangeEventHandler, useState} from "react";
import {generateOutput} from "./NumberPadSection/generateOutput";
import {Wrapper} from "./NumberPadSection/Wrapper";

type Props = {
  noteValue: string;
  noteOnChange: (value: string) => void;
  amountValue: number;
  amountOnChange: (value: number) => void;
  onOK?: () => void;
}


const NumberPadSection: React.FC<Props> = (props) => {
  const note = props.noteValue;
  const noteOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    props.noteOnChange(e.target.value)
  }
  const amount = props.amountValue.toString()
  const [output, _setOutput] = useState(amount);
  const setOutput = (output: string) => {
    let newOutput: string
    if (output.length > 15) {
      newOutput = output.slice(0, 15)
    } else if (output.length === 0) {
      newOutput = '0';
    } else {
      newOutput = output;
    }
    _setOutput(newOutput)
    props.amountOnChange(parseFloat(newOutput))
  }
  const onClickButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if (text === null) {
      return;
    }
    if (text === '完成') {
      if (props.onOK) {
        props.onOK();
        _setOutput('')
      }
      return;
    }
    if ('0123456789.'.split('').concat(['删除', '清空']).indexOf(text) >= 0) {
      setOutput(generateOutput(text, output));
    }
  }
  return (
    <Wrapper>
      <div className="title">
        <input type="text" placeholder="输入备注..." value={note} onChange={noteOnChange}></input>
        <span>{amount}</span>
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
export {NumberPadSection};