import React from 'react';
import MenuItem from '../menu-item/menu-items.component';
import '../directory/directory-styles.scss';
import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import { createStructuredSelector } from "reselect";

const Directory = ({ sections }) => (

    <div className="directory-menu">
        {
            sections.map((section) => {
                return (
                    < MenuItem key={section.id} title={section.title.toString().toUpperCase()} src={section.imageUrl} size={section.size} linkUrl={section.linkUrl} />
                )
            })
        }
    </div>
);

const mapStateToProp = () => createStructuredSelector({
    sections: selectDirectorySections

})
export default connect(mapStateToProp)(Directory)