import { NavLink } from 'react-router-dom';
import { categories } from '../data/menu';

export default function CategoryLinks({ variant, onNavigate }) {
  return (
    <>
      {categories.map((category) => (
        <NavLink
          key={category.key}
          to={category.slug === '' ? '/' : `/${category.slug}`}
          end={category.slug === ''}
          onClick={onNavigate}
          className={({ isActive }) =>
            [variant === 'mobile' ? 'menu menu-hover' : 'menu', isActive ? 'menu-active' : '']
              .filter(Boolean)
              .join(' ')
          }
        >
          {category.label}
        </NavLink>
      ))}
    </>
  );
}
