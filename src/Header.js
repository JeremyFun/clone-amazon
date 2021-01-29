import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <img className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
            <div className="header__search">
                <input className="header__searchInput" type="text"/>
                <span className="material-icons header__searchIcon">
                    search
                </span>
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Hello
                    </span>
                    <span className="header__optionLineTwo">
                        Sign in
                    </span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Returns
                    </span>
                    <span className="header__optionLineTwo">
                        & Orders
                    </span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Your
                    </span>
                    <span className="header__optionLineTwo">
                        Prime
                    </span>
                </div>
                <div className="header__optionBasket">
                    <span className="material-icons">
                        shopping_basket
                    </span>
                    <span className="header__optionLineTwo header__basketCount">
                        0
                    </span>
                </div>
            </div>

        </div>
    )
}

export default Header
