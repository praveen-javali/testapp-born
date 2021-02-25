import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [pending, setPending] = useState([
    "Task 1",
    "Task 2",
    "Task 3",
    "Task 4",
    "Task 5"
  ]);
const [inProgressArray, setInProgressArray]=useState([])
const [completedTask, setCompletedTask]=useState([])
const arraybeforefilter=[] 
  
const handlePending = (val, index) =>{
    var index = pending.indexOf(val);
    if (index > -1) { 
      pending.splice(index, 1);
    }
    arraybeforefilter.push(val)
    setInProgressArray([...inProgressArray, arraybeforefilter])
 
  }
  const gotoCompletedTask=(val, index)=>{

    var index = inProgressArray.indexOf(val);
    if (index > -1) { 
      inProgressArray.splice(index, 1);
    }
   
    arraybeforefilter.push(val)
       
    setCompletedTask([...completedTask, arraybeforefilter])
  }

  const backtoPending=(val, index)=>{
    var index = completedTask.indexOf(val);
    if (index > -1) { 
      completedTask.splice(index, 1);
    }
   
    arraybeforefilter.push(val)
       
    setPending([...pending, arraybeforefilter])
  }

  return (
    <div className="App">
      <p>
        You have 5 tasks in Pending State, When onclick, the particular task
        should move to Inprogress State
      </p>{""}
      <p>
        If its in Inprogress State, When onclick, the particular task should
        move to completed state.
      </p>
      <h2>Pending Task</h2>{" "}
      <p>
        {pending.map((val, index) => {
          return (
            <li key={index} onClick={() =>handlePending(val, index)}>
              {val}
            
            </li>
          );
        })}
      </p>{" "}
      <h2>Inprogress Task</h2>
     
      <p>
        {
        inProgressArray.map((item,index)=>{
          return (
            <li key={index} onClick={() =>gotoCompletedTask(item, index)}>
              {item}
            
            </li>
          ); 
        })

        }
      </p>
     

      <h2>Completed Task</h2>

      {
        completedTask.map((item,index)=>{
          return (
            <li key={index} onClick={() =>backtoPending(item, index)}>
              {item}
            
            </li>
          ); 
        })

        }

    </div>
  );
}
