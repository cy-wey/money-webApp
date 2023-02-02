import {useState, useEffect, useRef} from 'react'
import {createId} from "../lib/createId";
import {useUpdate} from "./useUpdate";

type CategoryType = '-' | '+'
let localTags2 = []
const useTags = () => {
  const [tags, setTags] = useState<{ id: number, name: string, icon: string, category: CategoryType }[]>([])
  const [allTags,setAllTags] = useState<{ id: number, name: string, icon: string, category: CategoryType }[]>([])

  useEffect(() => {
    let localTags = JSON.parse((window.localStorage.getItem('tags') || '[]'))
    if (localTags2.length === 0) {
      localTags2 = JSON.parse((window.localStorage.getItem('tags') || '[]'))
    }
    else {
      localTags2 = JSON.parse((window.localStorage.getItem('allTags') || '[]'))
    }

    if (localTags.length === 0) {
      localTags = [
        {id: -1, name: '', icon: 'empty', category: '-' as CategoryType},
        {id: 0, name: '', icon: 'empty', category: '+' as CategoryType},
        {id: createId(), name: '餐饮',icon: '餐饮', category: '-' as CategoryType},
        {id: createId(), name: '饮品',icon: '饮品', category: '-' as CategoryType},
        {id: createId(), name: '零食',icon: '零食', category: '-' as CategoryType},
        {id: createId(), name: '买菜',icon: '买菜', category: '-' as CategoryType},
        {id: createId(), name: '交通',icon: '交通', category: '-' as CategoryType},
        {id: createId(), name: '化妆品',icon: '化妆品', category: '-' as CategoryType},
        {id: createId(), name: '家具',icon: '家具', category: '-' as CategoryType},
        {id: createId(), name: '家电',icon: '家电', category: '-' as CategoryType},
        {id: createId(), name: '房租',icon: '房租', category: '-' as CategoryType},
        {id: createId(), name: '日用品',icon: '日用品', category: '-' as CategoryType},
        {id: createId(), name: '水果',icon: '水果', category: '-' as CategoryType},
        {id: createId(), name: '淘宝',icon: '淘宝', category: '-' as CategoryType},
        {id: createId(), name: '红包',icon: '红包', category: '-' as CategoryType},
        {id: createId(), name: '药品',icon: '药品', category: '-' as CategoryType},
        {id: createId(), name: '衣物',icon: '衣物', category: '-' as CategoryType},

        {id: createId(), name: '工资',icon: '工资', category: '+' as CategoryType},
        {id: createId(), name: '报销',icon: '报销', category: '+' as CategoryType},
        {id: createId(), name: '理财',icon: '理财', category: '+' as CategoryType},
        {id: createId(), name: '红包',icon: '红包', category: '+' as CategoryType},
        {id: createId(), name: '贷款',icon: '贷款', category: '+' as CategoryType},
      ]
    }
    setTags(localTags)
    setAllTags(localTags2)
  }, [])
  useUpdate(() => {
    window.localStorage.setItem('tags', JSON.stringify(tags))
    window.localStorage.setItem('allTags', JSON.stringify(allTags))
  }, tags)

  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
  const findTagIndex = (id: number) => {
    let result = -1;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id) {
        result = i;
        break;
      }
    }
    return result;
  };
  const getName = (id: number) => {
    const tag = tags.filter(t => t.id === id)[0]
    return tag ? tag.name : ''
  }

  const getAllName = (id: number) => {
    const allTag = allTags.filter(t => t.id === id)[0]
    console.log(id)
    return allTag ? allTag.name : ''

  }


  const getIcon = (id: number) => {
    const tag = tags.filter(t => t.id === id)[0]
    return tag ? tag.icon : ''
  }

  const getAllIcon = (id: number) => {
    const allTag = allTags.filter(t => t.id === id)[0]
    return allTag ? allTag.icon : ''
  }

  const addTag = (obj: { name: string, icon: string, category: CategoryType }) => {
    if (obj.name !== '' && obj.icon !== 'empty' && obj.icon !== '') {
      setTags([...tags, {id: createId(), name: obj.name, icon: obj.icon, category: obj.category}])
      setAllTags([...allTags, {id: createId(), name: obj.name, icon: obj.icon, category: obj.category}])
    }
  }
  const updateTag = (id: number, obj: { name: string, icon: string, category: CategoryType }) => {
    // const index = findTagIndex(id);
    // // 深拷贝 tags 得到 tagsClone
    // const tagsClone = JSON.parse(JSON.stringify(tags));
    // // 把 tagsClone 的第index 删除，换成 {id: id ,name: obj.name, icon: obj.icon}
    // tagsClone.splice(index, 1, {id: id, name: obj.name, icon: obj.icon});
    // setTags(tagsClone);

    // @ts-ignore
    setTags(tags.map(tag => tag.id === id ? {id, name: obj.name, icon: obj.icon, category: obj.category} : tag));
  };

  const deleteTag = (id: number) => {
    // const index = findTagIndex(id);
    // const tagsClone = JSON.parse(JSON.stringify(tags));
    // tagsClone.splice(index, 1);
    // setTags(tagsClone);
    setTags(tags.filter(tag => tag.id !== id))
  }

  return {tags, setTags, findTag, updateTag, deleteTag, addTag, getName, getIcon,getAllName,getAllIcon}
}

export {useTags}