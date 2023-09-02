// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { NavBar } from './components/NavBar';
// import { Shop } from './pages/Shop';
// import { Contact } from './pages/Contact';
// import { Cart } from './pages/Cart';
// import { ShopContextProvider } from './context/shop-context';

// export const App = () => {
//   return (
//     <div className="App">
//       <ShopContextProvider>
//         <Router>
//           <NavBar />
//           <Routes>
//             <Route path="/" element={<Shop />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/cart" element={<Cart />} />
//           </Routes>
//         </Router>
//       </ShopContextProvider>
//     </div>
//   );
// };

import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Schimbare aici

import { NavBar } from './components/NavBar';
import { Shop } from './pages/Shop';
import { Contact } from './pages/Contact';
import { Cart } from './pages/Cart';
import { ShopContextProvider } from './context/shop-context';
import { Footer } from './components/Footer';

export const App = () => {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Shop} /> {/* Schimbare aici */}
            <Route path="/contact" exact component={Contact} />{' '}
            <Route path="/cart" exact component={Cart} /> {/* Schimbare aici */}
          </Switch>
          <Footer />
        </Router>
      </ShopContextProvider>
    </div>
  );
};
