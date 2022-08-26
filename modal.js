import React  from "react"
import Card from "./card"

function Modal(props){
    

    function hideModal(event){

   let evento = event.target
         if(evento.id === "modal"){
                  props.onhideModal()
         }
        }


    return( <div id="modal" onClick={hideModal} className={props.show?"modal": "hide"}>
       <Card className="cardModal">
           {props.children}
       </Card>
   </div>)
}
export default Modal