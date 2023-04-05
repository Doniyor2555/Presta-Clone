import React from 'react'
import '../../styles/variables.scss';
import './promo.scss'

function Promo() {
  return (
    <section className='promo'>
      <div className='container'>
        <div className='promo__wrapper'>
          <div className='promo__content'>
            <div className='promo__subtitle'>Your ecommerce. <br />
              Your brand. Your rules.
            </div>
            <p className='promo__descr'>PrestaShop offers you a highly flexible and     scalable ecommerce <br /> platform to launch an online business 100% owned and designed by <br /> you.</p>
            <button className='btn btn-big'>Get started</button>
          </div>
          <div className='promo__img'>
            <img src="https://www.prestashop.com/sites/default/files/visuel_a-b-test-papiertigre_home-eng-ab2.png" alt="main-img" />
          </div>
        </div>
        <div className='promo__companies'>
          <img src="https://www.prestashop.com/sites/default/files/kway-white-100x45_1.svg" alt="companies-logo" />
          <img src="https://www.prestashop.com/sites/default/files/freshly-white-100x45.svg" alt="companies-logo" />
          <img src="https://www.prestashop.com/sites/default/files/magimix_blanc-100x45_1.png" alt="companies-logo" />
          <img src="https://www.prestashop.com/sites/default/files/huygens-white-100x45.svg" alt="companies-logo" />
          <img src="https://www.prestashop.com/sites/default/files/dealy-white-100x45.svg" alt="companies-logo" />
          <img src="https://www.prestashop.com/sites/default/files/bobbies-white-100x45.svg" alt="companies-logo" />
        </div>
      </div>
    </section>
  )
}

export default Promo