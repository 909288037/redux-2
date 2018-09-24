import {Change_Input_Value, Add_Item, Delete_Item} from './actionTypes'

const defaultState = {
    inputValue: '',
    list: []
}

export default (state = defaultState, action) => {

    if(action.type === Change_Input_Value) {
        return {
                ...state, inputValue: action.inputValue
        }
    }

    if(action.type === Add_Item) {
        let newState = { ...state}
        newState.list.push(newState.inputValue)
        newState.inputValue = '';
        return newState
    }

    if(action.type === Delete_Item) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
    }

    return state
    // switch (action.type) {
    //     case Change_Input_Value:
    //     return {
    //         ...state, inputValue: action.inputValue
    //     }

    //     case Add_Item:
    //     let newState = {...state}
    //     newState.list.push(newState.inputValue)
    //     newState.inputValue = '';
    //     return newState

    //     case Delete_Item:
    //     let newState = {...state}
    //     newState.list.splice(action.index, 1)
    //     return newState

    //     default: 
    //     return state
    // }
}