import GoodsCartItem from '../GoodsCartItem';
import ModalHeaderCart from './ModalHeaderCart';
import ModalCartFooter from './ModalCartFooter';

const ModalCart = ({ modalRef, closeCart, order }) => {
  return (
    <div className='modal' ref={modalRef} onClick={closeCart}>
      <ModalHeaderCart closeCart={closeCart} />
      <ul className='cart-goods' onClick={(e) => e.stopPropagation()}>
        {order.map((item) => {
          console.log(item);
          return <GoodsCartItem key={item.id} {...item} />;
        })}
      </ul>
      <ModalCartFooter />
    </div>
  );
};

export default ModalCart;
