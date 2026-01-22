import { useState } from "react";

const withShowHide = (WrappedComponent) => {
  return function ShowHideHOC(props) {
    const [show, setShow] = useState(true);

    return (
      <div className="mb-4">
        <button
          onClick={() => setShow(!show)}
          className="mb-2 px-4 py-2 bg-blue-600 text-white rounded"
        >
          {show ? "Hide" : "Show"}
        </button>

        {show && <WrappedComponent {...props} />}
      </div>
    );
  };
};

export default withShowHide;
