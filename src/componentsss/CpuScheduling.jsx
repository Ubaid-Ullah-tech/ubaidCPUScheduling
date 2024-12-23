import React, { useState } from 'react';
import ProcessForm from './ProcessForm';
import ProcessTable from './ProcessTable';
import Visualization from './Visualization';

const CpuScheduling = () => {
    const [processes, setProcesses] = useState([]);

    const addProcess = (process) => {
        setProcesses([...processes, process]);
    };

    const updateProcess = (id, updatedProcess) => {
        setProcesses(processes.map((proc) => (proc.id === id ? updatedProcess : proc)));
    };

    const deleteProcess = (id) => {
        setProcesses(processes.filter((proc) => proc.id !== id));
    };

    const containerStyle = {
        maxWidth: '1200px',
        margin: '20px auto',
        padding: '20px',
        backgroundColor: '#fff',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        fontFamily: 'Arial, sans-serif',
        marginTop:'20%'
    };

    const headerStyle = {
        textAlign: 'center',
        marginBottom: '20px',
    };

    const titleStyle = {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#333',
    };

    return (
        <div style={containerStyle}>
            <header style={headerStyle}>
                <h1 style={titleStyle}>CPU Scheduling Algorithm Visualization</h1>
            </header>
            <main>
                <ProcessForm addProcess={addProcess} />
                <ProcessTable 
                    processes={processes} 
                    updateProcess={updateProcess} 
                    deleteProcess={deleteProcess} 
                />
                {processes.length > 0 && <Visualization processes={processes} />}
            </main>
        </div>
    );
};

export default CpuScheduling;












// import React, { useState } from 'react'
// import ProcessForm from './ProcessForm';
// import ProcessTable from './ProcessTable';
// import Visualization from './Visualization';
// import '../../src/styles.css';
// const CpuScheduling = () => {

//     const [processes, setProcesses] = useState([]);
    
//       const addProcess = (process) => {
//         setProcesses([...processes, process]);
//       };
    
//       const updateProcess = (id, updatedProcess) => {
//         setProcesses(processes.map((proc) => (proc.id === id ? updatedProcess : proc)));
//       };
    
//       const deleteProcess = (id) => {
//         setProcesses(processes.filter((proc) => proc.id !== id));
//       };


//     return (
//         <div className="app-container mt-32">
//           <h1>CPU Scheduling Algorithm Visualization</h1>
//           <ProcessForm addProcess={addProcess} />
//           <ProcessTable processes={processes} updateProcess={updateProcess} deleteProcess={deleteProcess} />
//           {processes.length > 0 && <Visualization processes={processes} />}
//         </div>
//       );
// }

// export default CpuScheduling
