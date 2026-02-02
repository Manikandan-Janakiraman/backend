import React, { useEffect, useRef, useState } from "react";

const State = () => {
  /* ----------------------------------
     ✅ Task 1: Form Previous Value Tracker
  ---------------------------------- */
  const [name, setName] = useState("");
  const prevNameRef = useRef("");

  const handleNameSubmit = (e) => {
    e.preventDefault();
    prevNameRef.current = name;
  };

  /* ----------------------------------
     ✅ Task 2: Auto Focus & Clear Form
  ---------------------------------- */
  const [email, setEmail] = useState("");
  const emailRef = useRef(null);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    emailRef.current.focus();
  };

  /* ----------------------------------
     ✅ Task 3: Render Count in Form
  ---------------------------------- */
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
  });

  /* ----------------------------------
     ✅ Task 4: Prevent Multiple Submits
  ---------------------------------- */
  const submitBtnRef = useRef(null);

  const handleRegister = (e) => {
    e.preventDefault();
    submitBtnRef.current.disabled = true;

    setTimeout(() => {
      submitBtnRef.current.disabled = false;
    }, 3000);
  };

  /* ----------------------------------
     ✅ Task 5: Timer Based Form Submit
  ---------------------------------- */
  const [feedback, setFeedback] = useState("");
  const timerRef = useRef(null);

  useEffect(() => {
    if (feedback.length > 0 && !timerRef.current) {
      timerRef.current = setTimeout(() => {
        alert("Auto Submitted Feedback: " + feedback);
        setFeedback("");
        timerRef.current = null;
      }, 10000);
    }

    return () => clearTimeout(timerRef.current);
  }, [feedback]);

  /* ----------------------------------
     ✅ Task 6: Previous Input Comparison
  ---------------------------------- */
  const [phone, setPhone] = useState("");
  const prevPhoneRef = useRef("");

  const [phoneMsg, setPhoneMsg] = useState("");

  useEffect(() => {
    if (prevPhoneRef.current !== "") {
      setPhoneMsg(
        prevPhoneRef.current === phone
          ? "Same as previous"
          : "Value changed"
      );
    }
    prevPhoneRef.current = phone;
  }, [phone]);

  /* ----------------------------------
     ✅ Task 7: Scroll to Error Field
  ---------------------------------- */
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    city: ""
  });

  const inputRefs = {
    firstName: useRef(null),
    lastName: useRef(null),
    city: useRef(null)
  };

  const handleLongFormSubmit = (e) => {
    e.preventDefault();

    for (let key in formData) {
      if (!formData[key]) {
        inputRefs[key].current.scrollIntoView({ behavior: "smooth" });
        inputRefs[key].current.focus();
        break;
      }
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>useState + useRef Form Tasks</h1>

      {/* Task 1 */}
      <h3>1️⃣ Previous Name Tracker</h3>
      <form onSubmit={handleNameSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
        <button>Submit</button>
      </form>
      <p>Previous Name: {prevNameRef.current}</p>

      <hr />

      {/* Task 2 */}
      <h3>2️⃣ Auto Focus & Clear</h3>
      <form onSubmit={handleEmailSubmit}>
        <input
          ref={emailRef}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />
        <button>Submit</button>
      </form>

      <hr />

      {/* Task 3 */}
      <h3>3️⃣ Render Count</h3>
      <input
        placeholder="Username"
        value={credentials.username}
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
      />
      <input
        placeholder="Password"
        type="password"
        value={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />
      <p>Render Count: {renderCount.current}</p>

      <hr />

      {/* Task 4 */}
      <h3>4️⃣ Prevent Multiple Submits</h3>
      <form onSubmit={handleRegister}>
        <button ref={submitBtnRef}>Register</button>
      </form>

      <hr />

      {/* Task 5 */}
      <h3>5️⃣ Timer Based Auto Submit</h3>
      <textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        placeholder="Type feedback..."
      />

      <hr />

      {/* Task 6 */}
      <h3>6️⃣ Previous Input Comparison</h3>
      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone number"
      />
      <p>{phoneMsg}</p>

      <hr />

      {/* Task 7 */}
      <h3>7️⃣ Scroll to First Error</h3>
      <form onSubmit={handleLongFormSubmit}>
        <input
          ref={inputRefs.firstName}
          placeholder="First Name"
          value={formData.firstName}
          onChange={(e) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
        />
        <input
          ref={inputRefs.lastName}
          placeholder="Last Name"
          value={formData.lastName}
          onChange={(e) =>
            setFormData({ ...formData, lastName: e.target.value })
          }
        />
        <input
          ref={inputRefs.city}
          placeholder="City"
          value={formData.city}
          onChange={(e) =>
            setFormData({ ...formData, city: e.target.value })
          }
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default State;
