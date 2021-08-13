import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import useApi from "../../hooks/useApi";
import * as api from "../../api/api";
import { useHistory } from "react-router-dom";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#000",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#000",
    },
  },
};

export default function PaymentForm({ id }) {
  const history = useHistory();
  const confirmPayment = useApi(api.confirmPayment);
  const [message, setMessage] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  console.log("cs", localStorage.getItem("cs"));

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await stripe.confirmCardPayment(localStorage.getItem("cs"), {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          email: "email@gmail.com",
        },
      },
    });

    if (result.error) {
      // Show error to your customer (e.g., insufficient funds)
      console.log(result.error.message);
      setMessage(result.error.message);
    } else {
      // The payment has been processed!
      if (result.paymentIntent.status === "succeeded") {
        try {
          await confirmPayment.request({ orderHistoryId: id });
        } catch (_) {}
        setMessage("Money is in the bank!");
        setTimeout(() => {
          history.push("/");
        }, 2000);
        // Show a success message to your customer
        // There's a risk of the customer closing the window before callback
        // execution. Set up a webhook or plugin to listen for the
        // payment_intent.succeeded event that handles any business critical
        // post-payment actions.
      }
    }
  };
  console.log("confirm", confirmPayment.data);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h4 className="stripe-text">Please Enter your Credit Card Details</h4>
        <fieldset className="FormGroup">
          <div className="FormRow">
            <CardElement options={CARD_OPTIONS} />
          </div>
        </fieldset>
        <button className="pay-btn">Pay</button>
        <p className="stripe-text" style={{ marginTop: 10, color: "green" }}>
          {message}
        </p>
      </form>
    </>
  );
}
