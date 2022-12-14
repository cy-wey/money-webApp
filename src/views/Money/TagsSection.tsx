import {Icon} from '../../components/Icon';
import React from 'react';
import {TagsWrapper} from "./TagsSection/TagsWrapper";
import {useTags} from "../../hooks/useTags";
import {useNavigate} from 'react-router-dom';
type Props = {
  selected: number[];
  onChange: (selected: number[]) => void;
  category: '-' | '+';
}
const TagsSection: React.FC<Props> = (props) => {
  const {tags} = useTags()
  const SelectedTags = tags.filter(r => r.category === props.category && r.id > 0)
  const selectedTagIds = props.selected;
  const getClass = (tagId: number) => selectedTagIds.indexOf(tagId) >= 0 ? 'selected' : ''
  const navigate = useNavigate();
  const edit = () => {
    navigate('/tags')
  }
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
        <li>
          <Icon className="edit-icon " name='设置' onClick={edit}/>
          <span>自定义</span>
        </li>
      </ul>
    </TagsWrapper>
  );
};

export {TagsSection};