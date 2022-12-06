import React from 'react';
import './Header.css';
function Header() {
  return (
        <div className="header">
            <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon" className="header__logo" />
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                {/* logo */}
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">Hello Guest
                    </span>
                    <span className="header__optionLineTwo">Sign In
                    </span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Returns
                    </span>
                    <span className="header__optionLineTwo">Orders
                    </span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Your
                    </span>
                    <span className="header__optionLineTwo">Prime
                    </span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Hello Guest
                    </span>
                    <span className="header__optionLineTwo">Sign In
                    </span>
                </div>
            </div>
        </div>
  )
}

export default Header