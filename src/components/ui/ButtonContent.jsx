import { Fragment } from 'react';

const ButtonContent = ({ slicedGoods, checkContent, isLoading, goods }) => {
  return (
    <Fragment>
      {slicedGoods().length ? (
        <button className='catalog__show-hide' onClick={checkContent}>
          {isLoading || slicedGoods().length < goods.length
            ? 'Show more'
            : 'Hide Content'}
        </button>
      ) : null}
    </Fragment>
  );
};

export default ButtonContent;
