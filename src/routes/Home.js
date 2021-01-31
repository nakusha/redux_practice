import React, { useState } from "react";
import { connect } from "react-redux";

const Home = (props) => {
  console.log(props)
  const [text, setText] = useState("");
  
  const onChange = (e) => {
    setText(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(text);
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange}/>
        <button>Add</button>
      </form>
      <ul>
        {JSON.stringify(props.toDos)}
      </ul>
    </>
  )
}

// redux store에 저장된 값을 불러오는것
const mapStateToProps = (state) => {
  //props에 값을 넣을수 있다.
  return { toDos:state }

}

// store와 component와 연결해줌
export default connect(mapStateToProps)(Home);