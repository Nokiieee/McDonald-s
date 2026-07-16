import { TrashIcon } from './Icons.jsx';

export default function CartLine({ item, onRemove }) {
  return (
    <div className="c-item-main-container">
      <div className="c-img-name">
        <div className="c-img-container">
          <img src={item.image} alt={item.name} height="50" />
        </div>

        <div className="c-name-quantity">
          <h3>{item.name}</h3>
          <p>Quantity: {item.quantity}</p>
        </div>
      </div>

      <div className="c-price-cancel">
        <div className="c-price">
          <p>₱{item.price * item.quantity}</p>
        </div>

        <button type="button" className="c-close-info" aria-label={`Remove ${item.name}`} onClick={() => onRemove(item.key)}>
          <TrashIcon className="c-close" fill="#5f6368" />
        </button>
      </div>
    </div>
  );
}
