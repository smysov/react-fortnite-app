import GoodsCartItem from '../GoodsCartItem';
import ModalHeaderCart from './ModalHeaderCart';
import ModalCartFooter from './ModalCartFooter';

const ModalCart = ({ modalRef, closeCart }) => {
  return (
    <div className='modal' ref={modalRef} onClick={closeCart}>
      <ModalHeaderCart closeCart={closeCart} />
      <ul className='cart-goods' onClick={(e) => e.stopPropagation()}>
        <GoodsCartItem />
      </ul>
      <ModalCartFooter />
    </div>
  );
};

export default ModalCart;
