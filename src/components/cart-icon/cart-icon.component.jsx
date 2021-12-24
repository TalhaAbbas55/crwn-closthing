import React from 'react';
import './cart-icon.styles.scss';
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.action";
import { ReactComponent as ShoppinIcon } from "../../assets/122 shopping-bag.svg";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppinIcon className='shopping-icon' />
        <span className="item-count">{itemCount}</span>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

