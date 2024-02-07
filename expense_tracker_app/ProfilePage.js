import { useContext, useEffect, useRef, useState, useCallback } from "react";
import AuthContext from "../store/auth-context";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const ProfilePage = () => {
  const [profileList, setProfileList] = useState([]);
  const nameInputRef = useRef();
  const photoUrlRef = useRef();
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const updateHandler = async (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredPhotoUrl = photoUrlRef.current.value;

    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBL0Dxkr3qq-HpRREjZfDFI5--szzAAycs",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: `${authCtx.token}`,
          displayName: enteredName,
          photoUrl: enteredPhotoUrl,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log("profile", data);
    alert("profile completed");

    const response1 = await fetch(
      "https://react-http-9242d-default-rtdb.firebaseio.com/users.json",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: `${authCtx.token}`,
          displayName: enteredName,
          photoUrl: enteredPhotoUrl,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data1 = await response1.json();
    console.log("profile", data1);
  };

  const fetchData = async () => {
    const response2 = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyBL0Dxkr3qq-HpRREjZfDFI5--szzAAycs",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: `${authCtx.token}`,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data2 = await response2.json();
    console.log("data2", data2);

    nameInputRef.current.value = data2.users[0].displayName;
    photoUrlRef.current.value = data2.users[0].photoUrl;
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section>
      <h3>Contact Details</h3>
      <form onSubmit={updateHandler}>
        <button>Cancel</button>
        <label>
          Full Name:
          <input type="text" ref={nameInputRef} />
        </label>
        <label>
          Profile Photo URL
          <input type="text" ref={photoUrlRef} />
        </label>
        <button type="submit">update</button>
      </form>

      

      <p>
        <strong>Profile List</strong>
        {profileList.map((item) => (
          <p key={item.id}>
            {item.name}- {item.photoUrl}-{" "}
            {/* <button onClick={() => deteletExpense(item.id)}>Delete</button>{" "}
            <button onClick={() => editHandler(item.id)}>Edit</button> */}
          </p>
        ))}
      </p>
      {/* <ProfileData users={profileList}/> */}
    </section>
  );
};

export default ProfilePage;
