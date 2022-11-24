import React, {useState} from "react";
import {useTags} from "../hooks/useTags";
import {useParams, useNavigate} from "react-router-dom";
import {Layout} from "../components/Layout";
import {Icon} from "../components/Icon";
import styled from "styled-components";
import {Center} from "../components/Center";
import {Input} from "../components/Input";
import {TagsSection} from "./Money/TagsSection";
import {TagsWrapper} from "./Money/TagsSection/TagsWrapper";

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
    height: 52px;
    width: 52px;
    fill: #999;
  }

  input {
    margin-top: 16px;
    text-align: center;
    border-bottom: 2px solid #747474;
    width: 100px;
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
const Tag: React.FC = (props) => {
  const {findTag} = useTags()
  const navigate = useNavigate();
  const onClickBack = () => {
    navigate(-1)
  }
  let {id} = useParams<Params>();
  const tag = findTag(parseInt(id as string))
  const {tags} = useTags()
  const [selectedTagIds, setSelectedTags] = useState<number[]>([]);
  const getClass = (tagId:number) => selectedTagIds.indexOf(tagId) >= 0 ? 'selected' : ''
  const onToggleTag = (tagId: number) => {
    const index = selectedTagIds.indexOf(tagId);
    if (index >= 0) {
      setSelectedTags(selectedTagIds.filter(t => t !== tagId));
    } else {
      setSelectedTags([tagId])
    }
  }
  return (
    <Layout>
      <TopBar>
        <Icon name="arrow-left" onClick={onClickBack}/>
        <span className='title'>编辑{tag.category === '-' ? '支出' : '收入'}类别</span>
        <span>保存</span>
      </TopBar>
      <Content>
        <Center>
          <Icon name={tag.icon}/>
          <Input label="" type="text" placeholder="标签名" value={tag.name}
                 onChange={(e) => {
                 }}
          />
        </Center>
      </Content>
      <SelectIcon>
        <div className="selectIcon">选择图标</div>
        <TagsWrapper>
          <ul>
            {tags.map(icon =>
              <li key={icon.id}onClick={() => onToggleTag(icon.id)} className={getClass(icon.id)}>
                <Icon name={icon.icon}></Icon>
              </li>)}

          </ul>
        </TagsWrapper>
      </SelectIcon>

    </Layout>
  )
}

export {Tag}