import styled from 'styled-components';
import {Icon} from '../../components/Icon';
import React, {useState} from 'react';
import {TabsWrapper} from "./Tags/TabsWrapper";
import {useTags} from "../../hooks/useTags";

type Props = {
  selected: number[];
  onChange: (selected: number[]) => void;
}

const OutputTabs: React.FC<Props> = (props) => {
  const {tags, setTags} = useTags()
  const getClass = (tagId: number) => selectedTagIds.indexOf(tagId) >= 0 ? 'selected' : ''
  const selectedTagIds = props.selected;
  const onToggleTag = (tagId: number) => {
    const index = selectedTagIds.indexOf(tagId);
    if (index >= 0) {
      props.onChange(selectedTagIds.filter(t => t !== tagId));
    } else {
      props.onChange([tagId])
    }
  }
  return (
    <TabsWrapper>
      <ul>
        {tags.map(tag =>
          <li key={tag.id} onClick={() => onToggleTag(tag.id)} className={getClass(tag.id)}>
            <Icon className="icon " name={tag.name}/>
            <span>{tag.name}</span>
          </li>
        )}
      </ul>
    </TabsWrapper>
  );
};

export {OutputTabs};