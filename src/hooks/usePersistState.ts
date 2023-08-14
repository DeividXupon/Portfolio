import { useState, useEffect, Dispatch, SetStateAction } from 'react'

type Ireturn<T> = [T, Dispatch<SetStateAction<T>>]

function usePersistState<T>(key: string, initialState: T): Ireturn<T> {
  const [state, setState] = useState(() => {
    const valueReq = localStorage.getItem(key)

    return valueReq ? JSON.parse(valueReq) : initialState
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}

export default usePersistState
