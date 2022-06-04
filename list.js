import React from "react"
import ListItem from './listitem'


 function List(props){  
  return(<ul>
    {props.item.map(item =><ListItem   key={item.id} item={item} deleteITEM={props.deleteITEM} 
    feito={props.feito}></ListItem>)} </ul> )
  }
export default List     