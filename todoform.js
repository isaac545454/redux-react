import React, { useState } from "react"
import {useDispatch } from "react-redux"
import {ADDItem} from './actions/listActions'


function TodoForm(props){
    const [text, settext] = useState()
    const dispatch = useDispatch()
      function ler(event){
    
    let t = event.target.value
    settext(t)
  }
     

    function addItem( event ){
         event.preventDefault()
         if(text){
         dispatch(ADDItem(text))
          settext("")
          props.onhideModal()
          
         }
  }
    
  return(<form>
    <input onChange={ler} type="text" value={text}></input>
    <button onClick={addItem}>add</button>
  </form>
  )
}

export default TodoForm