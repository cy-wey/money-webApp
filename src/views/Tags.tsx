import React, {useState} from 'react';
import {Layout} from '../components/Layout';
import {useTags} from "../hooks/useTags";
import {Icon} from "../components/Icon";
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {CategorySection} from "./Money/CategorySection";
import {Center} from "../components/Center";
import {Space} from "../components/Space";
import {Button} from "../components/Button";

const TabList = styled.ul`
  font-size: 16px;
  background: #fcfcfc;
  margin-top: 2px;
  
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
      > div {
        display: flex;
        align-items: center;
        min-width: 260px;
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
  const SelectedTags = tags.filter(r => r.category === category)
  return (
    <Layout>
      <CategorySection value={category}
                       onChange={value => setCategory(value)}/>
      <TabList>
        {SelectedTags.map(tag =>
          <li key={tag.id}>
            <Icon className="deleteIcon" name="删除" onClick={()=> deleteTag(tag.id)}/>
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
        <Space/>
        <Button>新增类别</Button>
      </Center>
    </Layout>
  );
}

export {Tags};