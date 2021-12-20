import React from 'react';
import './menu-item.styles.scss'

const MenuItem = (props) => (
    <div className={`${props.size} menu-item`}
        style={{
            backgroundImage: `url(${props.src})`
        }}>
        <div className="content">
            <h1 className="title">{props.title}</h1>
            <span className="subtitle">Shop Now</span>
        </div>
    </div>
)
export default MenuItem