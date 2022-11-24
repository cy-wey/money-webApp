import {useState} from 'react'
import {createId} from "../lib/createId";

const defaultIcons = [
  {id: createId(), name: '餐饮'},
  {id: createId(), name: '房租'},
  {id: createId(), name: '水电'},
  {id: createId(), name: '交通'},
  {id: createId(), name: '工资'},
  {id: createId(), name: '理财'},
  {id: createId(), name: '红包'},
]

const useIcons = () => {
  const [icons, setIcons] = useState<{id: number, name: string}[]>(defaultIcons);
  const findIcon = (id: number) => icons.filter(icon => icon.id === id)[0];
  return {icons, setIcons, findIcon}
}

export {useIcons};