import { createStore } from 'redux';

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "Add";
const DELETE_TODO = "Delete";

const addToDo = (text) => {
  return {
    type:ADD_TODO,
    data:{
      id:Date.now(),
      text,
    }
  }
}

const deleteToDo = (id) => {
  return {
    type:DELETE_TODO,
    id
  }
}
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [action.data, ...state];
    case DELETE_TODO:
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
}

const store = createStore(reducer);

const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text));
}

const dispatchDeleteToDo = (e) => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteToDo(id))
}

const paintToDos = () => {
   const toDos = store.getState();
   ul.innerHTML = "";
   toDos.forEach(item => {
     const li = document.createElement("li");
     const btn = document.createElement('button');
     btn.addEventListener("click", dispatchDeleteToDo);
     btn.innerText = "DEL";
     li.id = item.id;
     li.innerText = item.text
     li.appendChild(btn);
     ul.appendChild(li);
   });
}
store.subscribe(paintToDos)


const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo);
};

form.addEventListener("submit", onSubmit);