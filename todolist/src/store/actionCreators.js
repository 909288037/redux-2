import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_LIST, INIT_LIST_ACTION} from "./actionType";
import axios from "axios"

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})

export const getAddItemAction = () => ({
    type: ADD_TODO_ITEM,
})

export const getDeleteItemAction = (index) => ({
    type: DELETE_TODO_LIST,
    index
})

export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
})

export const getTodoList = () => {
    return (dispatch) => {
        axios.get("/list").then((res) => {
            const data = res.data
            const action = initListAction(data)
            dispatch(action)
          }).catch(err => {
            console.log(err);
          })
    }
}