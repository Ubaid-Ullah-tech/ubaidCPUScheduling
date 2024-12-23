import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

const ProcessForm = ({ addProcess }) => {
  const { requireAuth } = useAuth();

  const [formData, setFormData] = useState({
    id: "",
    burstTime: "",
    arrivalTime: "",
    priority: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.id || !formData.burstTime || !formData.arrivalTime || !formData.priority) {
      alert("All fields are required!");
      return;
    }

    // Check if user is authenticated before adding process
    requireAuth(() => {
      addProcess({
        ...formData,
        burstTime: Number(formData.burstTime),
        arrivalTime: Number(formData.arrivalTime),
        priority: Number(formData.priority),
      });

      setFormData({ id: "", burstTime: "", arrivalTime: "", priority: "" });
      alert("Process added successfully!");
    });
  };

  return (
    <form className="process-form" onSubmit={handleSubmit}>
      <input
        className="mx-5 my-2"
        type="text"
        name="id"
        placeholder="Process ID"
        value={formData.id}
        onChange={handleChange}
      />
      <input
        className="mx-5 my-2"
        type="number"
        name="burstTime"
        placeholder="Burst Time"
        value={formData.burstTime}
        onChange={handleChange}
      />
      <input
        className="mx-5 my-2"
        type="number"
        name="arrivalTime"
        placeholder="Arrival Time"
        value={formData.arrivalTime}
        onChange={handleChange}
      />
      <input
        className="mx-5 my-2"
        type="number"
        name="priority"
        placeholder="Priority"
        value={formData.priority}
        onChange={handleChange}
      />
      <button className="mx-5 my-2" type="submit">
        Add Process
      </button>
    </form>
  );
};

export default ProcessForm;








// import React, { useState } from "react";
// import { useAuth } from "../context/AuthContext";

// const ProcessForm = ({ addProcess }) => {
//   const { requireAuth } = useAuth();

//   const [formData, setFormData] = useState({
//     id: "",
//     burstTime: "",
//     arrivalTime: "",
//     priority: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!formData.id || !formData.burstTime || !formData.arrivalTime || !formData.priority) {
//       alert("All fields are required!");
//       return;
//     }

//     requireAuth(() => {
//       addProcess({
//         ...formData,
//         burstTime: Number(formData.burstTime),
//         arrivalTime: Number(formData.arrivalTime),
//         priority: Number(formData.priority),
//       });

//       setFormData({ id: "", burstTime: "", arrivalTime: "", priority: "" });
//       alert("Process added successfully!");
//     });
//   };

//   return (
//     <form className="process-form" onSubmit={handleSubmit}>
//       <input
//         className="mx-5 my-2"
//         type="text"
//         name="id"
//         placeholder="Process ID"
//         value={formData.id}
//         onChange={handleChange}
//       />
//       <input
//         className="mx-5 my-2"
//         type="number"
//         name="burstTime"
//         placeholder="Burst Time"
//         value={formData.burstTime}
//         onChange={handleChange}
//       />
//       <input
//         className="mx-5 my-2"
//         type="number"
//         name="arrivalTime"
//         placeholder="Arrival Time"
//         value={formData.arrivalTime}
//         onChange={handleChange}
//       />
//       <input
//         className="mx-5 my-2"
//         type="number"
//         name="priority"
//         placeholder="Priority"
//         value={formData.priority}
//         onChange={handleChange}
//       />
//       <button className="mx-5 my-2" type="submit">
//         Add Process
//       </button>
//     </form>
//   );
// };

// export default ProcessForm;











// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// const ProcessForm = ({ addProcess }) => {
  
//   const { isAuthenticated } = useAuth();
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     id: "",
//     burstTime: "",
//     arrivalTime: "",
//     priority: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!isAuthenticated) {
//       alert("Please log in to add a process.");
//       navigate("/login");
//       return;
//     }

//     if (!formData.id || !formData.burstTime || !formData.arrivalTime || !formData.priority) {
//       alert("All fields are required!");
//       return;
//     }


//     addProcess({
//       ...formData,
//       burstTime: Number(formData.burstTime),
//       arrivalTime: Number(formData.arrivalTime),
//       priority: Number(formData.priority),
//     });

//     setFormData({ id: "", burstTime: "", arrivalTime: "", priority: "" });
//   };

//   return (
//     <form className="process-form" onSubmit={handleSubmit}>
//       <input className="mx-5 my-2" type="text" name="id" placeholder="Process ID" value={formData.id} onChange={handleChange} />
//       <input className="mx-5 my-2" type="number" name="burstTime" placeholder="Burst Time" value={formData.burstTime} onChange={handleChange} />
//       <input className="mx-5 my-2" type="number" name="arrivalTime" placeholder="Arrival Time" value={formData.arrivalTime} onChange={handleChange} />
//       <input className="mx-5 my-2" type="number" name="priority" placeholder="Priority" value={formData.priority} onChange={handleChange} />
//       <button className="mx-5 my-2" type="submit">Add Process</button>
//     </form>
//   );
// };

// export default ProcessForm;