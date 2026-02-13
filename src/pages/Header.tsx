import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <nav
      style={{
        display: 'flex',
        gap: '20px',
        padding: '20px',
        borderBottom: '1px solid #ddd',
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/phones">Phones</Link>
      <Link to="/tablets">Tablets</Link>
      <Link to="/accessories">Accessories</Link>
      <Link to="/favorites">Favorites</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  );
};
