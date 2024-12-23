// import React, { createContext, useState, useContext } from "react";

// const SimulationContext = createContext();

// export const useSimulation = () => useContext(SimulationContext);

// export const SimulationProvider = ({ children }) => {
//   const [processes, setProcesses] = useState([]);
//   const [algorithm, setAlgorithm] = useState("FCFS");
//   const [simulationData, setSimulationData] = useState(null);

//   return (
//     <SimulationContext.Provider value={{
//       processes,
//       setProcesses,
//       algorithm,
//       setAlgorithm,
//       simulationData,
//       setSimulationData,
//     }}>
//       {children}
//     </SimulationContext.Provider>
//   );
// };
