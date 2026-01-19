import { useLocation } from "react-router-dom";

const Profile = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const name = params.get("name");
  const age = params.get("age");

  return (
    <div>
      <h2>Profile</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default Profile;
