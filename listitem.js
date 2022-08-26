import React from "react"
import Card from "./card"
import {useDispatch} from 'react-redux'
import {deleteItem, changeDone } from './actions/listActions'

function Mudar(props){
         if(props.done){
             return( "feita")
         }else{
             return( "fazer")
         }
     }


 function ListItem(props){
    const dispath= useDispatch()
  return(
  <li  >
     <Card className = {props.item.done ? "done button" : "button" }>
         {props.item.text}
        <div>
            <button onClick={()=>{ dispath(changeDone(props.item.id)) }}><Mudar done = 
            {props.item.done}></Mudar></button>
            <button onClick={()=>{ dispath(deleteItem(props.item.id)) }}>dell</button>
       </div>
     </Card>
     </li>)
     }

export default ListItem