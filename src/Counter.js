import React from "react";


const buttonStyle = {
  margin: "10px"
};

export default class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1
    };
  }

  onClickIncrementButton = () =>{
      let mas = this.state.count +1;

      this.setState({
        count: mas
      })
  }


  onClickDecrementButton = () =>{
    let menos = this.state.count -1;

    this.setState({
      count: menos
    })
 }

  render() {

    return (
      <div>
        <button style={buttonStyle} onClick={this.onClickIncrementButton}>
          +
        </button>
        <button style={buttonStyle} onClick={this.onClickDecrementButton}>
          -
        </button>
        <span>
          count: {this.state.count}
        </span>
           
      </div>
    );
  }
}
