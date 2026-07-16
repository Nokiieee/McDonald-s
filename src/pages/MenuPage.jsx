import { useState } from 'react';
import FoodCard from '../components/FoodCard.jsx';
import FoodDetail from '../components/FoodDetail.jsx';
import { menu } from '../data/menu';

export default function MenuPage({ category }) {
  const items = menu[category.key];
  const [openKey, setOpenKey] = useState(null);
  const selectedItem = items.find((item) => item.key === openKey) ?? null;

  return (
    <div className="main-body">
      <div className="breakfast-container">
        {items.map((item) => (
          <FoodCard key={item.key} item={item} isSelected={item.key === openKey} onOpen={setOpenKey} />
        ))}
      </div>

      <FoodDetail item={selectedItem} open={Boolean(openKey)} onClose={() => setOpenKey(null)} />
    </div>
  );
}
