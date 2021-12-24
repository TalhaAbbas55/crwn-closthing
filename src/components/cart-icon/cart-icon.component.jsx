import React from 'react';
import './cart-icon.styles.scss';
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.action";
import { ReactComponent as ShoppinIcon } from "../../assets/122 shopping-bag.svg";

const CartIcon = ({ toggleCartHidden }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppinIcon className='shopping-icon' />
        <span className="item-count">0</span>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);

