import { useEffect, useState } from 'react';
import { MenuIcon, CloseIcon } from './Icons.jsx';
import CategoryLinks from './CategoryLinks.jsx';

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div className="mobile">
      <button
        type="button"
        className="open-sidebar-button"
        aria-label="Open menu"
        onClick={() => setOpen(true)}
      >
        <MenuIcon height="28px" width="28px" fill="#5f6368" />
      </button>

      {open && <button type="button" className="overlay" aria-label="Close menu" onClick={() => setOpen(false)} />}

      <div className={`links-container ${open ? 'links-container-open' : ''}`}>
        <button type="button" className="close-sidebar-button" aria-label="Close menu" onClick={() => setOpen(false)}>
          <CloseIcon className="close" height="28px" width="28px" fill="#5f6368" />
        </button>

        <CategoryLinks variant="mobile" onNavigate={() => setOpen(false)} />
      </div>
    </div>
  );
}
