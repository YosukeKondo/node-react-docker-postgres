import React, { Component } from 'react';
import { getJSON } from "../utils/HttpUtils";

export default class NodeApp extends React.Component {

  state = {
    nodeResult: "",
    dockerResult: ""
  }
    
  componentDidMount() {
    const responseJson = getJSON("/api/node")
    .then(responseJson => this.setState({ nodeResult: responseJson.api }));

    const dockerResponseJson = getJSON("/api/docker")
    .then(dockerResponseJson => this.setState({ dockerResult: dockerResponseJson.docker }));
  }
  
  render() {
    return (
      <div className="NodeApp">
        <div>
          {this.state.nodeResult}
        </div>
        <div>
          {this.state.dockerResult}
        </div>
      </div>
    );
  }
}
  