import { createContext, useState, useEffect } from "react";

const CartContext = createContext();
function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    const isInCart = (id) => cart.some((product) => product.id === id);

    const toggleCheckoutModal = () => {
        setIsCheckoutModalOpen((prev) => !prev);
    }

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
        let total = 0;
        cart.forEach(product => {
        total += product.price * product.quantity;
        });
        setTotalPrice(total);
        console.log("Carrito actualizado:", cart);
    }, [cart]);
    
    
    
    const removeFromCart = (id) => {
        setCart((prevCart) =>
        prevCart.reduce((updatedCart, cartItem) => {
            if (cartItem.id === id) {
                if (cartItem.quantity > 1) {
                    updatedCart.push({ ...cartItem, quantity: cartItem.quantity - 1 });
                } 
               
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
    const value = {cart, addToCart, removeFromCart, removeAllFromCart, isInCart, toggleCheckoutModal, isCheckoutModalOpen, totalPrice};
    return (
        <CartContext.Provider value={value}>
        {children}
        </CartContext.Provider>
    )
}

export { CartProvider, CartContext };