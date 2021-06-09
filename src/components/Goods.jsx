import GoodsItem from './GoodsItem';

const Goods = ({ goods = [] }) => {
  return (
    <section className='catalog'>
      <div className='container'>
        <h1 className='title'>Catalog</h1>
        <ul className='goods'>
          {goods.map((good) => (
            <GoodsItem key={good.id} {...good} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Goods;
