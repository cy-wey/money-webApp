import {Icon} from '../../components/Icon';
import React, {useState} from 'react';
import {TabsWrapper} from "./Tags/TabsWrapper";

type Props = {
    selected: string[];
    onChange: (selected: string[]) => void;
}

const InputTabs: React.FC<Props> = (props) => {
    const [tags, setTags] = useState<string[]>(['工资', '理财','红包'])
    const getClass = (tag: string) => selectedTags.indexOf(tag) >= 0 ? 'selected' : ''
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
      <TabsWrapper>
          <ul>
              {tags.map(tag =>
                <li key={tag} onClick={() => onToggleTag(tag)} className={getClass(tag)}>
                    <Icon className="icon " name={tag}/>
                    <span>{tag}</span>
                </li>
              )}
          </ul>
      </TabsWrapper>
    );
};
export {InputTabs};