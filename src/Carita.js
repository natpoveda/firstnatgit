import React from "react";

export default class Carita extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            element: ""
          };
      }

    dibujaCara = () => {
        let numero = this.props.children[1];
        let elemento = "";
        for (let index = 0; index < numero; index++) {
             elemento = ":) " + elemento
        }
         return elemento;
    }

  render() {
    
    return (

      <div>       
        {this.dibujaCara()}       
      </div>

    );
  }
}