
import { useState } from 'react';
import './App.css';
import TaskModal from './TaskModal';
import TaskTable from './Tasktable';
const tasks = [
  { title: "Learn React", description: "Refer to documentation for more!!!", deadline: "19/08/2024", status: "DONE", statusClass: "bg-green-500", action: "In Progress" },
  { title: "Test", description: "Test", deadline: "16/08/2024", status: "TODO", statusClass: "bg-red-500", action: "Failed" },
  { title: "Sample Task", description: "Test description", deadline: "17/08/2024", status: "DONE", statusClass: "bg-green-500", action: "Achieved" },
];

function App() {
  const [modal,setmodal]=useState(false)
  const [taskarr,setTaskarr]=useState(tasks)
  // const [taskarr,setTaskarr]=useState([])
  return (
    <div className="App">
      <header className="w-full flex justify-start bg-blue-600 text-white h-14 align-middle text-center items-center">
       <h3 className='text-2xl pl-6'>Task Manager</h3>
      </header>
      <div className="addtask relative h-0 ">
      <div className=' cursor-pointer   absolute bottom-0 right-6 h-16 w-16  flex justify-center  rounded-full bg-blue-600 text-white  items-center text-4xl'
       style={{top:"80vh"}}
       onClick={()=>setmodal(!modal)}
       >
         +
         </div>
      </div>
      {modal && <TaskModal  click={setmodal}/>}
      {taskarr.length===0?(<div className='text-4xl p-60 '>No Tasks</div>):(
        <TaskTable tasks={tasks} />
        ) }
      

    </div>
  );
}

export default App;
