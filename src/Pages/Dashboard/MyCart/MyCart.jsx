import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";

const MyCart = () => {
    const [cart] =useCart();
    const total = cart.reduce((sum, item)=>item.price + sum, 0)
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | MyCart</title>
            </Helmet>
            <h2 className=" text-3xl">Total Cart = {cart.length}</h2>
            <h2 className=" text-3xl">Total Price = $ {total}</h2>
        </div>
    );
};

export default MyCart;