import { API_URL, API_KEY } from '../../config';
import { useState, useEffect } from 'react';

import Goods from '../Goods';

function Main() {
  const [goods, setGoods] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/shop?lang=en`, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => setGoods(data.specialFeatured))
      .catch((e) => console.log(e));
  }, []);

  return (
    <main className='main-content'>
      <Goods goods={goods} />
    </main>
  );
}

export default Main;
