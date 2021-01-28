import { useState } from 'react'
import { TreeTableArr, TreeTableData } from '.'
import update from 'immutability-helper'
export default function useTreeData(data: TreeTableArr) {
  const [treeData, setTreeData] = useState(data)
  const move = (start: number[], end: number[], record: TreeTableData) => {
    const data = update(treeData, moveChange(start, 'remove'))

    // console.log('remove', data)
    // console.log('add', update(data, moveChange(end, 'add', record)))
    setTreeData(update(data, moveChange(end, 'add', record)))
  }
  return { treeData, move }
}

type changeType = 'add' | 'remove'
function moveChange(arr: number[], type: changeType, record?: TreeTableData) {
  let obj = Object.create(null)
  let dummy = obj
  const len = arr.length
  for (let i = 0; i < len - 1; i++) {
    dummy[arr[i]] = { children: {} }
    dummy = dummy[arr[i]].children
  }

  dummy.$splice =
    type === 'add' ? [[arr[len - 1], 0, record]] : [[arr[len - 1], 1]]
  console.log('obj', obj)
  return obj
}
