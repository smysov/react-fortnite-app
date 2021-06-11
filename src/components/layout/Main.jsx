import { API_URL, API_KEY } from '../../config';
import { useState, useEffect, useRef } from 'react';

import Goods from '../Goods';
import Cart from '../ui/Cart';
import ModalCart from '../ui/ModalCart';

function Main() {
  const [goods, setGoods] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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
  };

  const totalPrice = () => {
    let total = [];
    order.forEach((item) => {
      total.push(item.price * item.quantity);
    });

    total = total.reduce((acc, item) => acc + item, 0);
    return total;
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
        />
      ) : null}
    </main>
  );
}

export default Main;
