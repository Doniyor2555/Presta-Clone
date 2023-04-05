import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import './header.scss';
import './resourcesMenu.scss';
import '../../styles/variables.scss'
import './about.scss';
import './marketPlace.scss';

import arrowDown from '../../icons/arrowDown.svg';
import cookie from '../../icons/cookie.svg';
import calendar from '../../icons/calendar.svg';
import location from '../../icons/location.svg';
import palette from '../../icons/palette.svg';
import puzzle from '../../icons/puzzle.svg';



function Header() {
  const [menu, setMenu] = useState(false);
  const [secondMenu, setSecond] = useState(false);
  const [thirdMenu, setThridMenu] = useState(false);
  const [foursMenu, setFoursMenu] = useState(false);
  const [activeHeader, setHeader] = useState(false);

  let classNames = 'header__sub-show display-none',
      overlay = 'overlay',
      resourceMenu = 'header__sub-show xl',
      aboutMenu = 'header__sub-show sm',
      marketPlace = 'header__sub-show smx';

  if(menu) {
    classNames += " display-block";
    overlay += ' block'
  } else {
    overlay += ' display-none';
  }

  if(secondMenu) {
    overlay += ' block'
    resourceMenu += ' block1'
  } else {
    overlay += ' display-none';
    resourceMenu += ' none1'
  }

  if(thirdMenu) {
    overlay += ' block'
    aboutMenu += ' block2'
  } else {
    overlay += ' display-none';
    aboutMenu += ' none2'
  }

  if(foursMenu) {
    overlay += ' block'
    marketPlace += ' foursBlock'
  } else {
    overlay += ' display-none';
    marketPlace += ' foursHide'
  }
  
  const showAndHideMenu = () => {setMenu(!menu);}
  
  const showSecondAndHide = () => {setSecond(!secondMenu);}

  const showAboutMenuAndHide = () => {setThridMenu(!thirdMenu);}

  const showFoursMenuAndHide = () => {setFoursMenu(!foursMenu);}

  window.addEventListener("scroll", () => {
    if(window.scrollY > 50) {
      setHeader(true)
    } else {
      setHeader(false)
    }
  })

  // useEffect(() => {
  //   return () => {
  //     window.removeEventListener('scroll');
  //   }
  // }, [])


  return (
    <header className={activeHeader ? "header active" : "header"}>
      <div className='container'>
        <div className='header__wrapper'>
          {activeHeader ? <img src='https://www.prestashop.com/sites/all/themes/prestashop/images/logos/logo-fo-prestashop-colors.svg'/> : <img src="https://www.prestashop.com/sites/all/themes/prestashop/images/logos/logo-fo-prestashop.svg" alt="header__logo" className="header__logo" />}
          <div className={overlay}></div>
          <ul className="header__sub-titles">
            <li className={activeHeader ? 'header__subheaders activeText' : 'header__subheaders'} onMouseEnter={showAndHideMenu} onMouseLeave={showAndHideMenu}>
              Products
              <div className={classNames}>
                <div className='header__sub-show-solutions'>Solutions</div>
                <div className='divider'></div>
                <div className='header__sub-show-flex'>
                  <div className='header__sub-show-container'>
                    <Link to='/download' style={{textDecoration: "none"}}>
                  
                      <div className='header__sub-show-prestaShop-wrapper'>
                        <div className='header__sub-show-prestaShop-content'>
                          <div className='header__sub-show-prestaArrowDown'>
                            <img src={arrowDown} alt="arrow-down" className='header__sub-show-arrow-down'/>
                          </div>
                          <div className='header__sub-show-footer'>
                            <span>PrestaShop</span>
                            <p>Start selling and grow quickly <br /> with our e-commerce platform </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className='header__sub-show-container'>
                    <div className='header__sub-show-prestaShop-wrapper'>
                      <div className='header__sub-show-prestaShop-content'>
                        <div className='header__sub-show-prestaArrowDown'>
                          <img src={cookie} alt="arrow-down" className='header__sub-show-arrow-down'/>
                        </div>
                        <div className='header__sub-show-footer'>
                          <span>PrestaShop Experts</span>
                          <p> Find the trusted agency to create &amp; scale your business </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='sub__footer'>
                  <div className='divider no-mt'></div>
                  <div className='sub__footer-flex'>
                    <div className='sub__footer-subtitle'>PrestaShop Essentials <span>The modules for your growth</span></div>
                    <div className='sub__footer-subtitle'>PrestaShop Platform <span>A hosting and fully managed solution</span></div>
                    <div className='sub__footer-subtitle'>PrestaShop Professional <br />  Services <span>Boost the growth of your ecommerce</span></div>

                  </div>
                </div>
              </div>
            </li>
            <li className={activeHeader ? 'header__subheaders resoursce activeText' : 'header__subheaders resoursce'} onMouseEnter={showSecondAndHide} onMouseLeave={showSecondAndHide}>
              Resources
              <div className={resourceMenu}>
                <div className='header__sub-show-wrapper'>
                  <div className='header__sub-show-column'>
                    <span className='header__sub-show-subheader'>MERCHANTS</span>
                    <p className='header__sub-show-paragraph'>Find useful resources to manage <br /> and scale your business</p>
                    <ul className='header__sub-show-subwrap'>
                      <li className='header__sub-show-subtitles'><a href="#">Store demo</a></li>
                      <li className='header__sub-show-subtitles'><a href="#">Features</a></li>
                      <li className='header__sub-show-subtitles'><a href="#">Business Name Generator</a></li>
                      <li className='header__sub-show-subtitles'><a href="#">Store examples</a></li>
                      <li className='header__sub-show-subtitles'><a href="#">Forum</a></li>
                      <li className='header__sub-show-subtitles'><a href="#">Blog</a></li>
                      <li className='header__sub-show-subtitles'><a href="#">Trainings</a></li>
                      <li className='header__sub-show-subtitles'><a href="#">Help center</a></li>
                    </ul>
                  </div>
                  <div className='header__sub-show-column'>
                    <span className='header__sub-show-subheader'>DEVELOPERS</span>
                    <p className='header__sub-show-paragraph'>Get involved in the PrestaShop open <br /> source project</p>
                    <ul className='header__sub-show-subwrap'>
                      <li className='header__sub-show-subtitles'><a href="#">Developers blog</a></li>
                      <li className='header__sub-show-subtitles'><a href="#">Developer documentation</a></li>
                      <li className='header__sub-show-subtitles'><a href="#">GitHub</a></li>
                      <li className='header__sub-show-subtitles'><a href="#">Slack</a></li>
                      <li className='header__sub-show-subtitles'><a href="#">Contributors</a></li>
                      <li className='header__sub-show-subtitles'><a href="#">Blog</a></li>
                      <li className='header__sub-show-subtitles'><a href="#">Trainings</a></li>
                    </ul>
                  </div>
                  <div className='header__sub-show-column'>
                    <span className='header__sub-show-subheader'>PARTNERS</span>
                    <p className='header__sub-show-paragraph'>Find out more about our partner <br />community, or join them to increase <br /> your notoriety</p>
                    <ul className='header__sub-show-subwrap'>
                      <li className='header__sub-show-subtitles'><a href="#">Become a partner</a></li>
                      <li className='header__sub-show-subtitles'><a href="#">Developer Our partners</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className={activeHeader ? 'header__subheaders activeText' : 'header__subheaders'} onMouseEnter={showAboutMenuAndHide} onMouseLeave={showAboutMenuAndHide}>
              About
              <div className={aboutMenu} >
                <div className='header__sub-show-con'>
                  <div className='header__sub-show-texts'>
                    <div className='header__sub-show-texts-subheader'>ABOUT US</div>
                    <div className='header__sub-show-texts-subtitle'>Get to know PrestaShop</div>
                    <div className='header__sub-show-texts-subbtext'><a href="#">Our mission</a></div>
                    <div className='header__sub-show-texts-footerText'><a href="#">Careers</a></div>
                    <div className="divider"></div>
                  </div>
                  <div className='header__sub-show-main'>
                    <div className='header__sub-show-meet'>Meet us</div>
                    <div className='header__sub-show-connection'>Come and connect with us</div>
                    <div className='header__sub-show-flex'>
                      <div className='header__sub-show-wrap'>
                        <div className='header__sub-show-content'>
                          <img src={calendar} alt="calendar"/>
                            <div className='header__sub-show-events'>PrestaShop Events</div>
                            <p className='header__sub-show-comunity'>Meet and share with our community</p>
                      </div>
                      </div>
                        <div className='header__sub-show-wrap'>
                            <div className='header__sub-show-content'>
                              <img src={location} alt="calendar"/>
                              <div className='header__sub-show-events'>PrestaShop Events</div>
                              <p className='header__sub-show-comunity'>Meet and share with our community</p>
                            </div>
                        </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </li>
            <li className={activeHeader ? 'header__subheaders activeText' : 'header__subheaders'} onMouseEnter={showFoursMenuAndHide} onMouseLeave={showFoursMenuAndHide}>
              Addons Marketplace
              <div className={marketPlace}>
                <div className='header__sub-show-con'>
                  <div className='header__sub-show-texts'>
                    <div className='header__sub-show-texts-subheader'>ADDONS</div>
                    <div className='header__sub-show-texts-subtitle'>Increase your store potential</div>
                    <div className="divider xlm"></div>
                  </div>
                  <div className='header__sub-show-flex'>
                    <div className='header__sub-show-wrap'>
                        <div className='header__sub-show-content'>
                          <img src={palette} alt="calendar"/>
                          <div className='header__sub-show-events'>Templates</div>
                          <p className='header__sub-show-comunity'> Customize your store <br /> look &amp; feel </p>
                        </div>
                      </div>
                      <div className='header__sub-show-wrap'>
                        <div className='header__sub-show-content'>
                          <img src={puzzle} alt="calendar"/>
                          <div className='header__sub-show-events'>Modules</div>
                          <p className='header__sub-show-comunity'>Add relevant e- <br /> commerce features to <br /> your store</p>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div className='header__actions'>
            <button className='btn'>Create my store</button>
            <select name="select" className={activeHeader ? 'header__select activeText' : 'header__select'}>
              <option value="EN">En</option>
              <option value="RU">Ru</option>
              <option value="UZ">Uz</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header