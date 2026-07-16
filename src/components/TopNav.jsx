import { Link } from 'react-router-dom';
import MobileNav from './MobileNav.jsx';
import { CartIcon } from './Icons.jsx';
import { useCart } from '../context/CartContext.jsx';

export default function TopNav({ title }) {
  const { totalCount } = useCart();

  return (
    <div className="top-nav">
      <MobileNav />

      <h2>{title}</h2>

      <Link className="cart" to="/cart" aria-label="View cart">
        <CartIcon height="24px" fill="#5f6368" />
        {totalCount > 0 && <span className="cart-badge">{totalCount}</span>}
      </Link>
    </div>
  );
}
