const ModalCartFooter = () => {
  return (
    <div className='modal__footer' onClick={(e) => e.stopPropagation()}>
      <h3 className='cart-goods__total'>Total: 1000$</h3>
    </div>
  );
};

export default ModalCartFooter;
