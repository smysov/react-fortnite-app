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
      <Goods goods={goods} isLoading={isLoading} />
      <Cart openCart={openCart} quantity={order.length} />
      {isOpenCart ? <ModalCart closeCart={closeCart} modalRef={modal} /> : null}
    </main>
  );
}

export default Main;
