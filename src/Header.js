import React from 'react'
import './Header.css'
import {Link} from "react-router-dom";
import {useStateValue} from "./StateProvider";

const Header = () => {
    const [{basket}] = useStateValue()
    return (
        <div className="header">
            <Link to='/'>
                <img className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
            </Link>
            <div className="header__search">
                <input className="header__searchInput" type="text"/>
                <span className="material-icons header__searchIcon">
                    search
                </span>
            </div>
            <div className="header__nav">
                <Link to="/checkout" className="link__container">
                    <div className="header__option">
                    <span className="header__optionLineOne">
                        Hello
                    </span>
                        <span className="header__optionLineTwo">
                        Sign in
                    </span>
                    </div>
                </Link>
                <Link to="/checkout" className="link__container">
                    <div className="header__option">
                    <span className="header__optionLineOne">
                        Returns
                    </span>
                        <span className="header__optionLineTwo">
                        & Orders
                    </span>
                    </div>
                </Link>
                <Link to="/checkout" className="link__container">
                    <div className="header__option">
                    <span className="header__optionLineOne">
                        Your
                    </span>
                        <span className="header__optionLineTwo">
                        Prime
                    </span>
                    </div>
                </Link>
                <Link to="/checkout" className="link__container">
                    <div className="header__optionBasket">
                    <span className="material-icons">
                        shopping_basket
                    </span>
                        <span className="header__optionLineTwo header__basketCount">
                            {basket?.length}
                    </span>
                    </div>
                </Link>
            </div>

        </div>
    )
}

export default Header
