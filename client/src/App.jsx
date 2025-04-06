/* eslint-disable no-unused-vars */
import React from "react"
import Checkout from "./payment/Checkout";

const App = (props) => {
  return (
    <>
        <div style={{ padding: "20px" }}>
            <h2>Razorpay Demo</h2>
            < Checkout />
        </div>
    </>
  )
};

export default App;