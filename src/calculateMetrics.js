export const calculateMetrics = (processes) => {
    let totalWaitingTime = 0;
    let totalTurnaroundTime = 0;
  
    processes.forEach((process) => {
      totalWaitingTime += process.waitingTime;
      totalTurnaroundTime += process.turnaroundTime;
    });
  
    const avgWT = totalWaitingTime / processes.length;
    const avgTAT = totalTurnaroundTime / processes.length;
  
    return { avgWT, avgTAT };
  };
  