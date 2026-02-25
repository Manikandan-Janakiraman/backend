// import axios from "axios";

// function App() {
//   const sendData = async () => {
//     const userData = {
//       name: "Mani",
//       skill: "MERN Developer",
//       experience: 6,
//     };

//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/user/",
//         userData
//       );
//       console.log("Backend Response:", response.data);
//     } catch (error) {
//       console.error("Error:", error.response?.data || error.message);
//     }
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h2>API Test</h2>
//       <button onClick={sendData}>Send Object</button>
//     </div>
//   );
// }

// export default App;


import axios from "axios";
import { useState } from "react";

const App = () => {
  const [responseData, setResponseData] = useState(null);

  const sendData = async () => {
    const userData = {
      name: "Arun",
      skill: "MERN Developer",
      experience: 4,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/user",
        userData
      );

      // console.log("Backend Response:", response.data);
      setResponseData(response.data);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>API Test</h2>
      <button onClick={sendData}>Send Object</button>

      {responseData && (
        <div style={{ marginTop: "20px" }}>
          <h3>Response From Backend:</h3>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;