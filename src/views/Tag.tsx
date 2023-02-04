import React, {useState} from "react";
import {useTags} from "../hooks/useTags";
import {useParams, useNavigate} from "react-router-dom";
import {Layout} from "../components/Layout";
import {Icon} from "../components/Icon";
import styled from "styled-components";
import {Center} from "../components/Center";
import {Input} from "../components/Input";
import {useIcons} from "../hooks/useIcons";
import {alertTip} from "../components/AlertTip";

type Params = {
  id: string
}

const TopBar = styled.div`
  z-index: 5;
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 14px;
  font-size: 18px;
  color: #313d9f;
  font-weight: 600;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  background: white;

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
  background: white;
  position: fixed;
  width: 100%;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;
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

const Gap = styled.div`
  height: 172px;
`

const SelectIcon = styled.div`
  margin-top: 190px;

  > .selectIcon {
    position: fixed;
    width: 100%;
    font-size: 16px;
    background: #eeeeee;
    padding: 8px 18px;
    color: #444444;
  }

  ul {
    grid-row-gap: 10px;
  }
`

const TagsWrapper = styled.div`
  flex-grow: 1;
  margin-bottom: 60px;
  ul {
    padding-top: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-row-gap: 12px;

    > li {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #444;

      > .icon {
        height: 50px;
        width: 50px;
        fill: #999;
        margin-bottom: 12px;
      }

      > .edit-icon {
        fill: #303E9F;
      }

      &.selected {
        color: #303E9F;

        > .icon {
          fill: #303E9F;
        }
      }
    }
  }
`
let tagName = '';
let iconName = ''
const Tag: React.FC = (props) => {
  const navigate = useNavigate();
  const onClickBack = () => {
    navigate(-1);
  }
  let {id: idString} = useParams<Params>();
  const {tags, findTag, updateTag, addTag} = useTags()
  const {icons, findIcon} = useIcons();
  const tag = findTag(parseInt(idString as string))
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
      tagName = icon.name;
      updateTag(tag.id, {name: tagName , icon:iconName, category: tag.category})
    }
  }
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateTag(tag.id, {name: e.target.value, icon: tag.icon, category: tag.category})
    tagName = e.target.value;
  }
  const save = () => {
    // 新增类别
    if (tag.id <= 0) {
      addTag({name: tagName, icon: iconName, category: tag.category})
    }
    alertTip("保存成功",'success')
    navigate(-1);
  }
  type CategoryType = '-' | '+'
  const tagContent = (tag: { id: number, name: string, icon: string, category: CategoryType }) => (
    <div>
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
    </div>
  )

  return (
    <Layout>
      {tag ? tagContent(tag) : <Gap/>}
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