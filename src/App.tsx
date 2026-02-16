import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Header } from './pages/Header.tsx';
import { PhonesPage } from './pages/PhonesPage/PhonesPage.tsx';
import { AccessoriesPage } from './pages/AccessoriesPage/AccessoriesPage.tsx';
import { CartPage } from './pages/CartPage/CartPage.tsx';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage.tsx';
import { TabletsPage } from './pages/TabletsPage/TabletsPage.tsx';

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
            element={<PhonesPage />}
          />
          <Route
            path="/tablets"
            element={<TabletsPage />}
          />
          <Route
            path="/accessories"
            element={<AccessoriesPage />}
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
            element={<NotFoundPage />}
          />
        </Routes>
      </div>
    </div>
  );
};
