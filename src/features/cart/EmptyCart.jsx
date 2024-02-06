import LinkButton from '../UI/LinkButton';

function EmptyCart() {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>
      <p className="mt-8 text-xl font-semibold">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
