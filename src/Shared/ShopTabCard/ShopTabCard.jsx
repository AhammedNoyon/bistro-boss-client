const ShopTabCard = ({ items }) => {
  const { category, image, name, price, recipe } = items;
  return (
    <>
      <div className="card bg-base-100 w-full shadow-xl">
        <figure>
          <img className="w-full h-[300px] object-cover" src={image} alt="" />
        </figure>
        <p className="absolute right-5 top-5 bg-black text-white px-4 py-1">
          {price}
        </p>
        <div className="card-body">
          <h2 className="card-title justify-center">{name}</h2>
          <p className="text-center w-3/4 mx-auto mb-4">{recipe}</p>
          <div className="card-actions justify-center">
            <button className="btn bg-slate-100 text-orange-400 border-b-2 border-b-orange-400 ">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopTabCard;
