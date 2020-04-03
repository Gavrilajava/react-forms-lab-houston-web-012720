import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  changeMessage = (e) => this.setState({message: e.target.value})

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange = {this.changeMessage} value={this.state.message} type="text" name="message" id="message" />
        <div>Remaining count: {this.props.maxChars - this.state.message.length}</div>
      </div>
    );
  }
}

export default TwitterMessage;
