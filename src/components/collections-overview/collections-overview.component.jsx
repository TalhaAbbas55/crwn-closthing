import React from 'react';
import './collections-overview.styles.scss'

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from '../collection-preview/collection-preview.component';

import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";



const collectionsOverview = ({ collections }) => (
    <div className="collections-overview">
        {collections.map((collection) => {
            return (
                <CollectionPreview key={collection.id} title={collection.title} items={collection.items} />
            )
        })}
    </div>
);


const mapStateToProp = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProp)(collectionsOverview)