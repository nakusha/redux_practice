import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

const Home = ({toDos, addToDo, deleteToDo}) => {
  const [text, setText] = useState("");
  
  const onChange = (e) => {
    setText(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    addToDo(text);
    setText("");
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange}/>
        <button>Add</button>
      </form>
      <ul>
        {JSON.stringify(toDos)}
      </ul>
    </>
  )
}

// redux store에 저장된 값을 불러오는것(store.getSate())
const mapStateToProps = (state) => {
  //props에 값을 넣을수 있다.
  return { toDos:state }

}

const mapDispatchToProps = (dispatch) => {
  return { 
    addToDo: (text) => dispatch(actionCreators.addToDo(text)),
    deleteToDo: (id) => dispatch(actionCreators.deleteToDo(id))
  }
}

// store와 component와 연결해줌
export default connect(mapStateToProps, mapDispatchToProps)(Home);