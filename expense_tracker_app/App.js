import { Route, Switch} from 'react-router-dom';
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import AuthContext from './store/auth-context';
import { useContext } from 'react';
import ProfilePage from './pages/ProfilePage';

function App() {
  const authCtx = useContext(AuthContext);


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
      </Switch>
      
      
    </div>
  );
}

export default App;
