import React from 'react'

import './sellOnline.scss';
import '../../styles/variables.scss';

function SellOnline() {
  return (
    <section className='sellOnline'>
      <div className='container'>
        <div className='sellOnline__wrapper'>
          <div className='sellOnline__descr'>
            <div className='sellOnline__subtitle'>Ready to sell online?</div>
            <p className='sellOnline__title'>Build your online store with PrestaShop in just a few clicks, or find the right expert to <br /> help you.</p>
          </div>
          <button className='btn btn-big'>Get started</button>
        </div>
      </div>
    </section>
  )
}

export default SellOnline