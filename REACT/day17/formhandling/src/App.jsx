import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [number, setNumber] = useState("");

  const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const evenNumbers = numbersArray.filter(num => num % 2 === 0);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-6">

        {/* 1️⃣ Show Typed Value */}
        <div>
          <h2 className="font-semibold mb-1">1. Show Typed Value</h2>
          <input
            type="text"
            placeholder="Enter name"
            className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setName(e.target.value)}
          />
          <p className="mt-1 text-gray-700">
            Typed Name: <span className="font-medium">{name}</span>
          </p>
        </div>

        {/* 2️⃣ Show Data on Button Click */}
        <div>
          <h2 className="font-semibold mb-1">2. Show Data on Button Click</h2>
          <input
            type="number"
            placeholder="Enter age"
            className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setAge(e.target.value)}
          />
          <button
            onClick={() => setSubmitted(true)}
            className="mt-2 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Submit
          </button>

          {submitted && (
            <p className="mt-1 text-gray-700">Your Age: {age}</p>
          )}
        </div>

        {/* 3️⃣ Age Validation */}
        {submitted && (
          <div>
            {age >= 18 ? (
              <p className="text-green-600 font-semibold">
                Eligible ✅
              </p>
            ) : (
              <p className="text-red-600 font-semibold">
                Not Eligible ❌
              </p>
            )}
          </div>
        )}

        {/* 4️⃣ Show Even Numbers */}
        <div>
          <h2 className="font-semibold mb-1">4. Even Numbers from Array</h2>
          <div className="flex gap-2 flex-wrap">
            {evenNumbers.map((num) => (
              <span
                key={num}
                className="px-3 py-1 bg-green-100 text-green-700 rounded"
              >
                {num}
              </span>
            ))}
          </div>
        </div>

        {/* 5️⃣ Odd Number Check */}
        <div>
          <h2 className="font-semibold mb-1">5. Odd Number Check</h2>
          <input
            type="number"
            placeholder="Enter number"
            className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setNumber(e.target.value)}
          />

          {number !== "" && (
            number % 2 === 0 ? (
              <p className="text-green-600 mt-1">
                Even Number
              </p>
            ) : (
              <p className="text-red-600 mt-1">
                This is not an even number
              </p>
            )
          )}
        </div>

        {/* 6️⃣ Show Array Using map */}
        <div>
          <h2 className="font-semibold mb-1">6. Show Array using map</h2>
          <div className="grid grid-cols-5 gap-2">
            {numbersArray.map((num) => (
              <div
                key={num}
                className="bg-gray-200 text-center py-2 rounded font-medium"
              >
                {num}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
