import SubscribeButton from './SubscribeButton';

const SubscriptionInput = () => {
  return (
    <form className="subscription-panel">
      <input type="text" placeholder="name" />
      <SubscribeButton />
    </form>
  );
};

export default SubscriptionInput;
