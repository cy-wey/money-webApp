import {useState} from 'react'
import {createId} from "../lib/createId";

const defaultIcons = [
  {id: createId(), name: '书籍教材'},
  {id: createId(), name: '交通'},
  {id: createId(), name: '修理维护'},
  {id: createId(), name: '化妆品'},
  {id: createId(), name: '娱乐'},
  {id: createId(), name: '宠物'},
  {id: createId(), name: '家具'},
  {id: createId(), name: '家电'},
  {id: createId(), name: '房租'},
  {id: createId(), name: '教育'},
  {id: createId(), name: '数码产品'},
  {id: createId(), name: '旅游度假'},
  {id: createId(), name: '日用品'},
  {id: createId(), name: '水果'},
  {id: createId(), name: '汽车用品'},
  {id: createId(), name: '淘宝'},
  {id: createId(), name: '游戏'},
  {id: createId(), name: '电影'},
  {id: createId(), name: '红包'},
  {id: createId(), name: '育儿'},
  {id: createId(), name: '药品'},
  {id: createId(), name: '衣物'},
  {id: createId(), name: '运动'},
  {id: createId(), name: '零食'},
  {id: createId(), name: '音乐娱乐'},
  {id: createId(), name: '餐饮'},
  {id: createId(), name: '饮品'},

  {id: createId(), name: '工资'},
  {id: createId(), name: '报销'},
  {id: createId(), name: '理财'},
  {id: createId(), name: '贷款'},
]

const useIcons = () => {
  const [icons, setIcons] = useState<{id: number, name: string}[]>(defaultIcons);
  const findIcon = (id: number) => icons.filter(icon => icon.id === id)[0];
  return {icons, setIcons, findIcon}
}

export {useIcons};