import React from 'react';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import { connect } from 'react-redux';
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import CustomButton from '../custom-button/custom-button.component';
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.action";

const CartDropdown = ({ cartItems, history, dispatch }) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.length ? (
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                ) :
                    (<span className="empty-message" style={{
                        textAlign: 'center'
                    }}>Your Cart is Empty!</span>)

                }
                <CustomButton onClick={() => {
                    history.push('/checkout');
                    dispatch(toggleCartHidden())
                }} >GO TO CHECKOUT</CustomButton>
            </div>
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

// const mapDispatchToProps = (dispatch) => ({
//     toggleCartHidden: () => dispatch(toggleCartHidden())
// });


export default withRouter(connect(mapStateToProps)(CartDropdown));