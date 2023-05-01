
import { useState } from 'react';
import Header from '../../components/header/Header';

import './companies.scss';

function Companies() {
  const [toggleSelection, setToggleSelection] = useState(false);

  document.querySelectorAll('.option > span').forEach(item => {
    item.addEventListener("click", (e) => {
      console.log(e.target);
    })
  })

  return (
    <section className='companies'>
      <Header />

      <div className='companies__subheader'>
        <div className='companies__subheader-title'>Find a PrestaShop agency or expert</div>
        <div className='companies__subheader-subtitle'>Select your need from the list below</div>
        <div className='selection'>
          <input type="text" placeholder='Select my need' onClick={() => setToggleSelection(!toggleSelection)} />
          {toggleSelection ? <div className='options'>
            <div className='option'>
              <span>Create my store</span>
            </div>
            <div className='option'>
              <span>Megrate my store</span>
            </div>
            <div className='option'>
              <span>Optimize my store</span>
            </div>
            <div className='option'>
              <span>Boost my store</span>
            </div>
          </div> : null
          }
        </div>
      </div>
    </section>
  )
}

export default Companies