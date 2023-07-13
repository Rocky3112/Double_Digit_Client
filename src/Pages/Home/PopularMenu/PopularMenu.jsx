// import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {
    const [menu]= useMenu();
    const popular = menu.filter(item=>item.category=== 'popular')
// const [ menu, setMenu] = useState([])
//     useEffect( ()=>{
//         fetch('menu.json')
//         .then(res=>res.json())
//         .then(data =>{
//             const popularItems = data.filter(item =>item.category ==='popular')
//             setMenu(popularItems)
//         })
//     }, [])
    return (
        <section className="my-10">
        <SectionTitle
        heading={"Popular Items"}
        subHeading={"From Our Menu"}
        ></SectionTitle>

        <div className=" grid md:grid-cols-2 gap-4">
            {
                popular.map(item =><MenuItems
                key ={item._id}
                item ={item}
                ></MenuItems>)
            }
        </div>
        <div className="text-center">
        <button  className="uppercase btn btn-outline my-3 border-0 border-b-2  mx-auto">View Full Menu</button>
        </div>
        </section>
        
    );
};

export default PopularMenu;