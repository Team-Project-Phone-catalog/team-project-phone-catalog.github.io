import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Header } from './pages/Header.tsx';
import { CartPage } from './pages/CartPage/CartPage.tsx';

export const App = () => {
  return (
    <div className="App">
      <Header />

      <div className="container">
        <Routes>
          <Route
            path="/"
            element={<h1>Home Page (Coming soon)</h1>}
          />
          <Route
            path="/phones"
            element={<h1 className="title">Phones Page (Coming soon)</h1>}
          />
          <Route
            path="/tablets"
            element={<h1 className="title">Tablets Page (Coming soon)</h1>}
          />
          <Route
            path="/accessories"
            element={<h1 className="title">Access Page (Coming soon)</h1>}
          />

          <Route
            path="/cart"
            element={<CartPage />}
          />
          <Route
            path="/favorites"
            element={<h1 className="title">Favorites</h1>}
          />

          <Route
            path="/product/:productId"
            element={<h1 className="title">Product Details</h1>}
          />

          <Route
            path="*"
            element={<h1 className="title">Page Not Found</h1>}
          />
        </Routes>
      </div>
    </div>
  );
};
