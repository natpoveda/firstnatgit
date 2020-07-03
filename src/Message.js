import React from "react";
import Carita from "./Carita"


export default class Message extends React.Component {
    constructor(props) {
        super(props);
      }

  render() {
   
    return (
      <div>
         El contador se encuentra con un valor de {this.props.children[1]}
         <Carita>
           numero = {this.props.children[1]}
         </Carita> 
      </div>

    );
  }
}