// FCFS Algorithm
export const fcfs = (processes) => {
  const sorted = [...processes].sort((a, b) => a.arrivalTime - b.arrivalTime);
  let currentTime = 0;
  return sorted.map((proc) => {
    const startTime = Math.max(currentTime, proc.arrivalTime);
    currentTime = startTime + proc.burstTime;
    return { ...proc, completionTime: currentTime, turnaroundTime: currentTime - proc.arrivalTime, waitingTime: startTime - proc.arrivalTime };
  });
};

// SJF (Non-Preemptive) Algorithm
export const sjf = (processes) => {
  const sorted = [...processes].sort((a, b) => a.arrivalTime - b.arrivalTime);
  let currentTime = 0;
  return sorted.map((proc) => {
    const startTime = Math.max(currentTime, proc.arrivalTime);
    currentTime = startTime + proc.burstTime;
    return { ...proc, completionTime: currentTime, turnaroundTime: currentTime - proc.arrivalTime, waitingTime: startTime - proc.arrivalTime };
  });
};

// SJF (Preemptive) Algorithm
export const sjfPreemptive = (processes) => {
  let currentTime = 0;
  let queue = [...processes].sort((a, b) => a.arrivalTime - b.arrivalTime);
  let result = [];
  let waitingProcesses = [];

  while (queue.length > 0 || waitingProcesses.length > 0) {
    // Add processes that have arrived by the current time
    while (queue.length > 0 && queue[0].arrivalTime <= currentTime) {
      waitingProcesses.push(queue.shift());
    }

    // Sort waiting processes by burst time
    waitingProcesses.sort((a, b) => a.burstTime - b.burstTime);

    if (waitingProcesses.length > 0) {
      const proc = waitingProcesses.shift();
      const startTime = Math.max(currentTime, proc.arrivalTime);
      currentTime = startTime + proc.burstTime;
      result.push({ ...proc, completionTime: currentTime, turnaroundTime: currentTime - proc.arrivalTime, waitingTime: startTime - proc.arrivalTime });
    } else {
      currentTime++;
    }
  }

  return result;
};

// LJF (Non-Preemptive) Algorithm
export const ljf = (processes) => {
  const sorted = [...processes].sort((a, b) => a.arrivalTime - b.arrivalTime);
  let currentTime = 0;
  return sorted.map((proc) => {
    const startTime = Math.max(currentTime, proc.arrivalTime);
    currentTime = startTime + proc.burstTime;
    return { ...proc, completionTime: currentTime, turnaroundTime: currentTime - proc.arrivalTime, waitingTime: startTime - proc.arrivalTime };
  });
};

// LJF (Preemptive) Algorithm
export const ljfPreemptive = (processes) => {
  let currentTime = 0;
  let queue = [...processes].sort((a, b) => a.arrivalTime - b.arrivalTime);
  let result = [];
  let waitingProcesses = [];

  while (queue.length > 0 || waitingProcesses.length > 0) {
    while (queue.length > 0 && queue[0].arrivalTime <= currentTime) {
      waitingProcesses.push(queue.shift());
    }

    // Sort waiting processes by burst time (LJF prefers longer burst times)
    waitingProcesses.sort((a, b) => b.burstTime - a.burstTime);

    if (waitingProcesses.length > 0) {
      const proc = waitingProcesses.shift();
      const startTime = Math.max(currentTime, proc.arrivalTime);
      currentTime = startTime + proc.burstTime;
      result.push({ ...proc, completionTime: currentTime, turnaroundTime: currentTime - proc.arrivalTime, waitingTime: startTime - proc.arrivalTime });
    } else {
      currentTime++;
    }
  }

  return result;
};

// Priority Scheduling (Non-Preemptive)
export const priority = (processes) => {
  const sorted = [...processes].sort((a, b) => a.arrivalTime - b.arrivalTime);
  let currentTime = 0;
  return sorted.map((proc) => {
    const startTime = Math.max(currentTime, proc.arrivalTime);
    currentTime = startTime + proc.burstTime;
    return { ...proc, completionTime: currentTime, turnaroundTime: currentTime - proc.arrivalTime, waitingTime: startTime - proc.arrivalTime };
  });
};

