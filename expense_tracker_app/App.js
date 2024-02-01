import { Route, Switch} from 'react-router-dom';
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import AuthContext from './store/auth-context';
import { useContext, useEffect, useState, useCallback } from 'react';
import ProfilePage from './pages/ProfilePage';
import ProfileData from './pages/ProfileData';
import ForgotPassword from './pages/ForgotPassword';
import ExpenseForm from './pages/ExpenseForm';

function App() {
  const authCtx = useContext(AuthContext);
  const [userData, setUserData] = useState([]);

//get request
  const fetchData = useCallback(async () => {
    try {
        const response = await fetch('https://react-http-9242d-default-rtdb.firebaseio.com/profile.json');
    // method: 'POST',
    // body: JSON.stringify({
    //     idToken: authCtx.token
    // }),
    // headers: {
    //     'Content-Type': 'application/json'
    // }

const data = await response.json();
//console.log("data",data);

const loadedData = [];

for(const key in data) {
    loadedData.push({
        id: key,
        name: data[key].name,
        photoUrl: data[key].photoUrl
    })
}
//console.log("loadedData",loadedData);
setUserData(loadedData);
//console.log("l",loadedData);

} catch(error) {
    console.log(error);
}
}, []);

//post request
// const postDataOnServer = async () => {
//   const response = await fetch('https://react-http-9242d-default-rtdb.firebaseio.com/profile.json', {
//     method: 'POST',
//     body: JSON.stringify(profile),
//     headers: {
//         'Content-Type': 'application/json'
//     }
// })
// const data = await response.json();
// console.log(data);
// }

useEffect(() => {
  fetchData();
}, [fetchData]);

  return (
    <div>
      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>
      
      {authCtx.isLoggedIn && <Route path='/' exact>
        <Home />
      </Route>}

      <Route path="/profile_page">
          <ProfilePage />
        </Route>

        <Route path="/profile_data">
          <ProfileData users={userData}/>
        </Route>

        <Route path="/forgot_password">
          <ForgotPassword />
        </Route>

        <Route path="/expense_form">
          <ExpenseForm />
        </Route>
      </Switch>
      {/* <ProfileData users={userData}/> */}
      
    </div>
  );
}

export default App;
