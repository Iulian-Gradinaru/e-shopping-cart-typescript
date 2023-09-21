import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { NavBar } from './components/NavBar';
import { Shop } from './pages/Shop';
import { WishList } from './pages/WishList';
import { Cart } from './pages/Cart';
import { ShopContextProvider } from './context/shop-context';
import { Footer } from './components/Footer';
import { Checkout } from './components/Checkout';
import { ProductDescriptions } from './components/ProductDescriptions';
import { Message } from './components/Message/Message';
import { ScrollToTop } from './components/ScrollToTop';

export const App = () => {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <ScrollToTop>
            <NavBar />
            <div className="main-content">
              <Switch>
                <Route path="/" exact component={Shop} />
                <Route path="/wishlist" exact component={WishList} />
                <Route path="/cart" exact component={Cart} />
                <Route path="/checkout" exact component={Checkout} />
                <Route path="*" component={Shop} />
                <Route
                  path="/product/:productId"
                  component={ProductDescriptions}
                />
                <Route path="/message" exact component={Message} />
              </Switch>
            </div>
          </ScrollToTop>
        </Router>
      </ShopContextProvider>
      <Footer />
    </div>
  );
};
