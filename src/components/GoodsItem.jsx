const GoodsItem = ({ image, name: title, description, price }) => {
  const titleCapitalzed = () => {
    return title
      ? `${title[0].toUpperCase()}${title.slice(1).toLowerCase()}`
      : 'The name is missing';
  };

  const descriptionCapitalzed = () => {
    return description
      ? `${description[0].toUpperCase()}${description.slice(1).toLowerCase()}`
      : 'No description available';
  };

  return (
    <li className='goods__item'>
      <div className='goods__inner-image'>
        <img className='goods__image' src={image} alt='Poster' />
      </div>
      <h2 className='goods__title'>{titleCapitalzed()}</h2>
      <p className='goods__description'>{descriptionCapitalzed()}</p>
      <p className='goods__price'>{price} $</p>
      <button className='goods__buy'>Add cart</button>
    </li>
  );
};

export default GoodsItem;
