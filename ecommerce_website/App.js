import { Route } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/pages/About";
import Store from "./components/pages/Store";
import { CartProvider } from "./store/CartContext";
import Home from './components/pages/Home';
import ContactUs from './components/pages/ContactUs';



// const router = createBrowserRouter([
//   { path: '/', element: <Home />},
//   { path: '/about', element: <About />},
//   { path: '/store', element: <Store />},
// ])

async function addUserHandler(user) {
  const respone = await fetch("https://react-http-9242d-default-rtdb.firebaseio.com/users.json", {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const data = await respone.json();
  console.log(data);
}


function App() {

  return (
    // <RouterProvider router={router}>
      <CartProvider>
      <Header />
      {/* <Route path='/'>
        <Home />
      </Route> */}
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/contact_us'>
      <ContactUs  onAddUser={addUserHandler}/>
      </Route>
      <Route path='/store'>
      <Store />
      </Route>
      
      {/* <Cart data={products}/> */}
      <Footer />
    </CartProvider>
    // </RouterProvider>
    
  );
}

export default App;
