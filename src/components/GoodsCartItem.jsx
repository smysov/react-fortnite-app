const GoodsCartItem = () => {
  return (
    <li className='cart-goods__item'>
      <div className='cart-goods__info'>
        <h2 className='cart-goods__title'>Marshmello bundle</h2>
      </div>
      <div className='cart-goods__count-buttons'>
        <button
          className='cart-goods__button cart-goods__button_decrease'
          aria-label='Decrease count'></button>
        <span className='cart-goods__count'>3</span>
        <button
          className='cart-goods__button cart-goods__button_increase'
          aria-label='Decrease count'></button>
      </div>
      <button className='cart-goods__remove'></button>
    </li>
  );
};

export default GoodsCartItem;
