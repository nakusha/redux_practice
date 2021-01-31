import React from "react";
import { connect } from "react-redux";
// import { useParams } from "react-router-dom";

const Detail = ({toDo}) => {
  // const id = useParams();
  return(
    <>
      <h1>{toDo?.text}</h1>
      <h5>Created at: {toDo?.id}</h5>
    </>
  )
}

const mapStateToProps = (state, ownProps) => {
  const {
    match: {
      params: {id}
    }
  } = ownProps;
  return { toDo: state.find(toDo => toDo.id === parseInt(id)) };
}

export default connect(mapStateToProps, null)(Detail);