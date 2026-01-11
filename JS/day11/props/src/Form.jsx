import UserForm from "./UserForm";

const App = () => {
  const userData = {
    name: "John",
    email: "john@example.com",
  };

  const handleFormSubmit = (data) => {
    console.log("Submitted Data:", data);
    alert(`User Saved: ${data.name}`);
  };

  return (
    <div>
      <UserForm
        initialData={userData}
        onSubmit={handleFormSubmit}
        // {/* submitLabel not passed → default "Save" */}
      />
    </div>
  );
};

export default App;
