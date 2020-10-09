import React, { Component } from 'react';
import { getJSON } from "../utils/HttpUtils";

export default class NodeApp extends React.Component {

  state = {
    nodeResult: ""
  }
    
  componentDidMount() {
    const responseJson = getJSON("/api/node")
    .then(responseJson => this.setState({ nodeResult: responseJson.api }));
  }
  
  render() {
    return (
      <div className="NodeApp">
        <div>
          {this.state.nodeResult}
        </div>
      </div>
    );
  }
}
  