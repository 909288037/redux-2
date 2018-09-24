import {Change_Input_Value, Add_Item, Delete_Item} from './actionTypes'

export const getInputValue = (value) => ({
    type: Change_Input_Value,
    inputValue: value
})

export const getAddItemAction = () => ({
    type: Add_Item
})

export const getDeleteItemAction = (index) => ({
    type: Delete_Item,
    index
})