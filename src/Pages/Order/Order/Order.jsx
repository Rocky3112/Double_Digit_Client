import Cover from "../../Shared/Cover/Cover";
import shopCover from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
import { useState } from "react";
import FoodCard from "../../../Components/Foodcard/FoodCard";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import OrderTab from "../OrderTab/OrderTab";

const Order = () => {
    const categories = ['salad','pizza','soup','dessert','drink']
    const {category} = useParams();
    const initialIndex= categories.indexOf(category);

    const [index, setIndex]= useState(initialIndex);
    const [menu]= useMenu();

    console.log(category);
    const dessert = menu.filter(item=>item.category=== 'dessert')
    const salad = menu.filter(item=>item.category=== 'salad')
    const pizza = menu.filter(item=>item.category=== 'pizza')
    const soup = menu.filter(item=>item.category=== 'soup')
    const drink = menu.filter(item=>item.category=== 'drinks')
  return (
    <div>
        <Helmet>
        <title>Bistro Boss | Order food</title>
      </Helmet>
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
            <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab items={dessert}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab items={drink}></OrderTab>
        </TabPanel>
    
      </Tabs>
    </div>
  );
};

export default Order;
