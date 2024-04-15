import React, { ReactNode } from 'react';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Lightbox = ({ isOpen, onClose, children }: LightboxProps) => {
  if (!isOpen) return null;

  return (
    <div className="lightbox">
      <div className="lightbox-content">
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Lightbox;
