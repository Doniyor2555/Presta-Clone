import React from 'react'

import '../../styles/variables.scss';
import './partners.scss';


function Partners() {
  return (
    <section className='partners'>
      <div className='container'>
        <div className='partners__title'>Our partners are here to help</div>
        <div className='pinkDivider'></div>
        <div className='partners__wrapper'>
          <a href="#">
            <img src="https://www.prestashop.com/sites/default/files/paypal_logo_0.png" alt="partners-logo" />
          </a>
          <a href="#">
            <img src="https://www.prestashop.com/sites/default/files/google_logo_0_0.png" alt="partners-logo" />
          </a>
          <a href="#">
            <img src="https://www.prestashop.com/sites/default/files/mailchimp_logo.png" alt="partners-logo" />
          </a>
          <a href="#">
            <img src="https://www.prestashop.com/sites/default/files/stripe_logo_1.png" alt="partners-logo" />
          </a>
          
          <a href="#">
            <img src="https://www.prestashop.com/sites/default/files/logo_facebook_2_0.png" alt="partners-logo" />
          </a>
          <a href="#">
            <img src="https://www.prestashop.com/sites/default/files/hostinger_horizontal_purple_0.png" alt="partners-logo" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Partners