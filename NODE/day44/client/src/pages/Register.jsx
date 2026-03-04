import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/register", form);
            alert(res.data.message);
            navigate("/");
        } catch (err) {
            console.log(err);
            alert(err.response?.data?.message || "Registration failed");
        }
    };

    return (
        <div className="container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input name="name" onChange={handleChange} placeholder="Enter Name" required />
                <input name="email" onChange={handleChange} placeholder="Enter email" required />
                <input name="password" type="password" onChange={handleChange} placeholder="Enter password" required />
                <button type="submit">Register</button>
            </form>
            <p onClick={() => navigate("/")}>Already have account? Login</p>
        </div>
    );
}