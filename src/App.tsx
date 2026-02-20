import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/ui/Header/Header.tsx';
import { Footer } from './components/Footer';
import { PhonesPage } from './pages/PhonesPage/PhonesPage.tsx';
import { AccessoriesPage } from './pages/AccessoriesPage/AccessoriesPage.tsx';
import { CartPage } from './pages/CartPage/CartPage.tsx';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage.tsx';
import { TabletsPage } from './pages/TabletsPage/TabletsPage.tsx';
import { HomePage } from './pages/HomePage/HomePage.tsx';
import { FavoritesPage } from './pages/FavoritesPage/FavoritesPage.tsx';
import { ProductDetailsPage } from './pages/ProductDetailsPage/ProductDetailsPage.tsx';
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop.tsx';
import { Toaster } from 'sonner';

import { ProfilePage } from './pages/ProfilePage/ProfilePage';
import { HelpWidget } from './components/HelpWidget/HelpWidget';
import { ProfileOrderPage } from './pages/ProfilePage/ProfileOrderPage/ProfileOrderPage.tsx';
import { AdminPage } from './pages/ProfilePage/AdminPage/AdminPage.tsx';

export const App = () => {
  return (
    <div className="App">
      <Toaster
        position="bottom-right"
        richColors
        toastOptions={{
          className: 'my-custom-toast',
        }}
      />

      <ScrollToTop />
      <Header />

      <div className="container">
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
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
            element={<FavoritesPage />}
          />
          <Route
            path="/profile"
            element={<ProfilePage />}
          />

          <Route
            path="/profile/orders"
            element={<ProfileOrderPage />}
          />

          <Route
            path="/profile/admin"
            element={<AdminPage />}
          />
          <Route
            path="/:category/:productId"
            element={<ProductDetailsPage />}
          />
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Routes>
      </div>

      <Footer />
      <HelpWidget />
    </div>
  );
};
