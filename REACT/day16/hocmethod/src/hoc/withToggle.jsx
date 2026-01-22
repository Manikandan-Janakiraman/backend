import { useState } from "react";

const withToggle = (WrappedComponent) => {
  return function ToggleHOC(props) {
    const [isOn, setIsOn] = useState(false);

    const toggle = () => setIsOn(prev => !prev);

    return (
      <WrappedComponent
        {...props}
        isOn={isOn}
        toggle={toggle}
      />
    );
  };
};

export default withToggle;
