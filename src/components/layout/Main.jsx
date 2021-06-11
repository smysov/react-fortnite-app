import { API_URL, API_KEY } from '../../config';
import { useState, useEffect, useRef } from 'react';

import Goods from '../Goods';
import Cart from '../ui/Cart';
import ModalCart from '../ui/ModalCart';
import Alert from '../ui/Alert';

function Main() {
  const [goods, setGoods] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isShowAlert, setIsShowAlert] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [order, setOrder] = useState([]);

  const modal = useRef(null);

  const openCart = (e) => {
    document.body.classList.add('is-hidden');
    setIsOpenCart(true);
  };

  const closeCart = () => {
    setIsOpenCart(false);
    document.body.classList.remove('is-hidden');
  };

  const addingGoodsToCart = (product) => {
    setIsShowAlert(true);
    const newProduct = {
      ...product,
      quantity: 1,
    };
    if (order.length) {
      let isProductExists = false;
      order.map((item) => {
        if (item.id === newProduct.id) {
          isProductExists = true;
          item.quantity += 1;
        }
        return order;
      });
      if (!isProductExists) {
        setOrder([...order, newProduct]);
      }
    } else {
      setOrder([...order, newProduct]);
    }
    setTimeout(() => setIsShowAlert(false), 500);
  };

  const removingGoodsToCart = (id) => {
    const newOrder = order.filter((item) => item.id !== id);
    setOrder(newOrder);
  };

  const totalPrice = () => {
    return order.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const decreaseQuantityGoods = (id) => {
    const newOrder = order.map((item) => {
      if (item.id === id) {
        const newQuantity = item.quantity > 1 ? item.quantity - 1 : 1;
        return {
          ...item,
          quantity: newQuantity,
        };
      } else {
        return item;
      }
    });
    setOrder(newOrder);
  };

  const increaseQuantityGoods = (id) => {
    const newOrder = order.map((item) => {
      if (item.id === id) {
        const newQuantity = item.quantity + 1;
        return {
          ...item,
          quantity: newQuantity,
        };
      } else {
        return item;
      }
    });
    setOrder(newOrder);
  };

  useEffect(() => {
    setIsLoading(true);
    fetch(`${API_URL}/shop?lang=en`, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => setGoods(data.specialFeatured))
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeCart();
        document.body.classList.remove('is-hidden');
      }
    });
  });

  return (
    <main className='main-content'>
      <Goods
        goods={goods}
        isLoading={isLoading}
        addToCart={addingGoodsToCart}
      />
      <Cart openCart={openCart} quantity={order.length} />
      {isOpenCart ? (
        <ModalCart
          closeCart={closeCart}
          modalRef={modal}
          order={order}
          total={totalPrice}
          removeFromCart={removingGoodsToCart}
          decreaseQuantity={decreaseQuantityGoods}
          increaseQuantity={increaseQuantityGoods}
        />
      ) : null}
      {isShowAlert ? <Alert /> : null}
    </main>
  );
}

export default Main;
