export default function FoodCard({ item, isSelected, onOpen }) {
  return (
    <button
      type="button"
      className={`food-container ${isSelected ? 'selected' : ''}`}
      onClick={() => onOpen(item.key)}
    >
      <img src={item.image} alt={item.name} height="110" />

      <div className="text-container">
        <p>{item.name}</p>
      </div>

      <div className="menu-price">
        <p>₱{item.price}</p>
      </div>
    </button>
  );
}
