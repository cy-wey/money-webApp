import {useState} from 'react'
const useTags = () => {
  const [tags, setTags] = useState<{id: number, name: string}[]>(
    [
      {id:1, name: '餐饮'},
      {id:2, name: '房租'},
      {id:3, name: '水电'},
      {id:4, name: '交通'}
  ])
  return {tags,setTags}
}

export {useTags}