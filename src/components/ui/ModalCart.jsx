import GoodsCartItem from '../GoodsCartItem';
import ModalHeaderCart from './ModalHeaderCart';
import ModalCartFooter from './ModalCartFooter';

const ModalCart = ({ modalRef, closeCart, order, total }) => {
  return (
    <div className='modal' ref={modalRef} onClick={closeCart}>
      <ModalHeaderCart closeCart={closeCart} />
      <ul className='cart-goods' onClick={(e) => e.stopPropagation()}>
        {order.length ? (
          order.map((item) => {
            return <GoodsCartItem key={item.id} {...item} />;
          })
        ) : (
          <h2 className='cart-goods__empty'>Cart is empty!</h2>
        )}
      </ul>
      <ModalCartFooter total={total} />
    </div>
  );
};

export default ModalCart;
