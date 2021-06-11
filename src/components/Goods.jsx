import { useState } from 'react';
import GoodsItem from './GoodsItem';
import Preloader from './ui/Preloader';
import ButtonContent from './ui/ButtonContent';

const Goods = ({ goods = [], isLoading, addToCart }) => {
  const [limit, setLimit] = useState(6);
  const slicedGoods = () => goods.slice(0, limit);
  const hideContent = () => slicedGoods().slice(0, setLimit(6));
  const showMore = () => setLimit(limit + 6);
  const checkContent = () => {
    if (limit < goods.length) {
      showMore();
    } else {
      hideContent();
    }
  };

  return (
    <section className='catalog'>
      <div className='container'>
        <h1 className='title'>Catalog</h1>
        <div className='catalog__inner'>
          {isLoading ? (
            <Preloader />
          ) : (
            <ul className='goods'>
              {slicedGoods().map((good) => (
                <GoodsItem key={good.id} {...good} addToCart={addToCart} />
              ))}
            </ul>
          )}
          <ButtonContent
            slicedGoods={slicedGoods}
            checkContent={checkContent}
            isLoading={isLoading}
            goods={goods}
          />
        </div>
      </div>
    </section>
  );
};

export default Goods;
