import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItems from "../../Shared/MenuItems/MenuItems";


const PopularMenu = () => {
const [ menu, setMenu] = useState([])
    useEffect( ()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data =>{
            const popularItems = data.filter(item =>item.category ==='popular')
            setMenu(popularItems)
        })
    }, [])
    return (
        <section className="mt-48">
        <SectionTitle
        heading={"Popular Items"}
        subHeading={"From Our Menu"}
        ></SectionTitle>

        <div>
            {
                menu.map(item =><MenuItems
                key ={item._id}
                item ={item}
                ></MenuItems>)
            }
        </div>
        </section>
        
    );
};

export default PopularMenu;