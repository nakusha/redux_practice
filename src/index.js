import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;
const CounterType = { 
  ADD:"Add",
  MINUS:"Minus"
}


const countModifier = (count = 0, action) => {
  switch (action.type) {
    case CounterType.ADD:
      return count + 1;
    case CounterType.MINUS:
      return count - 1;
    default:
      return count;
  }
};

const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
}

countStore.subscribe(onChange);

const hadleAdd = () => {
  countStore.dispatch({type:CounterType.ADD});
}

add.addEventListener("click", hadleAdd);
minus.addEventListener("click", () => countStore.dispatch({type:CounterType.MINUS}));
