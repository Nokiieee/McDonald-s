import { useEffect, useRef, useState } from 'react';
import { CartIcon, CheckIcon } from './Icons.jsx';
import { useCart } from '../context/CartContext.jsx';

export default function AddToCartButton({ item, quantity, onAdded }) {
  const { addItem } = useCart();
  const [status, setStatus] = useState('idle'); // idle | added
  const timeoutRef = useRef(null);

  // Cancel any pending "close after adding" timer if this button is torn down
  // (e.g. the user switches to a different item) so it can't fire onAdded()
  // late and close a panel the user never asked to close.
  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  const handleClick = () => {
    if (status === 'added') return;
    addItem(item.key, quantity);
    setStatus('added');
    timeoutRef.current = setTimeout(() => onAdded?.(), 700);
  };

  return (
    <button
      type="button"
      className={`add-to-cart-btn ${status === 'added' ? 'is-added' : ''}`}
      onClick={handleClick}
    >
      <span className="add-to-cart-btn-icon">
        {status === 'added' ? (
          <CheckIcon height="18px" width="18px" fill="currentColor" />
        ) : (
          <CartIcon height="18px" width="18px" fill="currentColor" />
        )}
      </span>

      <span className="add-to-cart-btn-label">
        {status === 'added' ? 'Added to cart' : 'Add to Cart'}
      </span>

      <span className="add-to-cart-btn-price">₱{item.price * quantity}</span>
    </button>
  );
}
