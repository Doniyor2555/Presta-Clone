import React from 'react'

import '../../styles/variables.scss';
import './tryPresta.scss';

function TryPresta() {
  return (
    <section className='tryPresta'>
      <div className='container'>
        <div className='tryPresta__wrapper'>
        <div className='tryPresta__content'>
          <div className='tryPresta__subtitle'>Try PrestaShop</div>
          <div className='pinkDivider pinkDivider-left'></div>
          <div className='tryPresta__descr'>Take a look at what PrestaShop looks like from the back office.</div>
          <button>Live Demo</button>
        </div>
        <img src="https://www.prestashop.com/sites/default/files/dotcom_16_9_test_hp.png" alt="Girl" />
        </div>
      </div>
    </section>
  )
}

export default TryPresta