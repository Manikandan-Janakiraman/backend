import withShowHide from "../hoc/withShowHide";


const Text = () => (
  <p className="p-4 bg-gray-100 rounded">Hello World 👋</p>
);

export default withShowHide(Text);
