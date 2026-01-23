import { useState } from "react"

const StudentRegistration = () => {

    const [student, setStudent] = useState({
        name: "",
        email: "",
        course: "",
        age: "",
    });

    const [submitted, setSubmitted] = useState(false);

    // 2️⃣ Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudent((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // 3️⃣ Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };


    return (
        <>

            <div className="bg-blue-600 text-white flex p-3"> Object + Conditional Rendering</div>
            <div className="flex flex-col my-3 items-center">
                <h2>Student Registration</h2>


                <form onClick={handleSubmit}

                    className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
                >
                    <input

                        onChange={handleChange}   //listener
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={student.name}

                        className="w-full p-2 border rounded mb-3"
                        required
                    />

                    <input
                        onChange={handleChange}
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={student.email}

                        className="w-full p-2 border rounded mb-3"
                        required
                    />

                    <input
                        onChange={handleChange}
                        type="text"
                        name="course"
                        value={student.course}
                        placeholder="Course"
                        className="w-full p-2 border rounded mb-3"
                        required
                    />

                    <input
                        onChange={handleChange}
                        value={student.age}
                        type="number"
                        name="age"
                        placeholder="Age"
                        className="w-full p-2 border rounded mb-3"
                        required
                    />

                    <button   //listener
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
                    >
                        Submit
                    </button>
                </form>


                {/* Conditional Rendering */}
                {submitted && (
                    <div className="mt-6 w-full max-w-md">
                        {parseInt(student.age) < 18 ? (
                            <p className="text-red-500 font-semibold text-center">
                                Not eligible for course
                            </p>
                        ) : (
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h2 className="text-xl font-bold mb-2">Student Details</h2>
                                <p>
                                    <strong>Name:</strong> {student.name}
                                </p>
                                <p>
                                    <strong>Email:</strong> {student.email}
                                </p>
                                <p>
                                    <strong>Course:</strong> {student.course}
                                </p>
                                <p>
                                    <strong>Age:</strong> {student.age}
                                </p>
                            </div>
                        )}
                    </div>
                )}

            </div>
        </>
    )
}
export default StudentRegistration