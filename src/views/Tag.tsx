import React, {useState} from 'react';
import {Layout} from '../components/Layout';
import {useTags} from "../hooks/useTags";
import {Icon} from "../components/Icon";
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Category} from "./Money/Category";

const TabList = styled.ul`
  font-size: 16px;
  background: #fcfcfc;
  margin-top: 2px;
  
  > li {
    border-bottom: 1px solid #e4e4e4;
    > a {
      display: flex;
      align-items: center;
      justify-content: space-between;
      > div {
        display: flex;
        align-items: center;
      }
      .icon {
        height: 50px;
        width: 50px;
        fill: #ddd;
        margin: 6px 20px;
      }
      
      .right-arrow {
        height: 20px;
        width: 20px;
      }

      span {
        font-size: 16px;
        margin-left: -6px;
        color: #444;
      }
    }
  }

  
`

function Tab() {
  const {tags, setTags} = useTags()
  const [category, setCategory] = useState<'-' | '+'>('-');
  return (
    <Layout>
      <Category value={category}
                onChange={value => setCategory(value)}/>
      <TabList>
        {tags.map(tag =>
          <li key={tag}>
            <Link to={'tabs/'}>
              <div>
                <Icon className="icon " name={tag}/>
                <span>{tag}</span>
              </div>
              <Icon className="icon right-arrow" name="right"/>
            </Link>
          </li>
        )}
      </TabList>
    </Layout>
  );
}

export {Tab};