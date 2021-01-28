import { TreeTableArr } from '..'
interface ArrWithIdx {
  arr: TreeTableArr
  idx: number
}

export function findIndex(arr: TreeTableArr, key: string) {
  let res = { arr, idx: -1 }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].key === key) {
      return { arr, idx: i }
    }
    if (arr[i].children) {
      res = findIndex(arr[i].children!, key)
    }
    if (res.idx !== -1) {
      return res
    }
  }
  return res
}

export function move(startArrWithIdx: ArrWithIdx, endArrWithIdx: ArrWithIdx) {
  endArrWithIdx.arr.splice(
    endArrWithIdx.idx,
    0,
    ...startArrWithIdx.arr.splice(startArrWithIdx.idx, 1)
  )
}
