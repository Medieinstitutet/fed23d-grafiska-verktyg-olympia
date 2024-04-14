import { useContext } from 'react';
import Context from '../../../context/Context';

const SubscribeButton = () => {
  const context = useContext(Context);
  if (!context) return;

  const { isButtonEnabled } = context;

  return (
    <button disabled={!isButtonEnabled} className="subscribe-button">
      Subscribe
    </button>
  );
};

export default SubscribeButton;
