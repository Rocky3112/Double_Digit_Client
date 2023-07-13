/* eslint-disable react/prop-types */
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
        </div>
    );
};

export default MenuCategory;