const ModalCartFooter = ({ total }) => {
  return (
    <div className='modal__footer' onClick={(e) => e.stopPropagation()}>
      <h3 className='cart-goods__total'>Total: {total()}$</h3>
    </div>
  );
};

export default ModalCartFooter;
