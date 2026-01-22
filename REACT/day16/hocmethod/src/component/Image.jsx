import withShowHide from "../hoc/withShowHide";

const Image = () => (
  <img
    src="https://www.shutterstock.com/image-photo/sun-sets-behind-mountain-ranges-600nw-2479236003.jpg"
    alt="sample"
    className="rounded shadow"
  />
);

export default withShowHide(Image);