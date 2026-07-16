import { NavLink } from 'react-router-dom';
import { categories } from '../data/menu';

export default function Sidebar() {
  return (
    <div className="side-nav">
      <div className="side-nav-fixed">
        <div className="mcdo-logo-container">
          <h1 className="mcdo-logo">McDonald's</h1>
        </div>

        {categories.map((category, index) => (
          <NavLink
            key={category.key}
            to={category.slug === '' ? '/' : `/${category.slug}`}
            end={category.slug === ''}
            className={({ isActive }) =>
              ['menu-container', index === 0 ? 'first-menu' : '', isActive ? 'menu-container-active' : '']
                .filter(Boolean)
                .join(' ')
            }
          >
            {category.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