// Priority Scheduling (Preemptive)
export const priorityPreemptive = (processes) => {
  let currentTime = 0;
  let queue = [...processes].sort((a, b) => a.arrivalTime - b.arrivalTime);
  let result = [];
  let waitingProcesses = [];

  while (queue.length > 0 || waitingProcesses.length > 0) {
    while (queue.length > 0 && queue[0].arrivalTime <= currentTime) {
      waitingProcesses.push(queue.shift());
    }

    waitingProcesses.sort((a, b) => b.priority - a.priority);

    if (waitingProcesses.length > 0) {
      const proc = waitingProcesses.shift();
      const startTime = Math.max(currentTime, proc.arrivalTime);
      currentTime = startTime + proc.burstTime;
      result.push({ ...proc, completionTime: currentTime, turnaroundTime: currentTime - proc.arrivalTime, waitingTime: startTime - proc.arrivalTime });
    } else {
      currentTime++;
    }
  }

  return result;
};

// Round Robin Scheduling
export const roundRobin = (processes, quantum) => {
  let currentTime = 0;
  let queue = [...processes];
  let result = [];
  let remainingProcesses = queue.map((proc) => ({ ...proc, remainingBurstTime: proc.burstTime }));

  while (remainingProcesses.length > 0) {
    let proc = remainingProcesses.shift();
    const timeSlice = Math.min(proc.remainingBurstTime, quantum);
    currentTime += timeSlice;
    proc.remainingBurstTime -= timeSlice;

    if (proc.remainingBurstTime > 0) {
      remainingProcesses.push(proc);
    } else {
      proc.completionTime = currentTime;
      proc.turnaroundTime = currentTime - proc.arrivalTime;
      proc.waitingTime = proc.turnaroundTime - proc.burstTime;
      result.push(proc);
    }
  }

  return result;
};

// Calculate Average Turnaround Time and Waiting Time
export const calculateMetrics = (processes) => {
  const totalTAT = processes.reduce((sum, p) => sum + p.turnaroundTime, 0);
  const totalWT = processes.reduce((sum, p) => sum + p.waitingTime, 0);
  return { avgTAT: (totalTAT / processes.length).toFixed(2), avgWT: (totalWT / processes.length).toFixed(2) };
};












// // FCFS Algorithm
// export const fcfs = (processes) => {
//     const sorted = [...processes].sort((a, b) => a.arrivalTime - b.arrivalTime);
//     let currentTime = 0;
//     return sorted.map((proc) => {
//       const startTime = Math.max(currentTime, proc.arrivalTime);
//       currentTime = startTime + proc.burstTime;
//       return { ...proc, completionTime: currentTime, turnaroundTime: currentTime - proc.arrivalTime, waitingTime: startTime - proc.arrivalTime };
//     });
//   };
  
//   // SJF (Non-Preemptive) Algorithm
//   export const sjf = (processes) => {
//     const sorted = [...processes].sort((a, b) => a.arrivalTime - b.arrivalTime);
//     let currentTime = 0;
//     return sorted.map((proc) => {
//       const startTime = Math.max(currentTime, proc.arrivalTime);
//       currentTime = startTime + proc.burstTime;
//       return { ...proc, completionTime: currentTime, turnaroundTime: currentTime - proc.arrivalTime, waitingTime: startTime - proc.arrivalTime };
//     });
//   };
  
//   // SJF (Preemptive) Algorithm
//   export const sjfPreemptive = (processes) => {
//     let currentTime = 0;
//     let queue = [...processes].sort((a, b) => a.arrivalTime - b.arrivalTime);
//     let result = [];
//     let waitingProcesses = [];
  
//     while (queue.length > 0 || waitingProcesses.length > 0) {
//       // Add processes that have arrived by the current time
//       while (queue.length > 0 && queue[0].arrivalTime <= currentTime) {
//         waitingProcesses.push(queue.shift());
//       }
  
//       // Sort waiting processes by burst time
//       waitingProcesses.sort((a, b) => a.burstTime - b.burstTime);
  
//       if (waitingProcesses.length > 0) {
//         const proc = waitingProcesses.shift();
//         const startTime = Math.max(currentTime, proc.arrivalTime);
//         currentTime = startTime + proc.burstTime;
//         result.push({ ...proc, completionTime: currentTime, turnaroundTime: currentTime - proc.arrivalTime, waitingTime: startTime - proc.arrivalTime });
//       } else {
//         currentTime++;
//       }
//     }
  
//     return result;
//   };
  
