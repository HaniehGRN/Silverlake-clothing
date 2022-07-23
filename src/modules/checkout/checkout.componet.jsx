// this module works fine
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { RiErrorWarningLine } from "react-icons/ri";
import { GoCreditCard } from "react-icons/go";
import { BsCalendar3 } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { ImGift } from "react-icons/im";

import FormInput from "../../shared/components/form-input/form-input.component";
import CustomButton from "../../shared/components/custom-button/custom-button.component";
import CheckoutItem from "../../shared/components/checkout-item/checkout-item.component";

import "./checkout.styles.scss";

const CheckoutPage = () => {

          const [name, setName] = useState("");
          const cartItems = useSelector((state) => state.cart.items);
          const total = useSelector((state) => state.cart.total);

          useEffect(() => {
                    console.log(cartItems);
          }, [cartItems])

          const handleChange = (event) => {
                    setName(event.target.value);
          }

          return (
                    <div className="checkout-container">
                              <div className="payment-details">
                                        <h1>Payment Details</h1>
                                        <form>
                                                  <FormInput
                                                            name="nameOnCard"
                                                            type="text"
                                                            value={name}
                                                            label="Name on card"
                                                            handleChange={handleChange}
                                                            required
                                                  >
                                                            <AiOutlineUser />
                                                  </FormInput>
                                                  <FormInput
                                                            name="cardNumber"
                                                            type="text"
                                                            value={name}
                                                            label="Card number"
                                                            handleChange={handleChange}
                                                            required
                                                  >
                                                            <GoCreditCard />
                                                  </FormInput>
                                                  <div className="exp-cvc">
                                                            <FormInput
                                                                      name="expiration"
                                                                      type="text"
                                                                      value={name}
                                                                      label="Expiration"
                                                                      handleChange={handleChange}
                                                                      required
                                                            >
                                                                      <BsCalendar3 />
                                                            </FormInput>
                                                            <FormInput
                                                                      name="cvc"
                                                                      type="text"
                                                                      value={name}
                                                                      label="CVC"
                                                                      handleChange={handleChange}
                                                                      required
                                                            >
                                                                      <RiErrorWarningLine />
                                                            </FormInput>
                                                  </div>
                                                  <CustomButton>PAY</CustomButton>
                                        </form>
                              </div>
                              <div className="vertical-line"></div>
                              <div className="order-and-total">
                                        <div className="order-summary">
                                                  <h2>Order summary</h2>
                                                  {
                                                            cartItems.length > 0 ?
                                                                      <div className="checkout-items">
                                                                                {
                                                                                          cartItems.map((cartItem) =>
                                                                                                    <CheckoutItem key={cartItem.id} cartItem={cartItem} cartItems={cartItems} />
                                                                                          )
                                                                                }
                                                                      </div>
                                                                      : <p>your cart is empty</p>
                                                  }
                                        </div>
                                        <hr />
                                        <div className="apply-gift-discount">
                                                  <FormInput
                                                            name="gift-discount"
                                                            type="text"
                                                            value={name}
                                                            label="Gift card / Discount code"
                                                            handleChange={handleChange}
                                                            required
                                                  >
                                                            <ImGift />
                                                  </FormInput>
                                                  <CustomButton>Apply</CustomButton>
                                        </div>
                                        <hr />
                                        <div className="bill">
                                                  <div className="subtotal">
                                                            <span>Subtotal</span>
                                                            <span className="amount">$19.00</span>
                                                  </div>
                                                  <div className="tax">
                                                            <span>Tax</span>
                                                            <span className="amount">$1.52</span>
                                                  </div>
                                                  <div className="shipping">
                                                            <span>Shipping</span>
                                                            <span className="amount">$0.00</span>
                                                  </div>
                                                  <div className="total">
                                                            <span>Total</span>
                                                            <span className="amount">{total}</span>
                                                  </div>
                                        </div>
                              </div>
                    </div>
          )
};

export default CheckoutPage;