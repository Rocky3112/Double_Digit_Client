/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItems from "../../Shared/MenuItems/MenuItems";

const MenuCategory = ({items, title, img}) => {
    return (
        <div className="">
            {
              title && <Cover img={img} title={title}></Cover>
            }
            <div className=" grid md:grid-cols-2 gap-4 my-20">
            {
                items.map(item =><MenuItems
                key ={item._id}
                item ={item}
                ></MenuItems>)
            }
        </div>
        <div className="card-actions justify-center">
        <Link to={`/order/${title}`}>
          <button className="uppercase btn btn-outline my-3 border-0 border-b-2 ">Add Favourite Food</button>
          </Link>
        </div>
        </div>
    );
};

export default MenuCategory;