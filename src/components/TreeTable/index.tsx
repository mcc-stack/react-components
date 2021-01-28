import { FC } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import TreeTableItem from './TreeTableItem'
import useTreeData from './useTreeData'

export interface TreeTableData {
  key: string
  title: string
  children?: TreeTableData[]
}
export type TreeTableArr = TreeTableData[]

interface TreeTableProps {
  dataSource: TreeTableData[]
}

const TreeTable: FC<TreeTableProps> = ({ dataSource }) => {
  const { treeData, move } = useTreeData(dataSource)
  return (
    <section>
      <DndProvider backend={HTML5Backend}>
        {generate(treeData, move, treeData)}
      </DndProvider>
    </section>
  )
}

export default TreeTable

function generate(
  data: TreeTableArr,
  moveData: any,
  dataSource: TreeTableArr,
  level: number[] = []
) {
  return data.map((item, index) => {
    if (item.children) {
      return (
        <TreeTableItem
          key={item.key}
          level={[...level, index]}
          record={item}
          move={moveData}>
          {generate(item.children, moveData, dataSource, [...level, index])}
        </TreeTableItem>
      )
    }
    return (
      <TreeTableItem
        key={item.key}
        level={[...level, index]}
        record={item}
        move={moveData}
      />
    )
  })
}
