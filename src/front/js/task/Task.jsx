import React, { Component } from 'react';
import { getJSON } from "../utils/HttpUtils";

export default class TaskApp extends React.Component {

 state = {
   taskResult: []
 }
   
 componentDidMount() {
   const taskResponseJson = getJSON("/api/postgres")
   .then(taskResponseJson => this.setState({ taskResult: taskResponseJson }));
 }
 
 render() {
   const taskRows = this.state.taskResult.map((task,index) =>
     <tr key={task.id}>
       <td>{task.title}</td>
       <td>{task.description}</td>
     </tr>
   );

   return (
     <div className="TaskApp">
       <table border='1' cellSpacing='0'>
         <thead>
           <tr>
              <th>タイトル</th>
              <th>詳細</th>
           </tr>
         </thead>
         <tbody>
           {taskRows}
         </tbody> 
       </table>
     </div>
   );
 }
}