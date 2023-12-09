import { createContext, useContext } from 'react'
//import useUserContext from './UserContext'

const CartContext = createContext()

function CartProvider({ children }) {
  const [inCart, setInCart] = useState([])
  //const [logged, setLogged] = useUserContext()

  const data = {
    inCart,
    setInCart
  }

  return (
    <CartContext.Provider value={data}>
      {children}
    </CartContext.Provider>
  )
}

function useCartContext() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartContext must be used within a CartProvider');
  }
  return context;
}

export { CartProvider, useCartContext };
export default CartContext;