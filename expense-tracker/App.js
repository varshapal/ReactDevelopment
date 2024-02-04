import Header from "./components/Header";
import Auth from "./Pages/Auth";
import { useSelector} from "react-redux";
import Home from "./Pages/Home";
import Expense from "./Pages/Expense";

function App() {
  const isAuth = useSelector(state => state.auth.isAuthentication);
  

  return (
    <div>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <Expense />}
      
    </div>
  );
}

export default App;
