import React from 'react';
import {Layout} from '../components/Layout';
import {Category} from './Money/Category';
import {Tabs} from './Money/Tabs';

function Money() {
  return (
    <Layout>
      <Category/>
      <Tabs/>
    </Layout>
  )
}

export {Money};