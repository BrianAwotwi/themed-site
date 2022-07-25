import './App.css';
import './theme.scss';

import { useState, useEffect } from 'react';

import { BsSearch, BsFillHandbagFill, BsBookmark } from 'react-icons/bs';
import { RiFacebookFill, RiTwitterFill, RiInstagramLine, RiPinterestFill, RiSpotifyFill,
        RiVisaLine, RiMastercardFill, RiPaypalFill } from 'react-icons/ri';
import { SiAmericanexpress, SiApplepay } from 'react-icons/si';

import ShopCarousel from './ShopCategories';
import Stories from './stories';
import TrustBadges from './trustbadges';
import RenderPromos from './promos';
//import ThemeSwitch, { color } from './theme';

let year = new Date().getFullYear();

function App() {

  const [colorTheme, setColorTheme] = useState('Light');

    useEffect(() =>{
        const currentThemeColor = localStorage.getItem('theme-color');
        if (currentThemeColor) {
            setColorTheme(currentThemeColor);
        }
    }, []);

    const handleClick = (theme) => {
        setColorTheme(theme);
        localStorage.setItem('theme-color', theme);
    }
  
  /*const [isToggled, setIsToggled] = useState(true);

  const toggleLegal = () => {
    return (
      <div className='legal'>
        Don't worry, you can unsubscribe from our mailing list at any time.
        All emails will be sent by Aritzia LP | 611 Alexander Street | Vancouver, BC | V6A 1E1 | Aritzia.com |
      </div>
    )
  }*/
//console.log(color)
  return (
    <div className={`App ${colorTheme}`} >

      <div className='header'>
        <div className='promotional-banner'>
          <RenderPromos />
        </div>
        <div className='header-banner'>
          <div className='logo-container'>
            <a className='logo' href='#' aria-label='logo'>
              <img src='https://www.aritzia.com/on/demandware.static/Sites-Aritzia_CA-Site/-/default/dw0cbcb5bc/images/aritzia_skin/aritzia_logo.svg'/>
            </a>
          
            <div className='navigation'>
              <ul>
                <li>New</li>
                <li>Clothing</li>
                <li>Back In</li>
                <li>Brands</li>
                <li>Swim</li>
                <li>Activewear</li>
                <li>Sale</li>
              </ul>
            </div>
          </div>
     
          <div className='header-utilities'>
            <div className='search-container'>
              <BsSearch />
              <input
                placeholder='Search'
                value=""
                onChange=""
              />
            </div>
            <div className='checkout-bag'><BsFillHandbagFill /></div>
            <div className='bookmark'><BsBookmark /></div>
            <div className='sign-in'><p>SIGN IN</p></div>
            {/*<ThemeSwitch />*/}
            <div className='theme-select'>
              <button className='displayed-theme'>Theme: {colorTheme}</button> 
              <div className="theme-options">
                <div id="theme-dark"
                    onClick={() => handleClick('Dark')}
                    className={`${colorTheme === 'Dark' ? 'active' : ''}`}
                />
                <div id="theme-light"
                    onClick={() => handleClick('Light')}
                    className={`${colorTheme === 'Light' ? 'active' : ''}`}
                />
                <div id="theme-cream"
                    onClick={() => handleClick('Cream')}
                    className={`${colorTheme === 'Cream' ? 'active' : ''}`}
                />
                <div id="theme-green"
                    onClick={() => handleClick('Green')}
                    className={`${colorTheme === 'Green' ? 'active' : ''}`}
                />
                <div id="theme-purple"
                    onClick={() => handleClick('Purple')}
                    className={`${colorTheme === 'Purple' ? 'active' : ''}`}
                />
                <div id="theme-pink"
                    onClick={() => handleClick('Pink')}
                    className={`${colorTheme === 'Pink' ? 'active' : ''}`}
                />
                <div id="theme-blue"
                    onClick={() => handleClick('Blue')}
                    className={`${colorTheme === 'Blue' ? 'active' : ''}`}
                />
                <div id="theme-citrus"
                    onClick={() => handleClick('Citrus')}
                    className={`${colorTheme === 'Citrus' ? 'active' : ''}`}
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className='main'>
        <div className='slideshow-container'>
          <div className='slide-image'>
            <img 
              src='https://s7d9.scene7.com/is/image/Aritzia/ss22-06-12-hp-main-a-2?scl=1'
              alt='woman posing in summer wear'
            />
            <div className='overlay'>
              <div className='overlay-text'>Summer 22</div>
              <div className='overlay-cta'>Shop now</div>
            </div>
          </div>
          <div className='slide-image'>
            <img 
                src='https://s7d9.scene7.com/is/image/Aritzia/ss22-06-12-hp-main-b-1?scl=1'
                alt='woman posing in summer wear'
              />
            <div className='overlay'>
              <div className='overlay-text'>Summer 22</div>
              <div className='overlay-cta'>Shop now</div>
            </div>
          </div>
        </div>

        <div className='slideshow-controls'>

        </div>

        <div className='carousel'>
          <h2>Shop By Category</h2>
          <ShopCarousel />
        </div>

        <div className='stories-container'>
          <h2>Stories</h2>
          <Stories />
        </div>

        <div className='trust-container'>
          <TrustBadges />
        </div>

        <div className='wishlist'>
          <h5>My List</h5>
          <p>Sign in to save your favourite items— we’ll keep them handy for you.</p>
          <button>Sign In</button>
        </div>
      </div>

      <div className='footer'>
        <div className='content-container'>
          <div className='mailing-socials'>
            <h3>Join Aritzia's mailing list</h3>
            <p>Insider info on sales, new arrivals and more good stuff</p>
            <input
              className='email-field'
              type='email'
              placeholder='Email Address'
              value=""
              onChange="" 
            />
            <ul>
              <li><RiFacebookFill /></li>
              <li><RiTwitterFill /></li>
              <li><RiInstagramLine /></li>
              <li><RiPinterestFill /></li>
              <li><RiSpotifyFill /></li>
            </ul>
          </div>
          <div className='site-menu'>
            <h3>Aritzia</h3>
            <ul>
              <li>About Us</li>
              <li>Store Locator</li>
              <li>Careers</li>
              <li>Sustainability</li>
              <li>Diversity, Equality & Inclusion</li>
              <li>Accessibility</li>
              <li>Gift Cards</li>
              <li>Find A List</li>
              <li>Investor Relations</li>
              <li>Artistic License</li>
              <li>California Transparency Act</li>
            </ul>
          </div>
          <div className='help-menu'>
            <h3>Get Help</h3>
              <ul>
                <li>Contact Us</li>
                <li>Size Guide</li>
                <li>Shipping</li>
                <li>Returns & Exchanges</li>
                <li>Payment & Security</li>
                <li>Order Tracking</li>
                <li>Special Ordrs</li>
                <li>Promotional Deals</li>
                <li>Our Services</li>
                <li>Send Us Feedback</li>
                <li>Afterpay</li>
              </ul>
          </div>
        </div>

        <div className='country-selector'>
          <select>
            <option value="can EN">Canada ($CAD) - EN</option>
            <option value="can FR">Canada ($CAD) - FR</option>
            <option value="usa">USA ($USD)</option>
            <option value="international">International ($USD) - EN</option>
          </select>
        </div>
  
        <div className='ar-global'>
          <div className='legal'>
            <ul>
              <li><p>&copy; {year} Aritzia LP</p></li>
              <li><p>Privacy Policy</p></li>
              <li><p>Terms Of Use</p></li>
              <li><p>Site Map</p></li>
            </ul>
          </div>

          <div className='pay-icons'>
            <ul>
              <li><RiVisaLine /></li>
              <li><RiMastercardFill /></li>
              <li><SiAmericanexpress /></li>
              <li><SiApplepay /></li>
              <li><RiPaypalFill /></li>
            </ul>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
