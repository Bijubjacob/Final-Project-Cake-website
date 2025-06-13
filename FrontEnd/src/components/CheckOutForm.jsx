import React, { useState } from 'react';
import { useStripe, useElements, CardElement, Elements } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CheckoutForm = ({ amount, orderDetails }) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setProcessing(true);

    try {
      const { data } = await axios.post('http://localhost:3000/api/stripe/create-payment-intent', { amount });
      const result = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (result.error) {
        alert(result.error.message);
        setProcessing(false);
      } else if (result.paymentIntent.status === 'succeeded') {
          // Save order summary (customize as needed)
        localStorage.setItem('latestOrder', JSON.stringify({
          cakeType: orderDetails?.cakeType || 'Custom Cake',
          total: amount,
          deliveryDate: orderDetails?.deliveryDate || null,
        }));
        await axios.post('http://localhost:3000/api/orders', {
          ...orderDetails,
          paymentIntentId: result.paymentIntent.id,
        });

        navigate('/ConfirmationPage');
      }
    } catch (error) {
      console.error('Payment failed', error);
      alert('There was an error processing your payment.');
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe || processing}>
        {processing ? 'Processing...' : 'Pay Now'}
      </button>
    </form>
  );
};

// Wrapper component to provide stripe object via Elements
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('your-publishable-key-here');

const CheckoutFormWrapper = ({ amount, orderDetails }) => (
  <Elements stripe={stripePromise}>
    <CheckoutForm amount={amount} orderDetails={orderDetails} />
  </Elements>
);

export default CheckoutForm;
