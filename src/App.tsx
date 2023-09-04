import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { NavBar } from './components/NavBar';
import { Shop } from './pages/Shop';
import { Contact } from './pages/Contact';
import { Cart } from './pages/Cart';
import { ShopContextProvider } from './context/shop-context';
import { Footer2 } from './components/Footer2';
import { Checkout } from './components/Checkout';
import { ProductDescriptions } from './components/ProductDesriptions';

export const App = () => {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <NavBar />
          <div className="main-content">
            <Switch>
              <Route path="/" exact component={Shop} />
              <Route path="/contact" exact component={Contact} />
              <Route path="/cart" exact component={Cart} />
              <Route path="/checkout" exact component={Checkout} />
              <Route
                path="/product/:productId"
                component={ProductDescriptions}
              />
            </Switch>
          </div>
        </Router>
      </ShopContextProvider>
      <Footer2 />
    </div>
  );
};
