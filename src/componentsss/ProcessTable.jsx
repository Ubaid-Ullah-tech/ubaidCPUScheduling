import React from "react";

const ProcessTable = ({ processes, updateProcess, deleteProcess }) => {
  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    margin: "20px 0",
    fontSize: "16px",
    textAlign: "left",
    marginTop:'5%'
  };

  const headerStyle = {
    backgroundColor: "#333",
    color: "#fff",
    padding: "10px",
  };

  const cellStyle = {
    border: "1px solid #ddd",
    padding: "10px",
  };

  const actionButtonStyle = {
    backgroundColor: "#f44336",
    color: "white",
    border: "none",
    borderRadius: "4px",
    padding: "5px 10px",
    cursor: "pointer",
    fontSize: "14px",
  };

  const rowStyle = {
    textAlign: "center",
  };

  const tableContainerStyle = {
    overflowX: "auto",
  };

  return (
    <div style={tableContainerStyle}>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={headerStyle}>ID</th>
            <th style={headerStyle}>Burst Time</th>
            <th style={headerStyle}>Arrival Time</th>
            <th style={headerStyle}>Priority</th>
            <th style={headerStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>

        {processes.map((process, index) => (
  <tr key={`${process.id}-${index}`} style={rowStyle}>
    <td style={cellStyle}>{process.id}</td>
    <td style={cellStyle}>{process.burstTime}</td>
    <td style={cellStyle}>{process.arrivalTime}</td>
    <td style={cellStyle}>{process.priority}</td>
    <td style={cellStyle}>
      <button style={actionButtonStyle} onClick={() => deleteProcess(process.id)}>
        Delete
      </button>
    </td>
  </tr>
))}
        </tbody>
      </table>
    </div>
  );
};

export default ProcessTable;
