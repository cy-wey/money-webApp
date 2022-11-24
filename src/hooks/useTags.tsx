import {useState} from 'react'
import {createId} from "../lib/createId";

const defaultTags = [
  {id:createId(), name: '餐饮'},
  {id:createId(), name: '房租'},
  {id:createId(), name: '水电'},
  {id:createId(), name: '交通'}
]

const useTags = () => {
  const [tags, setTags] = useState<{id: number, name: string}[]>(defaultTags)
  return {tags,setTags}
}

export {useTags}