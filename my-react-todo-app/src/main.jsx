import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

console.clear();

function getData(){
  if(!localStorage.getItem("notes"))
    localStorage.setItem("notes", "[]")
  return JSON.parse(localStorage.getItem("notes"))
}

function setRandomList(amount){
  let names = ["Kot", "Pies", "Owoc", "Biurko"];
  let list = [];
  for(let i = 0; i < amount; i++){
    let object = {name: "", id: "", checked: false,}
    if(i < names.length) object.name = names[i];
    else object.name = names[Math.floor(Math.random()*names.length)];
    object.id = "todo-" + i.toString();
    list.push(object);
  }
  localStorage.setItem("notes", JSON.stringify(list));
}
const data = getData();
console.log(data);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App data={data}/>
  </React.StrictMode>,
)
