import React from 'react'
import { Link } from 'react-router-dom';


import '../../styles/variables.scss';
import './download.scss';

function DownloadPage() {
  return (
    <>
      <header className='dowloadHeader'>
        <div className='container'>
            <div className='dowloadHeader__header-content'>
              <Link to='/'>
                <img src="https://www.prestashop.com/sites/all/themes/prestashop/images/logos/logo-fo-prestashop-colors.svg" alt="presta-shop-logo" />
              </Link>
              <select>
                <option value="1">En</option>
                <option value="2">Ru</option>
                <option value="3">Uk</option>
              </select>
            </div>
        </div>
      </header> 
      <section className='download'>
        <div className="container">
          <div className="download__wrapper">
            <div className="download__content">
              <div className='download__subtitle'>Download PrestaShop</div>
              <div className='download__descr'>Create your account or log in to download PrestaShop for free and start <br /> building your online shop.</div>
              <div className="download__wrap">
                <span className='download__profile'>Profile</span>
                <select className='download__select' placeholder='Select your profile'>
                  <option value="1">Select your profile</option>
                  <option value="2">Merchant</option>
                  <option value="3">Freelance</option>
                  <option value="4">Agency</option>
                  <option value="5">Technology partner</option>
                </select>
                <button className='download__button'>Continue</button>
                <p className='download__paragraph'>By clicking on "Continue", you accept <a href="#">our terms and conditions of use of PrestaShop Download</a> and acknowledge <br /> that you have read our <a href="#">PrestaShop Download privacy policy.</a></p>
              </div>
            </div>
            <img src="https://www.prestashop.com/sites/default/files/download-en.png" alt="telephone-img" />
          </div>
        </div>
      </section>
    </>
  )
}

export default DownloadPage