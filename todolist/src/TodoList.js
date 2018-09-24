import React from "react";
import { connect } from "react-redux";
import {
  getInputValue,
  getAddItemAction,
  getDeleteItemAction
} from "./store/actionCretors";

const TodoList = props => {
  const {
    inputValue,
    changeInputValue,
    hangdleClick,
    list,
    handleDelete,
  } = props;

  return (
    <div>
      <div>
        <input value={inputValue} onChange={changeInputValue} />
        <button onClick={hangdleClick}> 提交 </button>
      </div>
      <ul>
        {list.map((item, index) => {
          return (
            <li key={item} onClick={handleDelete.bind(this, index)}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    inputValue: state.inputValue,
    list: state.list
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeInputValue(e) {
      const action = getInputValue(e.target.value);
      dispatch(action);
    },

    hangdleClick() {
      const action = getAddItemAction();
      dispatch(action);
    },

    handleDelete(index) {
      const action = getDeleteItemAction(index);
      dispatch(action);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
