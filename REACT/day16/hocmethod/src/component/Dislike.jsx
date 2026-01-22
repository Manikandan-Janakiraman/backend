import withCounter from "../hoc/withCounter";

const Dislike = ({ count, increment }) => (
  <button
    onClick={increment}
    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
  >
    👎 Dislike {count}
  </button>
);

export default withCounter(Dislike);