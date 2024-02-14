
import { useSelector } from 'react-redux';
import Home from './Pages/Home';
import Auth from './Pages/Auth';

function App() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  return (
    <div>
      {!isAuth && <Auth />}
      {isAuth && <Home />}
      
      
      
      
    </div>
  );
}

export default App;
