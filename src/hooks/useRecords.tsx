import {useState, useEffect} from 'react'
import {useUpdate} from "./useUpdate";


export type RecordItem = {
  tagIds: number[]
  note: string
  category: '+' | '-'
  amount: number
  createdAt: string
}

type NewRecordItem = Omit<RecordItem, 'createdAt'>;

export const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([]);
  useEffect(() => {
    setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'))
  }, [])
  const addRecord = (newRecord: NewRecordItem) => {
    if(newRecord.amount <= 0){
      return alert('请输入金额')
      return false
    }
    if(newRecord.tagIds.length === 0){
      return alert('请选择标签')
      return false
    }
    const record = {...newRecord, createdAt: (new Date()).toISOString()}
    setRecords([...records, record])
    return true
  }

  useUpdate(() => {
    window.localStorage.setItem('records', JSON.stringify(records))
  }, [records])


  return {records, addRecord}
}