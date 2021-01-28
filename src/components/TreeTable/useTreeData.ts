import { useState } from 'react'
import { ArrWithIdx, TreeTableArr } from '.'
import update from 'immutability-helper'
export default function useTreeData(data: TreeTableArr) {
  const [treeData, setTreeData] = useState(data)
  const moveData = (startArrWithIdx: ArrWithIdx, endArrWithIdx: ArrWithIdx) => {
    console.log('start', startArrWithIdx, 'end', endArrWithIdx)
    endArrWithIdx.arr.splice(
      0,
      endArrWithIdx.idx,
      ...startArrWithIdx.arr.splice(startArrWithIdx.idx, 1)
    )
    update(treeData, { $splice: {} })
    setTreeData([...treeData])
    console.log('拖拽后data', [...treeData])
  }

  return { treeData, moveData }
}

const data = [
  { key: '1', title: 'name1' },
  {
    key: '2',
    title: 'name2',
    children: [
      { key: '2-1', title: 'name2 - 1' },
      { key: '2-2', title: 'name2 - 2' },
      { key: '2-3', title: 'name2 - 3' },
    ],
  },
  {
    key: '3',
    title: 'name3',
    children: [
      { key: '3-1', title: 'name3 - 1' },
      { key: '3-2', title: 'name3 - 2' },
      {
        key: '3-3',
        title: 'name3 - 3',
        children: [
          { key: '3-3-1', title: 'name3 - 3 - 1' },
          { key: '3-3-2', title: 'name3 - 3 - 2' },
        ],
      },
    ],
  },
  {
    key: '4',
    title: 'name4',
  },
]

console.log(
  update(data, {
    2: {
      children: { $splice: [[1, 1, { key: '3-2-ssss', title: '已改变' }]] },
    },
  })
)
