import React, { useState } from "react"


function TodoForm(props){
    const [text, settext] = useState()

      function ler(event){
    
    let t = event.target.value
    settext(t)
  }
     

    function addItem( event ){
         event.preventDefault()
         if(text){
         props.onItens(text)
          settext("")
         }
  }
    
  return(<form>
    <input onChange={ler} type="text" value={text}></input>
    <button onClick={addItem}>add</button>
  </form>
  )
}

export default TodoForm