import { useState } from 'react';
import GoodsItem from './GoodsItem';
import Preloader from './ui/Preloader';

const Goods = ({ goods = [], isLoading }) => {
  const [limit, setLimit] = useState(6);
  const slicedGoods = () => goods.slice(0, limit);
  const showMore = () => {
    if (limit <= goods.length) {
      setLimit(limit + 6);
    }
  };

  const hideContent = () => slicedGoods().slice(0, setLimit(6));

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
                <GoodsItem key={good.id} {...good} />
              ))}
            </ul>
          )}
          {slicedGoods().length < goods.length ? (
            <button className='catalog__show-more' onClick={showMore}>
              Show more
            </button>
          ) : (
            <button className='catalog__hide' onClick={hideContent}>
              Hide content
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Goods;
