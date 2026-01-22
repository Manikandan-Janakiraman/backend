import Like from "./component/Like";
import Dislike from "./component/Dislike";
import Text from "./component/Text";
import Image from "./component/Image";
import LightMode from "./component/LightMode";
import DarkMode from "./component/DarkMode";

function App() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex gap-4">
        <Like />
        <Dislike />
      </div>

      <Text />
      <Image />

      <div className="grid grid-cols-2 gap-4">
        <LightMode />
        <DarkMode />
      </div>
    </div>
  );
}

export default App;
