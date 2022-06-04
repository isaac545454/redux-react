import React, { useState, useEffect } from "react"
import List from "./list"
import TodoForm from "./todoform"
import Item from "./item"
import "./todo.css"
import Modal from "./modal"
 
const sav_itens = "salvandoItens"


function Todo(){
  const [itens, setitem] = useState([])
  const [showModal, setShowModal ] = useState(false)

  useEffect(()=>{
   let salvandoItens = JSON.parse(localStorage.getItem(sav_itens))
   if(salvandoItens){
     setitem(salvandoItens)
   }
}, [])
useEffect(()=>{
  localStorage.setItem(sav_itens, JSON.stringify(itens))
},[itens])

  function onItens (text){
    let it = new Item(text)
     setitem([...itens, it])
     onhideModal()
  }

   
    function deleteITEM (item){
        let filterdeID = itens.filter(it => it.id != item.id)
        setitem(filterdeID)
    }
    function feito(item){
      let upfeito = itens.map(it => {
      if(it.id  ===  item.id) {
        it.done = !it.done

      }
      return it
      })
       setitem(upfeito)
    }
     function onhideModal(event){
        setShowModal(false)
   }

  return(
  <div className="container">
    <header className="header">
  <h1>lista</h1>
  <button className="add" onClick={()=>{setShowModal(true)}}>+</button>
  </header>
      {/**/}
     <List deleteITEM={deleteITEM} feito={feito} item={itens}></List>
     <Modal show={showModal} onhideModal={onhideModal}><TodoForm onItens={onItens}></TodoForm></Modal>
  </div>
  )
}


 export default Todo