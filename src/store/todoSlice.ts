import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

export type Todo = {
  id: number
  title: string
  completed: boolean
}

export type AllTodos = {
  [key: number]: Todo
}

const initialState: AllTodos = {}

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Todo>) {
      const newTodo = action.payload
      state[newTodo.id] = newTodo
    },
    deleteItem(state, action: PayloadAction<number>) {
      delete state[action.payload]
    },
    deleteAll(state) {
      state = {}
    },
  },
})

export const { deleteAll, deleteItem, addItem } = counterSlice.actions
export const { reducer } = counterSlice
