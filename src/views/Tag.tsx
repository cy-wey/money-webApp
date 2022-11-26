import React, {useState} from "react";
import {useTags} from "../hooks/useTags";
import {useParams, useNavigate} from "react-router-dom";
import {Layout} from "../components/Layout";
import {Icon} from "../components/Icon";
import styled from "styled-components";
import {Center} from "../components/Center";
import {Input} from "../components/Input";
import {TagsWrapper} from "./Money/TagsSection/TagsWrapper";
import {useIcons} from "../hooks/useIcons";
import {createId} from "../lib/createId";

type Params = {
  id: string
}

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 14px;
  font-size: 18px;
  color: #313d9f;
  font-weight: 600;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);

  > .title {
    margin-left: -140px;
  }

  .icon {
    height: 18px;
    width: 18px;
    fill: #313d9f;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  .icon {
    height: 50px;
    width: 50px;
    fill: #999;
  }

  input {
    margin-top: 20px;
    text-align: center;
    border-bottom: 2px solid #747474;
    width: 100px;
  }

  input:focus {
    border-bottom: 2px solid #313d9f;
  }
`

const SelectIcon = styled.div`
  margin-top: 12px;

  > .selectIcon {
    font-size: 16px;
    background: #eeeeee;
    padding: 8px 18px;
    color: #444444;
  }

  ul {
    grid-row-gap: 10px;
  }
`
let tagName = '';
let iconName = ''
const Tag: React.FC = (props) => {
  const navigate = useNavigate();
  const onClickBack = () => {
    navigate(-1)
  }
  let {id} = useParams<Params>();
  const {tags, findTag, updateTag, addTag} = useTags()
  const {icons, setIcons, findIcon} = useIcons();
  const tag = findTag(parseInt(id as string))
  const [selectedTagIds, setSelectedTags] = useState<number[]>([]);
  const getClass = (tagId: number) => selectedTagIds.indexOf(tagId) >= 0 ? 'selected' : ''

  const onToggleTag = (tagId: number) => {
    const index = selectedTagIds.indexOf(tagId);
    if (index >= 0) {
      setSelectedTags(selectedTagIds.filter(t => t !== tagId));
    } else {
      setSelectedTags([tagId])
      const icon = findIcon(tagId)
      iconName = icon.name;
      console.log(iconName)
      updateTag(tag.id, {name: tag.name, icon: icon.name, category: tag.category})
    }
  }
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateTag(tag.id, {name: e.target.value, icon: tag.icon, category: tag.category})
    tagName = e.target.value;
  }
  console.log(tags)
  const save = () => {
    if(tag.id <= 0 ) {
      console.log('saved');
      console.log(tagName);
      console.log(iconName);
      addTag({name: tagName, icon: iconName, category: tag.category})
      //navigate(-1)
    }
  }

  return (
    <Layout>
      <TopBar>
        <Icon name="arrow-left" onClick={onClickBack}/>
        {
          tag.id <= 0 ?
            <span className='title'>新增{tag.category === '-' ? '支出' : '收入'}类别</span> :
            <span className='title'>编辑{tag.category === '-' ? '支出' : '收入'}类别</span>
        }
        <span onClick={save}>保存</span>
      </TopBar>
      <Content>
        <Center>
          <Icon name={tag.icon} onChange={() => {
            updateTag(tag.id, {name: tag.icon, icon: tag.icon, category: tag.category})
          }}/>
          <Input label="" type="text" placeholder="输入类别名称"
                 value={tag.name}
                 onChange={(e) => {
                   onChange(e)
                 }}
          />
        </Center>
      </Content>
      <SelectIcon>
        <div className="selectIcon">选择图标</div>
        <TagsWrapper>
          <ul>
            {icons.map(icon =>
              <li key={icon.id} onClick={() => onToggleTag(icon.id)} className={getClass(icon.id)}>
                <Icon name={icon.name}></Icon>
              </li>)}

          </ul>
        </TagsWrapper>
      </SelectIcon>

    </Layout>
  )
}

export {Tag}