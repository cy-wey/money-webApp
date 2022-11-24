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
  note: '',
  amount: 0,
  tags: [] as string[],
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
      {selected.tags}  {selected.category} {selected.amount} {selected.note}
      <Category value={selected.category}
                onChange={category => onChange({category})}/>
      {selected.category === '-' ?
        <OutputTabs selected={selected.tags}
                    onChange={tags => onChange({tags})}
                    /> :
        <InputTabs selected={selected.tags}
                   onChange={tags => onChange({tags})}/>}

      <NumberPad noteValue={selected.note}
                 noteOnChange={note => onChange({note})
                 }
                 amountValue={selected.amount}
                 amountOnChange={amount => onChange({amount})}
      />
    </MyLayout>
  );
}

export {Money};