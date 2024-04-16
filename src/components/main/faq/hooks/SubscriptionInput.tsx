import SubscribeButton from '../SubscribeButton';
import { useRef, useContext } from 'react';
import Context from '../../../../context/Context';

const SubscriptionInput = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const context = useContext(Context);

  if (!context) return;

  const { switchEnabledStateOnChange } = context;

  return (
    <form className="subscription-panel">
      <h2 className="subscription-heading">Never miss a new recipe!</h2>
      <input
        onChange={() => {
          switchEnabledStateOnChange(inputRef);
        }}
        ref={inputRef}
        type="text"
        placeholder="Your e-mail"
      />
      <SubscribeButton />
    </form>
  );
};

export default SubscriptionInput;
