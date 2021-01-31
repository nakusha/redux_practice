import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

const ToDo = ({text, onDelBtnClick}) => {

  return (
    <li>
      {text} <button onClick={onDelBtnClick}>DEL</button>
    </li>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return { 
    onDelBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id))
  }
}

export default connect(null, mapDispatchToProps)(ToDo);