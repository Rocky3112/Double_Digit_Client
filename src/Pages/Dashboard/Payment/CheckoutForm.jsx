/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useState } from "react";

const CheckoutForm = ({ cart, price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure()
  const [cardError, setCardError] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');



  const handleSubmit = async (event) => {
      event.preventDefault();

      if (!stripe || !elements) {
          return
      }

      const card = elements.getElement(CardElement);
      if (card === null) {
          return
      }

      const { error } = await stripe.createPaymentMethod({
          type: 'card',
          card
      })

      if (error) {
          console.log('error', error)
          setCardError(error.message);
      }
      else {
          setCardError('');
          // console.log('payment method', paymentMethod)
      }

      setProcessing(true)

     

  return (
      <>
          <form className="w-2/3 m-8" onSubmit={handleSubmit}>
              <CardElement
                  options={{
                      style: {
                          base: {
                              fontSize: '16px',
                              color: '#424770',
                              '::placeholder': {
                                  color: '#aab7c4',
                              },
                          },
                          invalid: {
                              color: '#9e2146',
                          },
                      },
                  }}
              ></CardElement>
              <button className="btn btn-primary btn-sm mt-4" type="submit" disabled={!stripe || !clientSecret || processing}>
                  Pay
              </button>
          </form>
          {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
          {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}
      </>
  );
};

export default CheckoutForm;