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

const OutputTabs = () => {
    const [tags, setTags] = useState<string[]>(['餐饮', '房租','水电','交通'])
    const [selectedTag, setSelectedTag] = useState<string[]>([])
    const getClass = (tag:string) => selectedTag.indexOf(tag) >= 0 ? 'selected' : ''
    const onToggleTag = (tag: string) => {
        const index = selectedTag.indexOf(tag);
        if (index >= 0) {
            setSelectedTag(selectedTag.filter(t => t !== tag));
        } else {
            setSelectedTag([...selectedTag, tag])
        }
    }
    return (
        <Wrapper>
            <ul>
                {tags.map(tag =>
                    <li onClick={() => onToggleTag(tag)} className={getClass(tag)}>
                        <Icon className="icon " name={tag}/>
                        <span>{tag}</span>
                    </li>
                )}

            </ul>
        </Wrapper>
    );
};

export {OutputTabs};