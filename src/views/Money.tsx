import React from 'react';
import {Layout} from '../components/Layout';
import {Category} from './Money/Category';
import {Tabs} from './Money/Tabs';
import {NumberPad} from './Money/NumberPad';
import styled from 'styled-components';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;


function Money() {
  return (
    <MyLayout>
      <Category/>
      <Tabs/>
      <NumberPad/>
    </MyLayout>
  );
}

export {Money};