import React from "react";
import styled from 'styled-components'

const Label = styled.label`
  display: flex;
  align-items: center;
  
  > span {
    white-space: nowrap;
  }

  > input {
    display: flex;
    width: 100%;
    height: 44px;
    background: none;
    border: none;
    font-size: 16px;
  }
`


type Props = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>
const Input: React.FC<Props> = (props) => {
  const {label, children, ...rest} = props;
  return (
    <Label>
      <span>{props.label}</span>
      <input {...rest}/>
    </Label>
  )
}
export {Input}