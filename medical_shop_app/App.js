import React from "react";
import { ProductProvider } from "./store/FormContext";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";



function App() {
  return (
    <ProductProvider>
      <Cart />
      <ProductForm />
      <ProductList />
    </ProductProvider>
  );
}

export default App;
