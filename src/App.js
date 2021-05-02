import React, {useState} from 'react'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import CartPage from './pages/CartPage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ProductDetailPage from './pages/ProductDetailPage';

export const CartContext = React.createContext([])

function App() {
  const [cart, setCart] = useState([])
 
  function isInCart (id) {
    return cart.some(item => item.id === id)
  }

  function setCartItem({id, title, count}) {
    const isCurrentInCart = isInCart(id)
    if (isCurrentInCart) {
      const newCart = cart.map(item => {
        if (item.id === id) {
          return {
            ...item,
            count: count + item.count
          }
        }
      })
      return setCart([...newCart])
    }
    setCart([...cart, {id, title, count}])
  }

  return (
    <Router>
      <NavBar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <CartContext.Provider value={{setCartItem, cart}}>
            <Route exact path="/catalogo">
              <CatalogPage />
            </Route>

            <Route path="/catalogo/:id">
              <ProductDetailPage />
            </Route>

            <Route path="/cart">
              <CartPage />
            </Route>

          </CartContext.Provider>

        </Switch>
    </Router>
  );
}

export default App;
