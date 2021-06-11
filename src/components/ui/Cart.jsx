const Cart = ({ openCart, quantity = 0 }) => {
  return (
    <div className='cart' onClick={openCart}>
      <img className='cart__icon' src='images/icons/cart.svg' alt='Cart' />
      {quantity ? <p className='cart__count'>{quantity}</p> : null}
    </div>
  );
};
export default Cart;
