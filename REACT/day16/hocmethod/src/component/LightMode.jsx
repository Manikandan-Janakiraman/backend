import withToggle from "../hoc/withToggle";

const LightMode = ({ isOn, toggle }) => (
  <div className="p-4 border rounded">
    <button
      onClick={toggle}
      className="mb-2 px-4 py-2 bg-purple-600 text-white rounded"
    >
      Toggle Mode
    </button>

    {isOn && (
      <div className="p-3 bg-yellow-200 rounded">
        🌞 Light Mode
      </div>
    )}
  </div>
);

export default withToggle(LightMode);
