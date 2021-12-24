import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from "../../assets/084 crown.svg";
import { auth } from "../firebase/firebase.util";
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdonw from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";



import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className="options">
            <Link className="option" to='/shop' >
                SHOP
            </Link>
            <Link className="option" to='/contact' >
                CONTACT
            </Link>
            {currentUser ?
                (<div className='option' onClick={() => auth.signOut()} >Sign Out</div>)
                :
                (<Link to='/signin' className='option'>Sing In</Link>)
            }
            <CartIcon />
        </div>
        {hidden ? null : <CartDropdonw />}
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);