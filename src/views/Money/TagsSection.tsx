import {Icon} from '../../components/Icon';
import React, {useState} from 'react';
import {TagsWrapper} from "./TagsSection/TagsWrapper";
import {useTags} from "../../hooks/useTags";

type Props = {
  selected: number[];
  onChange: (selected: number[]) => void;
  category: '-' | '+';
}

const TagsSection: React.FC<Props> = (props) => {
  const {tags, setTags,findTag} = useTags()
  const SelectedTags = tags.filter(r => r.category === props.category && r.id > 0)
  const selectedTagIds = props.selected;
  const getClass = (tagId: number) => selectedTagIds.indexOf(tagId) >= 0 ? 'selected' : ''
  const onToggleTag = (tagId: number) => {
    const index = selectedTagIds.indexOf(tagId);
    if (index >= 0) {
      props.onChange(selectedTagIds.filter(t => t !== tagId));
    } else {
      props.onChange([tagId])
    }
  }
  return (

    <TagsWrapper>
      <ul>
        {SelectedTags.map(tag =>
          <li key={tag.id} onClick={() => onToggleTag(tag.id)} className={getClass(tag.id)}>
            <Icon className="icon " name={tag.icon}/>
            <span>{tag.name}</span>
          </li>
        )}
      </ul>
    </TagsWrapper>
  );
};

export {TagsSection};