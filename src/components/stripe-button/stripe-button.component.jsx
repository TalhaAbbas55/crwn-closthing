import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KAhL4Cc7Rt6hFNvwyiFmUSrUUBmUSnhq6sdsUc4TI0ndDy1u46tQouLP2vbycEgxmIraYmeIqAVnJ5vEKM7utYx004tsuUJBH';

    const onToken = token => {
        console.log(token);
        alert('payment successFul');
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name='Clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;