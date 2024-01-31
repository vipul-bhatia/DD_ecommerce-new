import React, { useState, useEffect } from 'react';
import { Link, navigate } from 'gatsby';

import Button from '../Button';
import FormInputField from '../FormInputField/FormInputField';
import CurrencyFormatter from '../CurrencyFormatter';

import * as styles from './OrderSummary.module.css';
import { db } from '../firebase/config';

const OrderSummary = ({itemNames, totalCost}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const amount = 50000;
  const currency = 'INR';
  const receiptId = 'qwsaq1';
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
  
    // Validate form inputs
    if (!name || !email || !phone) {
      setError('All fields are required');
      return;
    }
    setIsLoading(true); // Start loading
    try {
      await db.collection('dd_product_request').add({ name, email, phone,itemNames, totalCost });
      setName('');
      setEmail('');
      setPhone('');
      setMessage('Thanks for Pre-Booking!');
      setError(''); // Clear the error message on success
    } catch (error) {
      console.error('Error adding email: ', error);
      setMessage('Failed to subscribe. Try again later.');
    }
    setIsLoading(false); // Stop loading regardless of the result
  };

  // const paymentHandler = async () => {
  //   try {
  //     const response = await fetch('http://localhost:3000/order', {
  //       method: 'POST',
  //       body: JSON.stringify({
  //         amount,
  //         currency,
  //         receipt: receiptId,
  //       }),
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });

  //     const order = await response.json();
  //     console.log(order);

  //     var options = {
  //       key: 'rzp_test_uuFk7fhcZGmKaW',
  //       amount,
  //       currency,
  //       name: 'Singh Sahb',
  //       description: 'Test Transaction',
  //       image: 'https://example.com/your_logo',
  //       order_id: order.id,
  //       handler: async function (response) {
  //         const body = {
  //           ...response,
  //         };

  //         const validateRes = await fetch('http://localhost:3000/order/validate', {
  //           method: 'POST',
  //           body: JSON.stringify(body),
  //           headers: {
  //             'Content-Type': 'application/json',
  //           },
  //         });

  //         const jsonRes = await validateRes.json();
  //         console.log(jsonRes);
  //       },
  //       // redirect_url: 'https://www.google.com/',
  //       callback_url: 'https://eneqd3r9zrjok.x.pipedream.net/',
  //       prefill: {
  //         name: 'Aman Singh',
  //         email: 'amannsinghh0802@gmail.com',
  //         contact: '9516200725',
  //       },
  //       notes: {
  //         address: 'Razorpay Corporate Office',
  //       },
  //       theme: {
  //         color: '#3399cc',
  //       },
  //     };

  //     var rzp1 = new window.Razorpay(options);
  //     rzp1.open();
  //   } catch (error) {
  //     console.error('Error in paymentHandler:', error);
  //   }
  // };

  // useEffect(() => {
  //   const loadRazorpayScript = async () => {
  //     try {
  //       const script = document.createElement('script');
  //       script.src = 'https://checkout.razorpay.com/v1/checkout.js';
  //       script.async = true;

  //       script.onload = () => {
  //         setRazorpayLoaded(true);
  //       };

  //       document.head.appendChild(script);
  //     } catch (error) {
  //       console.error('Error loading Razorpay script:', error);
  //     }
  //   };

  //   // Call the function to load the script
  //   loadRazorpayScript();
  // }, []);


  return (
    <div className={styles.root}>
      <div className={styles.orderSummary}>
        <span className={styles.title}>order summary</span>
        <div className={styles.calculationContainer}>
          <div className={styles.labelContainer}>
            <span>Subtotal</span>
            <span>
              <CurrencyFormatter amount={totalCost} appendZero />
            </span>
          </div>
          {/* <div className={styles.labelContainer}>
            <span>Shipping</span>
            <span>---</span>
          </div>
          <div className={styles.labelContainer}>
            <span>Tax</span>
            <span>
              <CurrencyFormatter amount={0} appendZero />
            </span>
          </div> */}
        </div>
        <div className={styles.couponContainer}>
          <span>Name</span>
          <FormInputField
            value={name}
            handleChange={(_, name) => setName(name)}
            id={'couponInput'}

          />
          <span>Email</span>
          <FormInputField
            value={email}
            handleChange={(_,email) => setEmail(email)}
            id={'couponInput'}
            type='email'
          />
          <span>Phone No.</span>
          <FormInputField
            value={phone}
            handleChange={(_,phone) => setPhone(phone)}
            id={'couponInput'}
            type='number'
          />
        </div>
        <div className={styles.totalContainer}>
          <span>Total: </span>
          <span>
            <CurrencyFormatter amount={totalCost} appendZero />
          </span>
        </div>
      </div>
      <div className={styles.actionContainer}>
        <Button
        onClick={handleSubscribe}  
          // onClick={paymentHandler}
          fullWidth
          level={'primary'}
        >
           {isLoading ? 'Adding...' : 'Checkout'} {/* Change text based on loading state */}
        </Button>
        <h3>{message}</h3>
        {error && <h3>{error}</h3>}
        <div className={styles.linkContainer}>
          <Link to={'/'}>CONTINUE SHOPPING</Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
