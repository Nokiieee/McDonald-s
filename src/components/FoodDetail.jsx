import { useEffect, useState } from 'react';
import { CloseIcon } from './Icons.jsx';
import AddToCartButton from './AddToCartButton.jsx';

export default function FoodDetail({ item, open, onClose }) {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (open) setQuantity(1);
  }, [open, item?.key]);

  useEffect(() => {
    if (!open) return undefined;
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  if (!item) return null;

  return (
    <>
      {open && <button type="button" className="show-cancel-info" aria-label="Close details" onClick={onClose} />}

      <div className={`food-information ${open ? 'show-info' : ''}`} onClick={(e) => e.stopPropagation()}>
        <button type="button" className="close-info" aria-label="Close" onClick={onClose}>
          <CloseIcon className="close" height="26px" width="26px" fill="#5f6368" />
        </button>

        <div className="info-layout">
          <div className="image-info-container">
            <div className="image-item-container">
              <div className="image-container">
                <img src={item.image} alt={item.name} height="150" />
              </div>

              <h2 className="item-name">{item.name}</h2>
            </div>

            <div className="info-container">
              <h4 className="info">
                {item.shortDesc} <span className="hotcake-info">{item.longDesc}</span>
              </h4>
            </div>
          </div>

          <div className="info-line" />

          <div className="price-add-to-cart-container">
            <div className="quantity-selector-container">
              <h4 className="quantity">Quantity:</h4>

              <div className="quantity-selector">
                <button
                  type="button"
                  className="qty-btn minus"
                  aria-label="Decrease quantity"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                >
                  −
                </button>
                <input type="number" value={quantity} min="1" readOnly />
                <button
                  type="button"
                  className="qty-btn plus"
                  aria-label="Increase quantity"
                  onClick={() => setQuantity((q) => q + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <AddToCartButton key={item.key} item={item} quantity={quantity} onAdded={onClose} />
          </div>
        </div>
      </div>
    </>
  );
}
