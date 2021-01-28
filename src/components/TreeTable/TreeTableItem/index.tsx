import { FC, useRef } from 'react'
import {
  DragSourceMonitor,
  DropTargetMonitor,
  useDrag,
  useDrop,
} from 'react-dnd'

interface TreeTableItemProp {
  record: { key: string; title: string }
  move: any
  level: number[]
}

export interface DragItem {
  type: string
  level: number[]
}
interface DropResult {
  dropEffect: string
  level: number[]
}
const TreeTableItem: FC<TreeTableItemProp> = ({
  record,
  move,
  level,
  children,
}) => {
  const item = { level, record, type: 'drag' }
  const ref = useRef(null)
  const [, drag] = useDrag({
    item,
    end(item: DragItem | undefined, monitor: DragSourceMonitor) {
      const dropResult: DropResult = monitor.getDropResult()
      console.log('dropResult', dropResult)
      if (item && dropResult.level) {
        console.log('拖拽成功')
        move(level, dropResult.level, record)
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
      console.log('endKey', level)
      if (data.record.key === record.key) {
        return {}
      }
      return { level }
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
