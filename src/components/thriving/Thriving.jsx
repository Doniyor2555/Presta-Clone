import React from 'react'

import '../../styles/variables.scss';
import './thriving.scss';
import arrowRight from '../../icons/arrow-right.svg'


function Thriving() {
  return (
    <section className='advertising'>
      <div className='container'>
        <div className='advertising__part'>Be part of a thriving ecosystem</div>
        <div className='pinkDivider'></div>
        <div className='advertising__descr'>PrestaShop is not only software, PrestaShop is also a thriving ecosystem of agencies, developers, and users.</div>
        <div className='advertising__wrapper'>
          <div className='advertising__content'>
            <div className='advertising__quantity'>1,000,000 +</div>
            <div className='advertising__title'>Community members</div>
            <div className='advertising__box'>
              <div className='advertising__subtext'>A helpful community</div>
              <p className='advertising__paragraph'>Find answers to your questions in our forum, <br /> meet other community members to learn and <br /> share expertise.</p>
              <div className='advertising__text'>Connect with other users <img src={arrowRight} alt="" /> </div>
            </div>
          </div>
          <div className='advertising__content'>
            <div className='advertising__quantity'>1,000 +</div>
            <div className='advertising__title'>Contributors</div>
            <div className='advertising__box'>
              <div className='advertising__subtext'>A team of contributors</div>
              <p className='advertising__paragraph'>Developers, testers, and translators are <br /> constantly moving the PrestaShop open source <br /> project forward.</p>
              <div className='advertising__text'>Contribute to the project <img src={arrowRight} alt="" /> </div>
            </div>
          </div>
          <div className='advertising__content'>
            <div className='advertising__quantity'>250 +</div>
            <div className='advertising__title'>Agencies</div>
            <div className='advertising__box'>
              <div className='advertising__subtext'>A network of ecommerce agencies</div>
              <p className='advertising__paragraph'>There are over 250 PrestaShop-certified <br /> agencies around the world ready to help you on <br /> your ecommerce journey.</p>
              <div className='advertising__text'>Find a local expert   <img src={arrowRight} alt="" /> </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Thriving