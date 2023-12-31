import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu//soup-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../menuCategory/menuCategory";
// import PopularMenu from "../../Home/PopularMenu/PopularMenu";

const Menu = () => {
    const [menu]= useMenu();
    const dessert = menu.filter(item=>item.category=== 'dessert')
    const salad = menu.filter(item=>item.category=== 'salad')
    const pizza = menu.filter(item=>item.category=== 'pizza')
    const soup = menu.filter(item=>item.category=== 'soup')
    const offered = menu.filter(item=>item.category=== 'offered')


  return (
    <div>
      <Helmet>
        <title>Double Digit | Menu</title>
      </Helmet>
      <Cover img={menuImg} title={"Our Menu"}></Cover>
      {/* Main cover */}
      <SectionTitle subHeading={"Don't miss"} heading={"Today's Offer"}></SectionTitle>
{/* Offered menu Items */}
     <MenuCategory items={offered}></MenuCategory>
     {/* Desserts Item */}
     <MenuCategory items={dessert} title={"dessert"} img={dessertImg}></MenuCategory>
     {/* Pizza Item */}
     <MenuCategory items={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>
     {/* salad Item */}
     <MenuCategory items={salad} title={"salad"} img={saladImg}></MenuCategory>
     {/* salad Item */}
     <MenuCategory items={soup} title={"soup"} img={soupImg}></MenuCategory>
    </div>
  );
};

export default Menu;
