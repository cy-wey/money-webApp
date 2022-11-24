import React, {useState} from 'react';
import {Layout} from '../components/Layout';
import {CategorySection} from './Money/CategorySection';
import {NumberPadSection} from './Money/NumberPadSection';
import styled from 'styled-components';
import {TagsSection} from "./Money/TagsSection";

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

type CategoryType = '-' | '+'

const defaultFormData = {
  category: '-' as CategoryType,
  note: '',
  amount: 0,
  tagIds: [] as number[],
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
      {selected.tagIds} {selected.category} {selected.amount} {selected.note}
      <CategorySection value={selected.category}
                       onChange={category => onChange({category})}/>
      <TagsSection selected={selected.tagIds}
                   category={selected.category}
                   onChange={tagIds => onChange({tagIds})}
      />

      <NumberPadSection noteValue={selected.note}
                        noteOnChange={note => onChange({note})
                        }
                        amountValue={selected.amount}
                        amountOnChange={amount => onChange({amount})}
      />
    </MyLayout>
  );
}

export {Money};