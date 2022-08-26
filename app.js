import React, { useState} from "react"
import List from "./list"
import TodoForm from "./todoform"
//import Item from "./item"
import "./todo.css"
import Modal from "./modal"
import listReducers from "./reducers/listReducers"
import {createStore} from 'redux' 
import {Provider} from 'react-redux'


const sav_itens = "salvandoItens"
function persistState(state){
  localStorage.setItem(sav_itens, JSON.stringify(state))
}
function loadState(){
  const actualState = localStorage.getItem(sav_itens)
  if(actualState){
    return JSON.parse(actualState)
  }else{
    return []
  }
}
const store =  createStore(listReducers, loadState())
store.subscribe(()=>{
  persistState(store.getState())
})

function App(){

  const [showModal, setShowModal ] = useState(false)


  

  
     function onhideModal(event){
        setShowModal(false)
   }

  return(
  <div className="container">
    <Provider store={store}>
    <header className="header">
  <h1>lista</h1>
  <button className="add" onClick={()=>{setShowModal(true)}}>+</button>
  </header>

     <List></List>
     <Modal show={showModal} onhideModal={onhideModal}><TodoForm onhideModal={onhideModal}></TodoForm></Modal>
  </Provider>
  </div>
  )
}


 export default App