import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
      charsLeft: 280
    };
  }

  handleChange= (event) =>{
    var charsLeft = this.props.maxChars - event.target.value.length
    this.setState({
      message: event.target.value,
      charsLeft: charsLeft
    })
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <strong>Your message:{this.state.charsLeft}</strong>
        <input onChange={this.handleChange} type="text" name="message" value={this.state.message} id="message" />
      </div>
    );
  }
}

export default TwitterMessage;
