import React from "react";
import Layout from "./layout/Layout";
import { Route, Routes } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";


const App = () => {
 

  return (
   <>
   <Routes>
      <Route path="/" element={<Layout/>}>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
   {/* <Layout/> */}
  
   </>
  );
};

export default App;









// import React, { useState } from "react";
// import ProcessForm from "./componentsss/ProcessForm";
// import ProcessTable from "./componentsss/ProcessTable";
// import Visualization from "./componentsss/Visualization";
// import "./styles.css";

// const App = () => {
//   const [processes, setProcesses] = useState([]);

//   const addProcess = (process) => {
//     setProcesses([...processes, process]);
//   };

//   const updateProcess = (id, updatedProcess) => {
//     setProcesses(processes.map((proc) => (proc.id === id ? updatedProcess : proc)));
//   };

//   const deleteProcess = (id) => {
//     setProcesses(processes.filter((proc) => proc.id !== id));
//   };

//   return (
//     <div className="app-container">
//       <h1>CPU Scheduling Algorithm Visualization</h1>
//       <ProcessForm addProcess={addProcess} />
//       <ProcessTable processes={processes} updateProcess={updateProcess} deleteProcess={deleteProcess} />
//       {processes.length > 0 && <Visualization processes={processes} />}
//     </div>
//   );
// };

// export default App;