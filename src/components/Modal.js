import React, { useState } from 'react';
import "./Modal.css";
import editPen from "../assets/edit-pencil.svg";
import masterCard from "../assets/mc_symbol.svg";
import verifiedBadge from '../assets/verified-badge.svg';
import dots from "../assets/dots.svg";
import chip from "../assets/chip.png";
import wifi from "../assets/wifi.png";
import masterCard2 from "../assets/mastercard-2.svg";
import apple from "../assets/apple-13.svg";
import closeBtn from "../assets/close.svg";

function Modal() {

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  }

  return (
    <>
      <h2 className="title1">Hey, click on the <span>"open"</span> button below to make payment.</h2>
      <button onClick={ toggleModal } className="openModalBtn"> Open </button>

      { modal && (
        <div className="modal">
        <div className="overlay">
          <div className="modal-content">
            <button className="closeModal" onClick={ toggleModal }> 
              <img src={closeBtn} alt="close button" width="30"/>
            </button>
            <div className="form-section">
              <header>
                <div className="logo">
                  <div>
                    {/* icon */}
                  </div>
                  <h2>AceCoin<span>Pay</span></h2>
                </div>
                <div className="time">
                  <button> 0 </button>
                  <button> 1 </button>
                  <h4> : </h4>
                  <button> 1 </button>
                  <button> 9 </button>
                </div>
              </header>
              <form>
                <div className="cardNumber">
                  <div>
                    <h3>Card Number</h3>
                    <p>Enter the 16-digit card number on the card</p>
                  </div>
                  <div className="blueText">
                    <img src={ editPen } alt="edit pen icon" width="12" className="edit-pen" />
                    <h5>Edit</h5>
                  </div>
                </div>
                <div className="cardInputContainer">
                  <img src={ masterCard } alt="master card logo" width="30" className='masterCardIcon'/>
                  <input className="cardInput" placeholder="2412  -  7512  -  3412  -  3456" type="text" />
                  <img src={ verifiedBadge } alt="verified badge" width="20" className="verifiedIcon"/>
                </div>

                <div className="row">
                  <div>
                    <h3>CVV Number</h3>
                    <p>Enter the 3 or 4 digit number on the card</p>
                  </div>
                  <div className="rowInputBox">
                    <input className="rowInput" type="text" placeholder="327"/>
                    <img src={ dots } alt="dots icon" className="dotsIcon" width="20"/>
                  </div>
                </div>

                <div className="expiryDate">
                  <div>
                    <h3>Expiry Date</h3>
                    <p>Enter the expiry date of the card</p>
                  </div>
                  <div className="inputBox">
                    <input className="dateInput" placeholder="09" /> 
                    <h3>/</h3>
                    <input className="dateInput" placeholder="22" />
                  </div>
                </div>

                <div className="row">
                  <div>
                    <h3>Password</h3>
                    <p>Enter your Dynamic password</p>
                  </div>
                  <div className="passwordInputBox">
                    <input className="passwordInput" type="password" placeholder='********'/>
                    <img src={ dots } alt="dots icon" className="dotsIcon" width="20"/>
                  </div>
                </div>

                <button type="submit" className="paymentBtn">Pay Now</button>
              </form>
            </div>

            <div className="fee-section">
              <div className='blue'></div>
              <div className="creditCard">
                <div className='cardHead'>
                  <img src={ chip } alt="card chip icon" width="30" height="35" className="chip" />
                  <img src={ wifi } alt="wifi icon" width="20" className="wifi" />
                </div>
                <div className='cardBody'>
                  <p>Jonathan Michael</p>

                  <div className='digits'>
                    <div className='circles'>
                      <p className='circle'></p>
                      <p className='circle'></p>
                      <p className='circle'></p>
                      <p className='circle'></p>
                    </div>
                    <h3 className="actual-digits">3456</h3>
                  </div>
                </div>
                <div className='cardFooter'>
                  <h4>09/22</h4>
                  <img src={ masterCard2 } alt="mastercard logo" width="40" />
                </div>
              </div>

              <div className="checkoutDetails">
                <div className="purchase-data">
                  <div className="data">
                    <div className="title">Company</div>
                    <div className="value">
                      <img src={ apple } width="15" alt="apple logo" />
                      <p className="inner-text">Apple</p>
                    </div>
                  </div>

                  <div className="data">
                    <div className="title">Order Number</div>
                    <div className="value">
                      <p className="inner-text">1266201</p>
                    </div>
                  </div>

                  <div className="data">
                    <div className="title">Product</div>
                    <div className="value">
                      <p className="inner-text">MacBook Air</p>
                    </div>
                  </div>

                  <div className="data">
                    <div className="title">VAT (20%)</div>
                    <div className="value">
                      <p className="inner-text">$100.00</p>
                    </div>
                  </div>
                </div>

                <div className="divider">
                  <div className="left"></div>
                  <div className="right"></div>
                </div>

                <div className="purchase-total"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
    </>
  );
}

export default Modal;