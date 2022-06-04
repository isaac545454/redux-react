import React from "react"
import Card from "./card"

function Mudar(props){
         if(props.done){
             return( "feita")
         }else{
             return( "fazer")
         }
     }


 function ListItem(props){
  return(<li   key={props.item.id} >
     <Card className = {props.item.done ? "done button" : "button" }>
         {props.item.text}
        <div>
            <button onClick={()=>{ props.feito(props.item)}}><Mudar done = 
            {props.item.done}></Mudar></button>
            <button onClick={()=>{ props.deleteITEM(props.item)} }>dell</button>
       </div>
     </Card>
     </li>)
     }

export default ListItem