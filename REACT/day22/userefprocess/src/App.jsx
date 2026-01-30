import { useEffect, useRef, useState } from "react";

const App = () => {
  const headingRef = useRef();
  const boxRef = useRef();
  const focusInputRef = useRef();

  const nameRef = useRef();
  const emailRef = useRef();

  const counterRef = useRef(0);
  const counterDisplayRef = useRef();

  const paraRef = useRef();
  const scrollRef = useRef();

  const sec1 = useRef();
  const sec2 = useRef();
  const sec3 = useRef();
  const sec4 = useRef();

  const setValueRef = useRef();

  const [count, setCount] = useState(0);
  const prevCountRef = useRef(0);

  useEffect(() => {
    focusInputRef.current.focus();
  }, []);

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  const btn =
    "px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition";
  const input =
    "border px-3 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400";

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-10">
      {/* 1️⃣ */}
      <div className="space-y-3">
        <h1 ref={headingRef} className="text-3xl font-bold">
          Hello World
        </h1>
        <button
          className={btn}
          onClick={() => (headingRef.current.innerText = "Text Changed!")}
        >
          Change Heading
        </button>
      </div>

      {/* 2️⃣ */}
      <div className="space-y-3">
        <div
          ref={boxRef}
          className="w-32 h-32 bg-gray-300 rounded"
        ></div>
        <button
          className={btn}
          onClick={() => (boxRef.current.style.background = "#f97316")}
        >
          Change Color
        </button>
      </div>

      {/* 3️⃣ */}
      <div className="space-y-2">
        <input
          ref={focusInputRef}
          className={input}
          placeholder="Auto focus input"
        />
      </div>

      {/* 4️⃣ */}
      <form
        className="space-y-3"
        onSubmit={(e) => {
          e.preventDefault();
          alert(
            `Name: ${nameRef.current.value}, Email: ${emailRef.current.value}`
          );
        }}
      >
        <input ref={nameRef} className={input} placeholder="Name" />
        <input ref={emailRef} className={input} placeholder="Email" />
        <button className={btn}>Submit</button>
      </form>

      {/* 5️⃣ */}
      <div className="space-y-3">
        <p ref={counterDisplayRef} className="text-lg font-semibold">
          Count: 0
        </p>
        <button
          className={btn}
          onClick={() => {
            counterRef.current++;
            counterDisplayRef.current.innerText =
              "Count: " + counterRef.current;
          }}
        >
          Increase Counter
        </button>
      </div>

      {/* 6️⃣ */}
      <div className="space-y-3">
        <p ref={paraRef} className="text-gray-700">
          This is paragraph text
        </p>
        <button
          className={btn}
          onClick={() => alert(paraRef.current.innerText)}
        >
          Show Paragraph Text
        </button>
      </div>

      {/* 7️⃣ */}
      <button
        className={btn}
        onClick={() => scrollRef.current.scrollIntoView({ behavior: "smooth" })}
      >
        Scroll to Section
      </button>

      <div className="h-96"></div>
      <h2 ref={scrollRef} className="text-2xl font-bold">
        Scrolled Section
      </h2>

      {/* 8️⃣ */}
      <div className="flex gap-2 flex-wrap">
        <button className={btn} onClick={() => sec1.current.scrollIntoView()}>
          Section 1
        </button>
        <button className={btn} onClick={() => sec2.current.scrollIntoView()}>
          Section 2
        </button>
        <button className={btn} onClick={() => sec3.current.scrollIntoView()}>
          Section 3
        </button>
        <button className={btn} onClick={() => sec4.current.scrollIntoView()}>
          Section 4
        </button>
      </div>

      <div className="h-64"></div>
      <h3 ref={sec1} className="text-xl font-semibold">
        Section 1
      </h3>
      <div className="h-64"></div>
      <h3 ref={sec2} className="text-xl font-semibold">
        Section 2
      </h3>
      <div className="h-64"></div>
      <h3 ref={sec3} className="text-xl font-semibold">
        Section 3
      </h3>
      <div className="h-64"></div>
      <h3 ref={sec4} className="text-xl font-semibold">
        Section 4
      </h3>

      {/* 9️⃣ */}
      <div className="space-y-3">
        <input
          ref={setValueRef}
          className={input}
          placeholder="Set value here"
        />
        <button
          className={btn}
          onClick={() => (setValueRef.current.value = "Hello Developer")}
        >
          Set Value
        </button>
      </div>

      {/* 🔟 */}
      <div className="space-y-2">
        <h3 className="text-xl font-bold">Current Count: {count}</h3>
        <h4 className="text-gray-600">
          Previous Count: {prevCountRef.current}
        </h4>
        <button
          className={btn}
          onClick={() => setCount((prev) => prev + 1)}
        >
          Increase
        </button>
      </div>
    </div>
  );
};

export default App;
