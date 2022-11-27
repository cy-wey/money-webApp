import React, {useState} from 'react';
import {Layout} from '../components/Layout';
import {useTags} from "../hooks/useTags";
import {RecordItem, useRecords} from "../hooks/useRecords";
import {Icon} from "../components/Icon";
import day from 'dayjs'
import styled from 'styled-components'

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  line-height: 20px;
  padding: 8px 0;
  border-bottom: 1px solid #e7e7e7;

  > div {
    display: flex;
    align-items: center;
  }

  .tag {
    margin-left: 10px;

    > span {
      margin-left: 10px;
      color: #444444;
    }
  }

  .icon {
    height: 50px;
    width: 50px;
    fill: #999;
  }

  .note {
    color: #888888;
    margin-left: 16px;
    margin-right: auto;
  }

  .inputAmount {
    color: #cc0001;
  }

  .outputAmount {
    color: #2e822c;
  }

  .amount {
    margin-right: 10px;
    font-weight: 600;
  }
`

const Header = styled.div`
  font-size: 14px;
  background: #eeeeee;
  padding: 8px 6px;
  color: #646464;
  display: flex;
  font-weight: 600;
  justify-content: space-between;

  .input {
    margin-right: 10px;
    margin-left: auto;
  }

  .output {
    margin-right: 10px;
  }
`

function Statistics() {
  const {getName, getIcon} = useTags();
  const [category, setCategory] = useState<'-' | '+'>('-');
  const {records} = useRecords()
  const hash: { [K: string]: RecordItem[] } = {}

  records.forEach(r => {
    const key = day(r.createdAt).format('YYYY/MM/DD')
    if (!(key in hash)) {
      hash[key] = []
    }
    hash[key].push(r)
  })

  const array = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) return 0;
    if (a[0] > b[0]) return -1;
    if (a[0] < b[0]) return 1;
    return 0;
  })


  const dailyCount = (records: RecordItem[], category: '+' | '-') => {
    let amountList = [] as number[]
    records.filter(f => f.category === category).map(r => {
      amountList.push(r.amount)
    })
    let sum = amountList.reduce((pre, cur) => {
      return pre + cur;
    }, 0)
    if (sum === 0) {
      return false
    }
    return sum
  }

  return (
    <Layout>
      <div></div>
      <hr/>
      {array.map(([date, records]) =>
        <div key={date}>
          <Header>
            <div>{date}</div>
            {dailyCount(records, '+') ? <div className='input'>收入: {dailyCount(records, '+')}</div> : ''}
            {dailyCount(records, '-') ? <div className='output'>支出: {dailyCount(records, '-')}</div> : ''}
          </Header>
          <div>
            {records.map(r => {
              return <Item key={r.createdAt}>
                {r.tagIds.map(tagId => {
                  return <div key={tagId} className='tag'>
                    <Icon name={getIcon(tagId)}></Icon>
                    <span>{getName(tagId)}</span>
                  </div>
                })}
                <div className='note'>{r.note}</div>
                <div className='amount'>
                  {
                    r.category === '-' ? <div className='outputAmount'>{'-' + r.amount}</div> :
                      <div className='inputAmount'>{'+' + r.amount}</div>
                  }
                </div>
              </Item>
            })}
          </div>
        </div>
      )}
    </Layout>

  );
}

export {Statistics};