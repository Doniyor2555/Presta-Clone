import React from 'react'

import './merchants.scss';

function Merchants() {
  return (
    <section className='merchants'>
      <div className='container'>
        <div className='merchants__title'>Join over 300,000 merchants</div>
        <div className='pinkDivider'></div>
        <div className='merchants__wrapper'>
         <div className='merchants__content'>
            <img src="https://lh3.googleusercontent.com/ybmMqvaLmfavoQjAqXBDJnsa0OKzndcZWgZFO5MNHKGZGhGaDFXQhUR14J8qBOcIyI6QBFCWp2MnxBpyR0yMqS2gdfyu2EanEDLt-g" alt="merchants-photo" />

            <img src="https://www.prestashop.com/sites/default/files/ab29c6cb-fbea-4919-bfbb-1c91f3fd93f8_1_2_1.png" alt="merchants-photo" className='merchants__img'/>

            <img src="https://lh3.googleusercontent.com/sbLoy9ojw5Z6eXkZOflr0mkaQUTv8ajpJhICRHJE0LmkkTjL7R0BNoquqfH8kfba5qgyfRkp5-uq9-r-YNuaJSt0azze2sbBdtig1qxE" alt="merchants-photo" />

            <img src="https://www.prestashop.com/sites/default/files/c3603509-b327-44d3-9e20-0be49b120848_1_3_1.png" alt="merchants-photo" className='merchants__img'/>

            <img src="https://lh3.googleusercontent.com/xkxEG6jthQIcq01TgZmExXIWjZeHpctqxGFMgeqJfAREs7_AATpqWdTNVP9Qz7QLOJpfngQNzuoF_mhvNz7428Z6lFs8Ut-sPz_MnE0" alt="merchants-photo"/>

            <img src="https://www.prestashop.com/sites/default/files/452c81bd-31df-4adc-9692-5027a4241f79_1_1_1.png" alt="merchants-photo" className='merchants__img'/>

         </div>
        </div>
      </div>
    </section>
  )
}

export default Merchants