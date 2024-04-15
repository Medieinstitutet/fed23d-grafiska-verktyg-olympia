import CookieButton from './CookieButton';

const Cookiebar = () => {
  return (
    <div className="cookiebar-outer">
      <div className="cookiebar-inner">
        <p>This website uses cookies to ensure you get the best experience on our website.</p>
        <div className="buttons-panel">
          <CookieButton text="Accept" className="accept" />
          <CookieButton text="Decline" className="decline" />
        </div>
      </div>
    </div>
  );
};

export default Cookiebar;
