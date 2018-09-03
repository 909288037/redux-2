import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_LIST} from "./actionType";

const defaultState = {
    inputValue: '123',
    list: []
}

// reducer 只能接收state不能修改state
// state 整个store的数据 action 接收dispatch传过来的数据
export default (state = defaultState, action) => {
    if(action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }

    if(action.type === ADD_TODO_ITEM) {
        // const newState = JSON.parse(JSON.stringify(state));
        // newState.list.push(newState.inputValue)
        // newState.inputValue = '';
        // console.log(newState)
        const newState = {...state}
        newState.list.push(newState.inputValue)
        newState.inputValue = '';
        return newState;
    }

    if(action.type === DELETE_TODO_LIST) {
        const newState = {...state}
        newState.list.splice(action.index, 1)
        return newState;
    }
    return state
}