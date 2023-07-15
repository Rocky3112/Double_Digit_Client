/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const FoodCard = ({item}) => {
    const {name, image,price,recipe } = item;

    const handleAddToCart = item =>{
      console.log(item);
    }
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
        />
      </figure>
      <p className="absolute right-0 p-2 rounded-lg mr-4 mt-4 bg-slate-800 text-white">$ {price}</p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button onClick={ ()=>handleAddToCart(item)} className="uppercase btn btn-outline my-3 border-0 border-b-2 ">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
