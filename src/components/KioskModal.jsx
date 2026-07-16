import { useState } from 'react';

const TAPPED_KEY = 'mcdoTapped';

export default function KioskModal() {
  const [dismissed, setDismissed] = useState(() => Boolean(localStorage.getItem(TAPPED_KEY)));
  const [closing, setClosing] = useState(false);

  if (dismissed) return null;

  const handleTap = () => {
    localStorage.setItem(TAPPED_KEY, 'true');
    setClosing(true);
    setTimeout(() => setDismissed(true), 400);
  };

  return (
    <div className={`kiosk-modal ${closing ? 'hidden' : ''}`} onClick={handleTap} role="button" tabIndex={0}>
      <div className="kiosk-content">
        <img src="/images/mcdo-logo.png" alt="McDonald's Logo" className="kiosk-logo" />
        <h1 className="kiosk-text">Tap Here to Order</h1>
      </div>
    </div>
  );
}
