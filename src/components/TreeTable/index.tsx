import { FC } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import TreeTableItem from './TreeTableItem'
import useTreeData from './useTreeData'

interface TreeTableData {
  key: string
  title: string
  children?: TreeTableData[]
}
export type TreeTableArr = TreeTableData[]

interface TreeTableProps {
  dataSource: TreeTableData[]
}

export interface ArrWithIdx {
  arr: TreeTableArr
  idx: number
}

const TreeTable: FC<TreeTableProps> = ({ dataSource }) => {
  const { treeData, moveData } = useTreeData(dataSource)
  return (
    <section>
      <DndProvider backend={HTML5Backend}>
        {generate(treeData, moveData, treeData)}
      </DndProvider>
    </section>
  )
}

export default TreeTable

function generate(
  data: TreeTableArr,
  moveData: any,
  dataSource: TreeTableArr,
  level: number = 0
) {
  return data.map(item => {
    if (item.children) {
      return (
        <TreeTableItem
          key={item.key}
          level={level}
          record={item}
          move={moveData}
          dataSource={dataSource}>
          {generate(item.children, moveData, dataSource, level + 1)}
        </TreeTableItem>
      )
    }
    return (
      <TreeTableItem
        key={item.key}
        level={level}
        record={item}
        move={moveData}
        dataSource={dataSource}
      />
    )
  })
}
