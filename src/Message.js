import React from "react";

const buttonStyle = {
  margin: "10px"
};

export default class Message extends React.Component {
    constructor(props) {
        super(props);
      }

  render() {
   
    return (
      <div>
         El contador se encuentra con un valor de {this.props.children[1]}
      </div>
    );
  }
}