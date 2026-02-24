import './App.css';
import { Route, Routes } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { Header } from './components/layout/Header/Header.tsx';
import { Footer } from './components/layout/Footer';
import { PhonesPage } from './pages/PhonesPage/PhonesPage.tsx';
import { AccessoriesPage } from './pages/AccessoriesPage/AccessoriesPage.tsx';
import { CartPage } from './pages/CartPage/CartPage.tsx';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage.tsx';
import { TabletsPage } from './pages/TabletsPage/TabletsPage.tsx';
import { HomePage } from './pages/HomePage/HomePage.tsx';
import { FavoritesPage } from './pages/FavoritesPage/FavoritesPage.tsx';
import { ProductDetailsPage } from './pages/ProductDetailsPage/ProductDetailsPage.tsx';
import { ScrollToTop } from './components/common/ScrollToTop/ScrollToTop.tsx';
import { Toaster } from 'sonner';

// Layout & Common
import { Header } from '@components/layout/Header/Header';
import { Footer } from '@components/layout/Footer';
import { ScrollToTop } from '@components/common/ScrollToTop/ScrollToTop';
import { HelpWidget } from '@components/common/HelpWidget/HelpWidget';

// Pages
import { HomePage } from '@pages/HomePage/HomePage';
import { PhonesPage } from '@pages/PhonesPage/PhonesPage';
import { TabletsPage } from '@pages/TabletsPage/TabletsPage';
import { AccessoriesPage } from '@pages/AccessoriesPage/AccessoriesPage';
import { ProductDetailsPage } from '@pages/ProductDetailsPage/ProductDetailsPage';
import { FavoritesPage } from '@pages/FavoritesPage/FavoritesPage';
import { CartPage } from '@pages/CartPage/CartPage';
import { RightsPage } from '@pages/RightsPage/RightsPage';
import { ContactsPage } from '@pages/ContactsPage/ContactsPage';
import { NotFoundPage } from '@pages/NotFoundPage/NotFoundPage';

// Profile & Admin
import { ProfilePage } from '@pages/ProfilePage/ProfilePage';
import { ProfileOrderPage } from '@pages/ProfilePage/ProfileOrderPage/ProfileOrderPage';
import { AdminPage } from '@pages/ProfilePage/AdminPage/AdminPage';
import { SupportChat } from '@pages/ProfilePage/SupportChat/SupportChat';
import { WalletPage } from '@pages/ProfilePage/WalletPage/WalletPage';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

export const App = () => {
  return (
    <Elements stripe={stripePromise}>
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
              path="/profile/chat"
              element={<SupportChat />}
            />
            <Route
              path="/profile/wallet"
              element={<WalletPage />}
            />
            <Route
              path="/:category/:productId"
              element={<ProductDetailsPage />}
            />
            <Route
              path="/rights"
              element={<RightsPage />}
            />
            <Route
              path="/contacts"
              element={<ContactsPage />}
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
    </Elements>
  );
};
