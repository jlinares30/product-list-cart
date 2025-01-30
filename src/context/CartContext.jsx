import { createContext, useState, useEffect } from "react";

const CartContext = createContext();
function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart((prevCart)=>{
            const existingProduct = prevCart.find(cartItem => cartItem.id === item.id);
            if(existingProduct){
                return prevCart.map(cartItem => cartItem.id === item.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem)
            } else{
                return [...prevCart, {...item, quantity: 1}]
            }
        })
    }
    useEffect(() => {
        console.log("Carrito actualizado:", cart);
      }, [cart]);

    const removeFromCart = (id) => {
        setCart((prevCart) =>
        prevCart.reduce((updatedCart, cartItem) => {
            if (cartItem.id === id) {
                if (cartItem.quantity > 1) {
                    updatedCart.push({ ...cartItem, quantity: cartItem.quantity - 1 });
                } 
                // Si la cantidad es 1, simplemente lo excluye (no lo agrega a updatedCart)
            } else {
                updatedCart.push(cartItem);
            }
            return updatedCart;
        }, [])
        )
    }
    const removeAllFromCart = (id) => {
        setCart((prevCart) =>{
            return prevCart.filter(cartItem => cartItem.id !== id)
        })
    }
    const value = {cart, addToCart, removeFromCart, removeAllFromCart};
    return (
        <CartContext.Provider value={value}>
        {children}
        </CartContext.Provider>
    )
}

export { CartProvider, CartContext };