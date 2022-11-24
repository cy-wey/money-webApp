import {useState} from 'react'
const useTags = () => {
  const [tags, setTags] = useState<string[]>(['餐饮', '房租', '水电', '交通'])
  return {tags,setTags}
}

export {useTags}