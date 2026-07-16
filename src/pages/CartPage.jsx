import { useState } from 'react';
import { useCart } from '../context/CartContext.jsx';
import CartLine from '../components/CartLine.jsx';
import { CheckIcon } from '../components/Icons.jsx';
import { downloadCartAsCsv } from '../utils/exportCart.js';

export default function CartPage() {
  const { cart, removeItem, clearCart, totalPrice } = useCart();
  const [cancelOpen, setCancelOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);

  const handleConfirmCancel = () => {
    clearCart();
    setCancelOpen(false);
  };

  const handleConfirmCheckout = () => {
    downloadCartAsCsv(cart);
    setCheckoutOpen(false);
    setSuccessOpen(true);

    setTimeout(() => {
      localStorage.removeItem('mcdoTapped');
      localStorage.removeItem('mcdoCart');
      // Full reload returns the kiosk to the tap-to-order screen for the next guest.
      window.location.assign('/');
    }, 2000);
  };

  return (
    <>
      <div className="main-body c-main-body">
        {cart.length === 0 ? (
          <p className="empty-cart">Your cart is empty</p>
        ) : (
          cart.map((item) => <CartLine key={item.key} item={item} onRemove={removeItem} />)
        )}
      </div>

      <div className={`checkout-container ${cart.length === 0 ? 'checkout-none' : ''}`}>
        <div className="price-order-container">
          <h2 className="price-result">Total Price: ₱{totalPrice}</h2>

          <div className="order-container">
            <h2 className="cancel-order" onClick={() => setCancelOpen(true)}>
              Cancel
            </h2>
            <h2 className="order" onClick={() => setCheckoutOpen(true)}>
              Order
            </h2>
          </div>
        </div>
      </div>

      {cancelOpen && (
        <div className="confirm-cancel-orders">
          <div className="confirm-cancel-container">
            <h2 className="confirm-message">Are you sure you want to cancel your orders?</h2>

            <div className="confirm-no-yes-container">
              <div className="confirm-no-container" onClick={() => setCancelOpen(false)}>
                <h2 className="confirm-no">No</h2>
              </div>
              <div className="confirm-yes-container" onClick={handleConfirmCancel}>
                <h2 className="confirm-yes">Yes</h2>
              </div>
            </div>
          </div>
        </div>
      )}

      {checkoutOpen && (
        <div className="confirm-checkout-modal">
          <div className="confirm-cancel-container">
            <h2 className="confirm-message">Total Price: ₱{totalPrice}</h2>

            <div className="confirm-no-yes-container">
              <div className="cancel-container" onClick={() => setCheckoutOpen(false)}>
                <h2 className="confirm-no">Cancel</h2>
              </div>
              <div className="confirm-container" onClick={handleConfirmCheckout}>
                <h2 className="confirm-yes">Confirm</h2>
              </div>
            </div>
          </div>
        </div>
      )}

      {successOpen && (
        <div className="success-popup">
          <div className="success-container">
            <div className="success-checkmark">
              <CheckIcon height="80px" width="80px" fill="#28a745" />
            </div>
            <h2 className="success-message">Order Placed Successfully!</h2>
            <p className="success-submessage">Thank you for your order</p>
          </div>
        </div>
      )}
    </>
  );
}
