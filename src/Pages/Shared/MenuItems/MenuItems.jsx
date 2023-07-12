/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


const MenuItems = ({item}) => {
    const {name, image,price,recipe } = item;
    return (
        <div className=" flex gap-5 p-2">
            <img style={{borderRadius:'0  220px 220px 220px'}} className=" w-[100px]" src={image} alt="" />
            <div>
                <h2 className=" uppercase">{name}---------------</h2>
                <p>{recipe}</p>
            </div>
                <h4 className=" text-yellow-500">{price}</h4>
        </div>
    );
};

export default MenuItems;