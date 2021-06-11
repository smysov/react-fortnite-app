const GoodsCartItem = ({
  title,
  id,
  quantity,
  price,
  removeFromCart,
  decreaseQuantity,
  increaseQuantity,
}) => {
  const titleCapitalzed = () => {
    return `${title[0].toUpperCase()}${title.slice(1).toLowerCase()}`;
  };
  return (
    <li className='cart-goods__item'>
      <div className='cart-goods__info'>
        <h2 className='cart-goods__title'>{titleCapitalzed()}</h2>
      </div>
      <div className='cart-goods__count-buttons'>
        <button
          className='cart-goods__button cart-goods__button_decrease'
          aria-label='Decrease count'
          onClick={() => decreaseQuantity(id)}></button>
        <span className='cart-goods__count'>{quantity}</span>
        <button
          className='cart-goods__button cart-goods__button_increase'
          aria-label='Decrease count'
          onClick={() => increaseQuantity(id)}></button>
      </div>
      <div className='cart-goods__price'>
        <p className='cart-goods__text'>{price * quantity}$</p>
      </div>
      <button
        className='cart-goods__remove'
        onClick={() => removeFromCart(id)}></button>
    </li>
  );
};

export default GoodsCartItem;
