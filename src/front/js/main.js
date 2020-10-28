import React from "react";
import ReactDOM from "react-dom";
import ChatApp from './chat/Chat';

const Index = () => {
  return (
    <div><ChatApp /></div>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));