//   // LJF (Non-Preemptive) Algorithm
//   export const ljf = (processes) => {
//     const sorted = [...processes].sort((a, b) => a.arrivalTime - b.arrivalTime);
//     let currentTime = 0;
//     return sorted.map((proc) => {
//       const startTime = Math.max(currentTime, proc.arrivalTime);
//       currentTime = startTime + proc.burstTime;
//       return { ...proc, completionTime: currentTime, turnaroundTime: currentTime - proc.arrivalTime, waitingTime: startTime - proc.arrivalTime };
//     });
//   };
  
//   // LJF (Preemptive) Algorithm
//   export const ljfPreemptive = (processes) => {
//     let currentTime = 0;
//     let queue = [...processes].sort((a, b) => a.arrivalTime - b.arrivalTime);
//     let result = [];
//     let waitingProcesses = [];
  
//     while (queue.length > 0 || waitingProcesses.length > 0) {
//       // Add processes that have arrived by the current time
//       while (queue.length > 0 && queue[0].arrivalTime <= currentTime) {
//         waitingProcesses.push(queue.shift());
//       }
  
//       // Sort waiting processes by burst time (LJF prefers longer burst times)
//       waitingProcesses.sort((a, b) => b.burstTime - a.burstTime);
  
//       if (waitingProcesses.length > 0) {
//         const proc = waitingProcesses.shift();
//         const startTime = Math.max(currentTime, proc.arrivalTime);
//         currentTime = startTime + proc.burstTime;
//         result.push({ ...proc, completionTime: currentTime, turnaroundTime: currentTime - proc.arrivalTime, waitingTime: startTime - proc.arrivalTime });
//       } else {
//         currentTime++;
//       }
//     }
  
//     return result;
//   };
  
//   // Priority Scheduling (Non-Preemptive)
//   export const priority = (processes) => {
//     const sorted = [...processes].sort((a, b) => a.arrivalTime - b.arrivalTime);
//     let currentTime = 0;
//     return sorted.map((proc) => {
//       const startTime = Math.max(currentTime, proc.arrivalTime);
//       currentTime = startTime + proc.burstTime;
//       return { ...proc, completionTime: currentTime, turnaroundTime: currentTime - proc.arrivalTime, waitingTime: startTime - proc.arrivalTime };
//     });
//   };
  
//   // Priority Scheduling (Preemptive)
//   export const priorityPreemptive = (processes) => {
//     let currentTime = 0;
//     let queue = [...processes].sort((a, b) => a.arrivalTime - b.arrivalTime);
//     let result = [];
//     let waitingProcesses = [];
  
//     while (queue.length > 0 || waitingProcesses.length > 0) {
//       while (queue.length > 0 && queue[0].arrivalTime <= currentTime) {
//         waitingProcesses.push(queue.shift());
//       }
  
//       waitingProcesses.sort((a, b) => b.priority - a.priority);
  
//       if (waitingProcesses.length > 0) {
//         const proc = waitingProcesses.shift();
//         const startTime = Math.max(currentTime, proc.arrivalTime);
//         currentTime = startTime + proc.burstTime;
//         result.push({ ...proc, completionTime: currentTime, turnaroundTime: currentTime - proc.arrivalTime, waitingTime: startTime - proc.arrivalTime });
//       } else {
//         currentTime++;
//       }
//     }
  
//     return result;
//   };
  
//   // Round Robin Scheduling
//   export const roundRobin = (processes, quantum) => {
//     let currentTime = 0;
//     let queue = [...processes];
//     let result = [];
//     let remainingProcesses = queue.map((proc) => ({ ...proc, remainingBurstTime: proc.burstTime }));
  
//     while (remainingProcesses.length > 0) {
//       let proc = remainingProcesses.shift();
//       const timeSlice = Math.min(proc.remainingBurstTime, quantum);
//       currentTime += timeSlice;
//       proc.remainingBurstTime -= timeSlice;
  
//       if (proc.remainingBurstTime > 0) {
//         remainingProcesses.push(proc);
//       } else {
//         proc.completionTime = currentTime;
//         proc.turnaroundTime = currentTime - proc.arrivalTime;
//         proc.waitingTime = proc.turnaroundTime - proc.burstTime;
//         result.push(proc);
//       }
//     }
  
//     return result;
//   };
  
//   // Calculate Average Turnaround Time and Waiting Time
//   export const calculateMetrics = (processes) => {
//     const totalTAT = processes.reduce((sum, p) => sum + p.turnaroundTime, 0);
//     const totalWT = processes.reduce((sum, p) => sum + p.waitingTime, 0);
//     return { avgTAT: (totalTAT / processes.length).toFixed(2), avgWT: (totalWT / processes.length).toFixed(2) };
//   };