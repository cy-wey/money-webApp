import React, {useState} from 'react';
import {Layout} from '../components/Layout';
import {CategorySection} from './Money/CategorySection';
import {NumberPadSection} from './Money/NumberPadSection';
import styled from 'styled-components';
import {TagsSection} from "./Money/TagsSection";
import {useRecords} from "../hooks/useRecords";

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
  const {records, addRecord} = useRecords()
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj
    });
  };
  const submit = () => {
    if (addRecord(selected)) {
      addRecord(selected);
      alert('保存成功')
      setSelected({
        ...selected,
        amount: 0,
        tagIds: [] as number[],
      })
    }
  }
  return (
    <MyLayout>
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
                        onOK={submit}
      />

    </MyLayout>
  );
}

export {Money};