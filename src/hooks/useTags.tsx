import {useState} from 'react'
import {createId} from "../lib/createId";

type CategoryType = '-' | '+'

const defaultTags = [
  {id:createId(), name: '餐饮', icon: '餐饮', category: '-' as CategoryType},
  {id:createId(), name: '房租', icon: '房租', category: '-' as CategoryType},
  {id:createId(), name: '水电', icon: '水电', category: '-' as CategoryType},
  {id:createId(), name: '交通', icon: '交通', category: '-' as CategoryType},
  {id:createId(), name: '工资', icon: '工资', category: '+' as CategoryType},
  {id:createId(), name: '理财', icon: '理财', category: '+' as CategoryType},
  {id:createId(), name: '红包', icon: '红包', category: '+' as CategoryType},
]



const useTags = () => {
  const [tags, setTags] = useState<{id: number, name: string, icon: string, category: CategoryType}[]>(defaultTags)
  return {tags,setTags}
}

export {useTags}