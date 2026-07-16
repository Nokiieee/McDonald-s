import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import KioskModal from './components/KioskModal.jsx';
import MenuPage from './pages/MenuPage.jsx';
import CartPage from './pages/CartPage.jsx';
import { categories } from './data/menu';

export default function App() {
  return (
    <>
      <KioskModal />
      <Routes>
        <Route element={<Layout />}>
          {categories.map((category) => (
            <Route
              key={category.key}
              path={category.slug === '' ? '/' : `/${category.slug}`}
              element={<MenuPage category={category} />}
            />
          ))}
          <Route path="/cart" element={<CartPage />} />
        </Route>
      </Routes>
    </>
  );
}
