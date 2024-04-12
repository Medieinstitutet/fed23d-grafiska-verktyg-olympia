import { useContext } from 'react';
import Context from '../../context/Context';

interface ICookieProps {
  text: string;
  className: string;
}

const CookieButton: React.FC<ICookieProps> = ({ text, className }) => {
  const context = useContext(Context);

  if (!context) return;

  const { closeCookiebarOnClick } = context;

  return (
    <button onClick={closeCookiebarOnClick} className={`cookie-button ${className}`}>
      {text}
    </button>
  );
};

export default CookieButton;
