import styled from 'styled-components';
import {Icon} from '../../components/Icon';
import React, {useState} from 'react';

const Wrapper = styled.div`
  margin-top: 10px;
  flex-grow: 1;

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-row-gap: 26px;

    > li {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #444;

      > .icon {
        height: 50px;
        width: 50px;
        fill: #ddd;
        margin-bottom: 12px;
      }

      &.selected {
        color: #303E9F;

        > .icon {
          fill: #303E9F;
        }
      }
    }
  }
`;

type Props = {
    selected: string[];
    onChange: (selected: string[]) => void;
}

const OutputTabs: React.FC<Props> = (props) => {
    const [tags, setTags] = useState<string[]>(['餐饮', '房租','水电','交通'])
    const getClass = (tag:string) => selectedTags.indexOf(tag) >= 0 ? 'selected' : ''
    const selectedTags = props.selected;
    const onToggleTag = (tags: string) => {
        const index = selectedTags.indexOf(tags);
        if (index >= 0) {
            props.onChange(selectedTags.filter(t => t !== tags));
        } else {
            props.onChange([tags])
        }
    }
    return (
        <Wrapper>
            <ul>
                {tags.map(tag =>
                    <li key={tag} onClick={() => onToggleTag(tag)} className={getClass(tag)}>
                        <Icon className="icon " name={tag}/>
                        <span>{tag}</span>
                    </li>
                )}

            </ul>
        </Wrapper>
    );
};

export {OutputTabs};