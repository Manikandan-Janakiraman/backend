import UserCard from "./UserCard";
import Button from "./Button";
import CounterApp from "./CounterApp";
import GrandParent from "./GrandParent";
import UserForm from "./UserForm";


function App() {
  return (
    <>
    <div>
      <UserCard
        name="John"
        age={25}
        city="Chennai"
        isAdmin={true}
      />
    </div>

       <div>
      {/* Uses default variant = "primary" */}
      <Button
        label="Save"
        onClick={() => alert("Save clicked")}
      />

      {/* Overrides default variant */}
      <Button
        label="Cancel"
        variant="secondary"
        onClick={() => alert("Cancel clicked")}
      />
    </div>

    <CounterApp />

    <GrandParent />

    

</>
  );
}

export default App;
