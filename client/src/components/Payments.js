import React, { Compnent } from 'react'
import StripeCheckout from 'react-stripe-checkout'

class Payments extends Compnent {
  render() {
    return (
      <StripeCheckout  amount={5} token={token => console.log(token)} stripeKey={process.env.REACT_APP_STRIPE_KEY}/>
    )
  }
}

export default Payments
