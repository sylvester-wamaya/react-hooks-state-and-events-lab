import React, {useState} from "react";

function Item({ name, category }) {
  const [item, setItem]= useState(false);
  function addItem(){
    setItem((item)=>!item)
  }
  return (
    <li className={item ? "in-cart" : ""} >
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addItem} className={item ? "remove" : "add"} >{item ? "Remove from" : "Add to"}</button>
    </li>
  );
}

export default Item;
