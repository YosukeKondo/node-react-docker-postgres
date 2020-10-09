import React from "react";
import ReactDOM from "react-dom";
import NodeApp from './node/Node'

const Index = () => {
  return (
    <div>Hello React! <NodeApp /></div>
  );
};

ReactDOM.render(<Index />, document.getElementById("root")); 