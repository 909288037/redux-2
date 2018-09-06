import React, {
  Component
} from "react";
import TodoListUI from "./TodoListUI"
import "antd/dist/antd.css";
import store from "./store/index";
import {
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction,
  getTodoList
} from "./store/actionCreators";


class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    // store 更新触发
    store.subscribe(this.handleStoreChange);
  }

  handleInputChange(e) {
    // const action = {
    //   type: CHANGE_INPUT_VALUE,
    //   value: e.target.value
    // };

    const action = getInputChangeAction(e.target.value)
    // 将数据传递到store
    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState());
  }

  handleBtnClick() {
    const action = getAddItemAction()
    store.dispatch(action);
  }

  handleItemDelete(index) {

    const action = getDeleteItemAction(index)
    store.dispatch(action);
  }

  componentDidMount() {
    const action = getTodoList()
    store.dispatch(action)
  }

  render() {
    return ( <
      TodoListUI inputValue = {
        this.state.inputValue
      }
      handleInputChange = {
        this.handleInputChange
      }
      handleBtnClick = {
        this.handleBtnClick
      }
      handleItemDelete = {
        this.handleItemDelete
      }
      list = {
        this.state.list
      }
      />
    );
  }
}

export default TodoList;