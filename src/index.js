import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const countModifier = (count = 0, action) => {
  if (action.type === "Add"){
    return count + 1;
  } else if (action.type === "Minus") {
    return count - 1;
  } else {
    return count;
  }
};

const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
}

countStore.subscribe(onChange);

const hadleAdd = () => {
  countStore.dispatch({type:"Add"});
}

add.addEventListener("click", hadleAdd);
minus.addEventListener("click", () => countStore.dispatch({type:"Minus"}));
