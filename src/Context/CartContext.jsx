import { createContext, useContext } from 'react'
//import useUserContext from './UserContext'

// Create a new context with a default value.
const CartContext = createContext()

// Functional component to wrap children components with the CartProvider.
function CartProvider({ children }) {
 const [inCart, setInCart] = useState([])
 //const [logged, setLogged] = useUserContext()

 // Object to store data to be shared.
 const data = {
    inCart,
    setInCart
 }

 // Render children components with the CartProvider as their parent.
 return (
    <CartContext.Provider value={data}>
      {children}
    </CartContext.Provider>
 )
}

// Custom hook to access the CartContext data.
function useCartContext() {
 const context = useContext(CartContext);
 if (!context) {
    throw new Error('useCartContext must be used within a CartProvider');
 }
 return context;
}

// Export the CartProvider, useCartContext, and the CartContext for default usage.
export { CartProvider, useCartContext };
export default CartContext;