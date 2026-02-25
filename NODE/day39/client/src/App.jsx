import axios from "axios";

function App() {
  const sendData = async () => {
    const userData = {
      name: "Mani",
      skill: "MERN Developer",
      experience: 6,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/data",
        userData
      );
      console.log("Backend Response:", response.data);
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>API Test</h2>
      <button onClick={sendData}>Send Object</button>
    </div>
  );
}

export default App;