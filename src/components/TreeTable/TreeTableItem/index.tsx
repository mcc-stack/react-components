import { FC, useRef } from 'react'
import {
  DragSourceMonitor,
  DropTargetMonitor,
  useDrag,
  useDrop,
} from 'react-dnd'
import { TreeTableArr } from '..'
import { findIndex } from '../utils'

interface TreeTableItemProp {
  record: { key: string; title: string }
  move: any
  level: number
  dataSource: TreeTableArr
}

export interface DragItem {
  type: string
  key: string
}
interface DropResult {
  name: string
  dropEffect: string
  allowedDropEffect: string
}
const TreeTableItem: FC<TreeTableItemProp> = ({
  record,
  dataSource,
  move,
  children,
}) => {
  const item = { key: record.key, type: 'drag' }
  const ref = useRef(null)

  const [, drag] = useDrag({
    item,
    end(item: DragItem | undefined, monitor: DragSourceMonitor) {
      const dropResult: DropResult = monitor.getDropResult()
      // console.log('dropResult', dropResult)
      // console.log('item', item)
      if (item && dropResult) {
        // console.log('拖拽成功')
      }
    },
    collect: (monitor: any) => {
      // console.log('monitor', monitor)
      return {
        opacity: monitor.isDragging() ? 0.4 : 1,
      }
    },
  })
  const [, drop] = useDrop({
    accept: 'drag',
    drop: (data: any) => {
      console.log('endKey', record.key)
      console.log('startKey', data.key)
      move(findIndex(dataSource, data.key), findIndex(dataSource, record.key))
      // console.log('dataSource', dataSource)
      // setData(dataSource)
      return {}
    },
    collect: (monitor: DropTargetMonitor) => {
      // console.log('didDrop', monitor.didDrop())
      return {}
    },
  })
  drop(drag(ref))
  // console.log('children', children)
  return (
    <div ref={ref}>
      <div>{record.title}</div>
      {children ? <div style={{ marginLeft: '20px' }}>{children}</div> : ''}
    </div>
  )
}

export default TreeTableItem
