import Cover from "../../Shared/Cover/Cover";
import shopCover from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
import { useState } from "react";
import FoodCard from "../../../Components/Foodcard/FoodCard";
import { useParams } from "react-router-dom";

const Order = () => {
    const [index, setIndex]= useState(0)
    const [menu]= useMenu();

    const {category} = useParams();
    console.log(category);
    const dessert = menu.filter(item=>item.category=== 'dessert')
    const salad = menu.filter(item=>item.category=== 'salad')
    const pizza = menu.filter(item=>item.category=== 'pizza')
    const soup = menu.filter(item=>item.category=== 'soup')
    const drink = menu.filter(item=>item.category=== 'drinks')
  return (
    <div>
      <Cover img={shopCover} title={"Our Shop"}></Cover>

      <Tabs defaultIndex={index} onSelect={(index) => setIndex(index)}>
        <TabList className="my-10 uppercase font-semibold text-xl">
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soups</Tab>
          <Tab>Desserts</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
            <div className=" grid md:grid-cols-3 gap-6 my-6">
                {
                    salad.map(item=><FoodCard
                    key={item._id}
                    item={item}
                    ></FoodCard>)
                }
            </div>
        </TabPanel>
        <TabPanel>
            <div className=" grid md:grid-cols-3 gap-6 my-6">
                {
                    pizza.map(item=><FoodCard
                    key={item._id}
                    item={item}
                    ></FoodCard>)
                }
            </div>
        </TabPanel>
        <TabPanel>
            <div className=" grid md:grid-cols-3 gap-6 my-6">
                {
                    soup.map(item=><FoodCard
                    key={item._id}
                    item={item}
                    ></FoodCard>)
                }
            </div>
        </TabPanel>
        <TabPanel>
            <div className=" grid md:grid-cols-3 gap-6 my-6">
                {
                    dessert.map(item=><FoodCard
                    key={item._id}
                    item={item}
                    ></FoodCard>)
                }
            </div>
        </TabPanel>
        <TabPanel>
            <div className=" grid md:grid-cols-3 gap-6 my-6">
                {
                    drink.map(item=><FoodCard
                    key={item._id}
                    item={item}
                    ></FoodCard>)
                }
            </div>
        </TabPanel>
        
      </Tabs>
    </div>
  );
};

export default Order;
