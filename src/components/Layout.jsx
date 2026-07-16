import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar.jsx';
import TopNav from './TopNav.jsx';
import { categories } from '../data/menu';

function useTitle() {
  const { pathname } = useLocation();
  if (pathname === '/cart') return 'Your Cart';
  const slug = pathname.replace(/^\//, '');
  const category = categories.find((c) => c.slug === slug);
  return category ? category.pageTitle : '';
}

export default function Layout() {
  const title = useTitle();

  return (
    <div className="main-container">
      <Sidebar />

      <div className="top-main">
        <TopNav title={title} />
        <Outlet />
      </div>
    </div>
  );
}
