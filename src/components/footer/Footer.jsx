import React from 'react'

import '../../styles/variables.scss';
import './footer.scss';

function Footer() {
  return (
    <footer className='footer'>
      <div className='container container-footer'>
        <div className='footer__wrapper'>
        {/* first column */}
          <div className='footer__content first'>
            <div className='footer__subtitle'>Get Started</div>
            <ul className='footer__titles'>
              <li className="footer__title">
                <a href="#">Get started</a>
              </li>
              <li className="footer__title">
                <a href="#">Create online store</a>
              </li>
              <li className="footer__title">
                <a href="#">Dropshipping</a>
              </li>
              <li className="footer__title">
                <a href="#">Ecommerce platform</a>
              </li>
              <li className="footer__title">
                <a href="#">All versions</a>
              </li>
              <li className="footer__title">
                <a href="#">System requirements</a>
              </li>
            </ul>
            <div className='footer__subtitle'>Partners</div>
            <ul className='footer__titles'>
              <li className="footer__title">
                <a href="#">Find an agency</a>
              </li>
              <li className="footer__title">
                <a href="#">Become Agency Partner</a>
              </li>
              <li className="footer__title">
                <a href="#">Find a Hosting Provider</a>
              </li>
              <li className="footer__title">
                <a href="#">Get ecommerce funding</a>
              </li>
              <li className="footer__title">
                <a href="#">Technology Partners</a>
              </li>
              <li className="footer__title">
                <a href="#">Become Technology Partner</a>
              </li>
              <li className="footer__title">
                <a href="#">Developer Partners</a>
              </li>
              <li className="footer__title">
                <a href="#">Become Developer Partner</a>
              </li>
              <li className="footer__title">
                <a href="#">Ambassadors Program</a>
              </li>
            </ul>
          </div>

          {/* second column */}
          <div className='footer__content'>
            <div className='footer__subtitle'>Resources</div>
            <ul className='footer__titles'>
              <li className="footer__title">
                <a href="#">Videos Tutorials</a>
              </li>
              <li className="footer__title">
                <a href="#">Translations</a>
              </li>
              <li className="footer__title">
                <a href="#">Magento to PrestaShop migration</a>
              </li>
              <li className="footer__title">
                <a href="#">Ecommerce calendar</a>
              </li>
              <li className="footer__title">
                <a href="#">Developers versions</a>
              </li>
            </ul>
            <div className='footer__subtitle'>PrestaShop Essentials</div>
            <ul className='footer__titles'>
              <li className="footer__title">
                <a href="#">PrestaShop Facebook</a>
              </li>
              <li className="footer__title">
                <a href="#">PrestaShop Metrics</a>
              </li>
              <li className="footer__title">
                <a href="#">PrestaShop Checkout</a>
              </li>
              <li className="footer__title">
                <a href="#">PrestaShop Marketing</a>
              </li>
              <li className="footer__title">
                <a href="#">Prestashop Paylater</a>
              </li>
            </ul>
          </div>

          {/* third column */}
          <div className='footer__content'>
            <div className='footer__subtitle'>Help</div>
            <ul className='footer__titles'>
              <li className="footer__title">
                <a href="#">Support</a>
              </li>
              <li className="footer__title">
                <a href="#">FAQ</a>
              </li>
              <li className="footer__title">
                <a href="#">E-learning</a>
              </li>
              <li className="footer__title">
                <a href="#">Contact</a>
              </li>
              <li className="footer__title">
                <a href="#">Sitemap</a>
              </li>
              <li className="footer__title">
                <a href="#">Account privacy</a>
              </li>
            </ul>
          </div>

          {/* input */}
          <div className='footer__content input'>
            <div className='footer__subtitle'>Newsletter</div>
            <div className='footer__descr'>Subscribe today to get the latest ecommerce trends and tips.</div>
            <form>
              <input type="email" className='footer__input' placeholder='Email*'/>
              <button className='footer__formSubmit'>Subscribe</button>
            </form>
            <p className='footer__paragraph'>By submitting this form, I agree to the data entered being used by PrestaShop S.A for sending <br /> newsletters and promotional offers. You can unsubscribe at any time by using the link in the emails sent <br /> to you. <a href="#">Learn more about managing your data and rights.</a></p>
            <div className='footer__copyright'>© Copyright 2007-2023 PrestaShop. All rights reserved.</div>
            <a href="#" className='footer__link'>Legal Notice</a>
            <a href="#" className='footer__link'>Terms of Use</a>
            <a href="#" className='footer__link'>Personal Data Protection Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer