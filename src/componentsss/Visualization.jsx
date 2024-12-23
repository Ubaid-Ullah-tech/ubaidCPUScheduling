import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import {
  fcfs,
  sjf,
  sjfPreemptive,
  ljf,
  ljfPreemptive,
  priority,
  priorityPreemptive,
  roundRobin,
  calculateMetrics,
} from "../algorithms/scheduling";

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement);

const Visualization = ({ processes }) => {
  const [algorithm, setAlgorithm] = useState("FCFS");
  const [metrics, setMetrics] = useState({});
  const [result, setResult] = useState([]);
  const [recommendation, setRecommendation] = useState("");

  useEffect(() => {
    let tempResult = [];
    let tempMetrics = {};

    switch (algorithm) {
      case "FCFS":
        tempResult = fcfs(processes);
        break;
      case "SJF":
        tempResult = sjf(processes);
        break;
      case "SJFPreemptive":
        tempResult = sjfPreemptive(processes);
        break;
      case "LJF":
        tempResult = ljf(processes);
        break;
      case "LJFPreemptive":
        tempResult = ljfPreemptive(processes);
        break;
      case "Priority":
        tempResult = priority(processes);
        break;
      case "PriorityPreemptive":
        tempResult = priorityPreemptive(processes);
        break;
      case "RoundRobin":
        tempResult = roundRobin(processes, 90);
        break;
      default:
        break;
    }

    tempMetrics = calculateMetrics(tempResult);
    setResult(tempResult);
    setMetrics(tempMetrics);
  }, [processes, algorithm]);

  const chartData = {
    labels: result.map((p) => `P${p.id}`),
    datasets: [
      {
        label: "Execution",
        data: result.map((p) => p.completionTime),
        borderColor: "rgba(75,192,192,1)",
        fill: false,
        tension: 0.1,
      },
    ],
  };

  useEffect(() => {
    if (metrics.avgTAT && metrics.avgWT) {
      const bestAlgorithm = recommendAlgorithm(metrics);
      setRecommendation(bestAlgorithm);
    }
  }, [metrics]);

  const recommendAlgorithm = (metrics) => {
    const { avgTAT, avgWT } = metrics;
    if (avgTAT <= 5 && avgWT <= 3) {
      return "FCFS is a good choice for your processes.";
    } else if (avgTAT > 5 && avgWT <= 4) {
      return "SJF is a better choice for reducing waiting time.";
    } else {
      return "Round Robin might be better for your processes.";
    }
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "800px",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#333" }}>
        Scheduling Algorithms Visualization
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <label style={{ fontWeight: "bold", color: "#555" }}>
          Select Algorithm:
        </label>
        <select
          onChange={(e) => setAlgorithm(e.target.value)}
          value={algorithm}
          style={{
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            backgroundColor: "#fff",
            fontSize: "14px",
          }}
        >
          <option value="FCFS">FCFS</option>
          <option value="SJF">SJF</option>
          <option value="SJFPreemptive">SJF Preemptive</option>
          <option value="LJF">LJF</option>
          <option value="LJFPreemptive">LJF Preemptive</option>
          <option value="Priority">Priority</option>
          <option value="PriorityPreemptive">Priority Preemptive</option>
          <option value="RoundRobin">Round Robin</option>
        </select>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <Line data={chartData} />
      </div>

      <h3 style={{ color: "#444" }}>
        Metrics for {algorithm} Algorithm
      </h3>
      <p style={{ color: "#666" }}>
        Average Turnaround Time: <strong>{metrics.avgTAT}</strong>
      </p>
      <p style={{ color: "#666" }}>
        Average Waiting Time: <strong>{metrics.avgWT}</strong>
      </p>

      {recommendation && (
        <div
          style={{
            marginTop: "20px",
            padding: "10px",
            border: "1px solid #4caf50",
            borderRadius: "4px",
            backgroundColor: "#e8f5e9",
          }}
        >
          <h4 style={{ color: "#4caf50" }}>Recommendation:</h4>
          <p>{recommendation}</p>
        </div>
      )}
    </div>
  );
};

export default Visualization;