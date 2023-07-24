import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

const Payment = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
  return (
    <div className="w-full">
      <SectionTitle
        subHeading={"Please Provide"}
        heading={"Payment"}
      ></SectionTitle>

      <Elements stripe={stripePromise}>
        <CheckoutForm></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
