const defaultState = {
    inputValue: '123',
    list: []
}

// reducer 只能接收state不能修改state
// state 整个store的数据 action 接收dispatch传过来的数据
export default (state = defaultState, action) => {
    if(action.type === "change_input_value") {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }

    if(action.type === "add_todo_item") {
        // const newState = JSON.parse(JSON.stringify(state));
        // newState.list.push(newState.inputValue)
        // newState.inputValue = '';
        // console.log(newState)
        const newState = {...state}
        newState.list.push(newState.inputValue)
        newState.inputValue = '';
        return newState;
    }

    if(action.type === "delete_todo_list") {
        const newState = {...state}
        newState.list.splice(newState.index, 1)
        return newState;
    }
    return state
}