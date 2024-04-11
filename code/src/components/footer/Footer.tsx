import { useContext } from 'react';
import Address from './Address';
import SocialMedia from './SocialMedia';
import Context from '../../context/Context';

const Footer = () => {
  const context = useContext(Context);
  if (!context) return;

  const { isMobile } = context;

  return (
    <footer>
      <Address />
      {isMobile ? (
        <div className="contact">
          <SocialMedia />
          <p>AllAboutBread@mail.com</p>
        </div>
      ) : (
        <>
          <p>AllAboutBread@mail.com</p>
          <SocialMedia />
        </>
      )}
    </footer>
  );
};

export default Footer;
