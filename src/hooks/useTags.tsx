import {useState} from 'react'
import {createId} from "../lib/createId";

type CategoryType = '-' | '+'

const defaultTags = [
  {id: createId(), name: '餐饮', icon: '餐饮', category: '-' as CategoryType},
  {id: createId(), name: '房租', icon: '房租', category: '-' as CategoryType},
  {id: createId(), name: '水电', icon: '水电', category: '-' as CategoryType},
  {id: createId(), name: '工资', icon: '工资', category: '+' as CategoryType},
  {id: createId(), name: '理财', icon: '理财', category: '+' as CategoryType},
]

const useTags = () => {
  const [tags, setTags] = useState<{ id: number, name: string, icon: string, category: CategoryType }[]>(defaultTags)
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
    }
    const updateTag = (id: number, obj: { name: string, icon: string }) => {
      const index = findTagIndex(id);
      // 深拷贝 tags 得到 tagsClone
      const tagsClone = JSON.parse(JSON.stringify(tags));
      // 把 tagsClone 的第index 删除，换成 {id: id ,name: obj.name, icon: obj.icon}
      tagsClone.splice(index, 1, {id: id, name: obj.name, icon: obj.icon});
      setTags(tagsClone);
    };

    return {tags, setTags, findTag, updateTag}
  }

  export {useTags}