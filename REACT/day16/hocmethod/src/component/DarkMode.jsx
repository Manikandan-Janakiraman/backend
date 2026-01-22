import withToggle from "../hoc/withToggle";


const DarkMode = ({ isOn, toggle }) => (
  <div className="p-4 border rounded">
    <button
      onClick={toggle}
      className="mb-2 px-4 py-2 bg-purple-600 text-white rounded"
    >
      Toggle Mode
    </button>

    {!isOn && (
      <div className="p-3 bg-gray-900 text-white rounded">
        🌙 Dark Mode
      </div>
    )}
  </div>
);

export default withToggle(DarkMode);
