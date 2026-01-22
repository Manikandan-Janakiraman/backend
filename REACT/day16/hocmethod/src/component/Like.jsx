import withCounter from "../hoc/withCounter";

const Like = ({ count, increment }) => (
  <button
    onClick={increment}
    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
  >
    👍 Like {count}
  </button>
);

export default withCounter(Like);
