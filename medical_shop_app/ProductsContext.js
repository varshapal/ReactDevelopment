import { createContext, useEffect, useState } from "react";

const ProductsContext = createContext();

const ProductsProvider = ({children}) => {
    const [product, setProducts] = useState([]);
    

    useEffect(() => {
        fetchProducts();
    }, [])


    const fetchProducts = async () => {
        try {
            const response = await fetch('https://crudcrud.com/api/533b4e5acace443d90b5e982dc55af67/product'); 
                const data = await response.json();
                if(data) {
                    setProducts(data || []);
                }
                console.log('get request data', data);
            } catch(error) {
            console.log(error);
        }
    };

    const updateServer = async (product) => {
        try {
            const response = await fetch('https://crudcrud.com/api/533b4e5acace443d90b5e982dc55af67/product', {
                method: 'Post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product)
            })
            const data = await response.json();
            console.log('post request data', data);
        } catch(error) {
            console.log(error);
        }
    }

    return (
        <ProductsContext.Provider value={{updateServer, fetchProducts, product}}>
            {children}
        </ProductsContext.Provider>
    )
}
 export { ProductsContext, ProductsProvider}