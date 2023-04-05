import React from 'react'

import '../../styles/variables.scss';
import './sell.scss';

function Sell() {
  return (
    <section className='sell'>
      <div className='container'>
        <div className='sell__wrapper'>
          <div className='sell__subheader'>Everything you need to sell products online</div>
          <div className='pinkDivider'></div>
          <div className='sell__subtitle'>All the ecommerce features you need, and more. With PrestaShop, develop your commerce online and grow your business.</div>
          <div className='sell__contentWrapper'>
            <div className='sell__content'>
              <img src="https://www.prestashop.com/sites/default/files/color_palette.png" alt="palette" />
              <div className='sell__subtext'>Customize your online store</div>
              <p className='sell__descr'>Personalize your ecommerce website: <br /> pick a theme, specific features, and <br /> everything your brand needs.</p>
            </div>
            <div className='sell__content'>
              <img src="https://www.prestashop.com/sites/default/files/unnamed_0_0.png" alt="store" />
              <div className='sell__subtext'>Run your ecommerce website</div>
              <p className='sell__descr'>Manage everything from your website <br /> back office: product catalog, orders, <br /> payments, shipping, and data.</p>
            </div>
            <div className='sell__content'>
              <img src="https://www.prestashop.com/sites/default/files/unnamed_1_0.png" alt="progress" />
              <div className='sell__subtext'>Grow your revenue</div>
              <p className='sell__descr'>Scale your business with PrestaShop: <br /> launch marketing campaigns to reach <br /> more customers.</p>
            </div>
            <div className='sell__content'>
              <img src="https://www.prestashop.com/sites/default/files/unnamed_2_1.png" alt="globus" />
              <div className='sell__subtext'>Go international</div>
              <p className='sell__descr'>Sell across borders: conquer new <br /> markets with a multilanguage store <br /> and multicurrency options.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sell;