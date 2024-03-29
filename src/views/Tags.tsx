import React, {useState} from 'react';
import {Layout} from '../components/Layout';
import {useTags} from "../hooks/useTags";
import {Icon} from "../components/Icon";
import styled from 'styled-components';
import {Link, useNavigate} from 'react-router-dom';
import {CategorySection} from "./Money/CategorySection";
import {Center} from "../components/Center";
import {Space} from "../components/Space";
import {Button} from "../components/Button";
import 'animation.scss';
import {messageBox} from "../components/MessageBox";

const TabList = styled.ul`
  margin-top: 62px;
  font-size: 16px;
  background: #fcfcfc;

  > li {
    border-bottom: 1px solid #e4e4e4;
    display: flex;
    align-items: center;

    .deleteIcon {
      height: 36px;
      width: 36px;
      fill: #dc0000;
      margin: 0px 10px;

    }

    > a {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-right: 10px;
      margin-left: auto;
      width: 100%;

      > div {
        display: flex;
        align-items: center;

      }

      .tagIcon {
        height: 50px;
        width: 50px;
        fill: #999;
        margin: 6px 20px 6px 0;
      }

      .right-arrow {
        height: 20px;
        width: 20px;
      }

      span {
        font-size: 16px;
        margin-left: -8px;
        color: #444;
      }
    }
  }
`


function Tags() {
  const {tags, setTags, deleteTag} = useTags()
  const [category, setCategory] = useState<'-' | '+'>('-');
  const SelectedTags = tags.filter(r => r.category === category && r.id > 0)
  const navigate = useNavigate();
  const addTag = () => {
    if (category === '+') {
      navigate('/tags/0');
    } else {
      navigate('/tags/-1')
    }
  }

  const deleteLabel = (tagId: number) => {
    const options = {
      title:'提示',
      content:'确认删除该标签？',
      ok() {
         deleteTag(tagId)
      },
      cancel() {}
    }
    messageBox(options)
  }


  return (
    <Layout>
      <CategorySection value={category}
                       onChange={value => setCategory(value)}/>
      <TabList>
        {SelectedTags.map(tag =>
          <li key={tag.id}>
            <Icon className="deleteIcon" name="删除" onClick={() => deleteLabel(tag.id)}/>
            <Link to={'/tags/' + tag.id}>
              <div>
                <Icon className="icon tagIcon" name={tag.icon}/>
                <span>{tag.name}</span>
              </div>
              <Icon className="icon right-arrow" name="right"/>
            </Link>
          </li>
        )}
      </TabList>
      <Center>
        <Space/>
        <Button className='addButton' onClick={addTag}>新增类别</Button>
        <Space/>
        <Space/>
        <Space/>
        <Space/>
        <Space/>
      </Center>
    </Layout>
  );
}

export {Tags};