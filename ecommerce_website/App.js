import { Route, Switch } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/pages/About";
import Store from "./components/pages/Store";
import { CartProvider } from "./store/CartContext";
import Home from './components/pages/Home';
import ContactUs from './components/pages/ContactUs';
import Product from './components/pages/Product';
import ProductDetail from './components/pages/ProductDetail';



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
      <main>
        <Switch>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/contact_us'>
      <ContactUs  onAddUser={addUserHandler}/>
      </Route>
      <Route path='/store' exact>
      <Store />
      </Route>
      <Route path='/product' exact>
      <Product />
      </Route>
      {/* <Route path='/product/:productId'>
      <Store />
      </Route> */}
      <Route path='/product/:productId'>
      <ProductDetail />
      </Route>
      </Switch>
      </main>
      {/* <Cart data={products}/> */}
      {/* <Footer /> */}
    </CartProvider>
    // </RouterProvider>
    
  );
}

export default App;
