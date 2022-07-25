import React from "react";

const HeaderComponents = () => {
    return (
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
                onClick={toggleLegal} 
              />
            </div>
            <div className='checkout-bag'><BsFillHandbagFill /></div>
            <div className='bookmark'><BsBookmark /></div>
            <div className='sign-in'><p>SIGN IN</p></div>
          </div>

        </div>
    )
}