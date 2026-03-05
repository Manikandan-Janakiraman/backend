import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {

  const [name, setName] = useState("");
  const [fileName, setFileName] = useState(null);
  const [userdata, setUserData] = useState([]);

  const handleClick = async (e) => {

    e.preventDefault();

    const formData = new FormData();

    formData.append("name", name);
    formData.append("image", fileName);

    try {

      const res = await axios.post(
        "http://localhost:5000/api/crud/uploaddata",
        formData
      );

      alert(res.data.msg);

      fetchdatas();

    } catch (error) {

      console.log(error);

    }

  };


  const fetchdatas = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/crud/getdataforimage"
      );

      setUserData(res.data.datasend);

    } catch (error) {

      console.log(error);

    }

  };


  useEffect(() => {

    fetchdatas();

  }, []);



  return (
    <div style={{ padding: "20px" }}>

      <h2>Upload Image</h2>

      <input
        type="text"
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        type="file"
        onChange={(e) => setFileName(e.target.files[0])}
      />

      <br /><br />

      <button onClick={handleClick}>Add</button>

      <hr />

      <h2>Data</h2>

      {userdata.map((e) => (

        <div key={e._id}>

          <h3>{e.name}</h3>

          <img
            src={`http://localhost:5000/uploads/${e.image}`}
            width="200"
          />

        </div>

      ))}

    </div>
  );
};

export default App;