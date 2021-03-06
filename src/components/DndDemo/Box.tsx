import React from 'react'
import { ItemTypes } from './ItemTypes'
import { useDrag, DragSourceMonitor } from 'react-dnd'

const style: React.CSSProperties = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  float: 'left',
}

export interface BoxProps {
  name: string
}

interface DropResult {
  allowedDropEffect: string
  dropEffect: string
  name: string
}

interface DragItem {
  name: string
  type: string
}

export const Box: React.FC<BoxProps> = ({ name }) => {
  const item = { name, type: ItemTypes.key }
  const [{ opacity }, drag] = useDrag({
    item,
    end(item: DragItem | undefined, monitor: DragSourceMonitor) {
      const dropResult: DropResult = monitor.getDropResult()
      console.log('dropResult', dropResult)
      console.log('item', item)
      if (item && dropResult) {
        let alertMessage = ''
        const isDropAllowed =
          dropResult.allowedDropEffect === 'any' ||
          dropResult.allowedDropEffect === dropResult.dropEffect
        if (isDropAllowed) {
          const isCopyAction = dropResult.dropEffect === 'copy'
          const actionName = isCopyAction ? 'copied' : 'moved'
          alertMessage = `You ${actionName} ${item.name} into ${dropResult.name}!`
        } else {
          alertMessage = `You cannot ${dropResult.dropEffect} an item into the ${dropResult.name}`
        }
        alert(alertMessage)
      }
    },
    collect: (monitor: any) => {
      // console.log('monitor', monitor)
      return {
        opacity: monitor.isDragging() ? 0.4 : 1,
      }
    },
  })

  return (
    <div ref={drag} style={{ ...style, opacity }}>
      {name}
    </div>
  )
}
