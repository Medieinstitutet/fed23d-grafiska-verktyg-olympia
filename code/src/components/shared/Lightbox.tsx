import React, { ReactNode, useEffect } from 'react';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Lightbox = ({ isOpen, onClose, children }: LightboxProps) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && event.target instanceof Node && !(event.target as Element).closest('.lightbox-content')) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="lightbox">
      <div className="lightbox-content">{children}</div>
    </div>
  );
};

export default Lightbox;
