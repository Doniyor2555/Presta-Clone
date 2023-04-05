import React from 'react'

import './cookies.scss';

function Cookies() {
  return (
    <div className='cookie'>
      <div className='cookie__wrapper'>
        <div className='cookie__content'>
          <h4 className='cookie__subtitle'>Managament <br /> <span>of Cookies</span></h4>
          <p className='cookie__descr'>PrestaShop uses necessary cookies for the correct operation of the website. Other categories of cookies may be used to personalize your experience, to distribute personalized commercial offers or to carry out analyses to optimize our offer. Your consent can be withdrawn at any time via the link in our data protection policy</p>
          <a href="#">Read the Privacy Policy</a>
        </div>
      </div>
    </div>
  )
}

export default Cookies