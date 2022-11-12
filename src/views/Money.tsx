import React, {useState} from 'react';
import {Layout} from '../components/Layout';
import {Category} from './Money/Category';
import {NumberPad} from './Money/NumberPad';
import styled from 'styled-components';
import {InputTabs} from './Money/InputTabs';
import {OutputTabs} from './Money/OutputTabs';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

type CategoryType = '-' | '+'

const defaultFormData = {
  category: '-' as CategoryType,
  note:'',
};

function Money() {
  const [selected, setSelected] = useState(defaultFormData);
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj
    });
  };
  return (
    <MyLayout>
      <Category value={selected.category}
                onChange={category => onChange({category})}/>
      {selected.category === '-' ? <OutputTabs/> : <InputTabs/>}

      <NumberPad noteValue={selected.note}
      noteOnChange={note => onChange({note})}/>
    </MyLayout>
  );
}

export {Money};