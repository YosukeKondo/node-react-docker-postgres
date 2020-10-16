import React from "react";
import ReactDOM from "react-dom";
import NodeApp from './node/Node'
import TaskApp from './task/Task'

const Index = () => {
  return (
    <div>Hello React! <NodeApp /> <TaskApp /></div>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));