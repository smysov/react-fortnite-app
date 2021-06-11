const ModalHeaderCart = ({ closeCart }) => {
  return (
    <div className='modal__header' onClick={(e) => e.stopPropagation()}>
      <h2 className='modal__title'>Cart</h2>
      <button className='modal__close' onClick={closeCart}></button>
    </div>
  );
};

export default ModalHeaderCart;
