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

const Title = styled.div`
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

const Header = styled.div`
  background: #303e9f;
  color: #ffffe6;
  display: flex;
  flex-direction: column;
  padding-top: 18px;
  padding-left: 18px;
  font-weight: 400;
  
  .bill {
    display: flex;
    .icon {
      fill: #ffffe6;
      height: 24px;
      width: 24px;
      margin-right: 32px;
    }
    .allBill {
      font-size: 20px;
      margin-bottom: 20px;
      font-weight: 500;
      margin-top: 4px;
    }
  }
  
  .output{
    margin-bottom: 20px;
    > div {
      display: flex;
    }
    .text {
      font-size: 14px;
      margin-bottom: 10px;
    }
    .symbol {
      font-size: 16px;
      margin-right: 10px;
      margin-top: 14px;
    }
    .amount {
      font-size: 30px;
      font-weight: 700;
    }
    
  }
  
  .input {
    display: flex;
    margin-bottom: 14px;
    > div {
      display: flex;
      margin-right: 52px;
    }
    .totalInput {
      font-size: 22px;
      margin-left: 10px;
      font-weight: 600;
    }
    .text {
      margin-top: 6px;
      font-size: 14px;
    }
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


  const calculateAmount = (records: RecordItem[], category: '+' | '-') => {
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
  let totalInput = calculateAmount(records, '+') as number || 0
  let totalOutput = calculateAmount(records, '-') as number || 0

  return (
    <Layout>
      <Header>
        <div className='bill'>
          <Icon name='账单'></Icon>
          <div className='allBill'>全部账单</div>
        </div>

        <div className='output'>
          <div className='text'>总计支出</div>
          <div>
            <div className='symbol'>￥</div>
            <div className='amount'>{totalOutput}</div>
          </div>

        </div>
        <div className='input'>
          <div>
            <div className='text'>总计收入</div>
            <div className='totalInput'>{totalInput}</div>
          </div>
          <div>
            <div className='text'>总计结余</div>
            <div className='totalInput'>{totalInput - totalOutput}</div>
          </div>
        </div>
      </Header>
      <hr/>
      {array.map(([date, records]) =>
        <div key={date}>
          <Title>
            <div>{date}</div>
            {calculateAmount(records, '+') ? <div className='input'>收入: {calculateAmount(records, '+')}</div> : ''}
            {calculateAmount(records, '-') ? <div className='output'>支出: {calculateAmount(records, '-')}</div> : ''}
          </Title>
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