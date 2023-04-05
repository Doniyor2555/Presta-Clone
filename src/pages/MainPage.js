import Header from '../components/header/Header';
import Promo from '../components/promo/Promo';
import Sell from '../components/sell/Sell';
import TryPresta from '../components/tryPrestaShop/TryPresta';
import Merchants from '../components/merchants/Merchants';
import Thriving from '../components/thriving/Thriving';
import SellOnline from '../components/sellOnline/SellOnline';
import Partners from '../components/partners/Partners';
import Footer from '../components/footer/Footer';
import Cookies from '../components/cookies/Cookies';


const MainPage = () => {
  return (
    <>
      <Header/>
      <Promo/>
      <Sell/>
      <TryPresta/>
      <Merchants/>
      <Thriving/>
      <Partners/>
      <SellOnline/>
      <Footer/>
      {/* <Cookies/> */}   
    </>
  )
}

export default MainPage;