import React from 'react';
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import { firestore, convertCollectionsSnapshotToMap } from '../../components/firebase/firebase.util'
import { updateCollections } from '../../redux/shop/shop.actions';

class ShopPage extends React.Component {
    unsubscribeFromSnapshot = null;
    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');
        collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
            updateCollections(collectionsMap)
        })
    }
    render() {
        const { match } = this.props;
        return (
            <div className="shop-page">
                <Route exact component={CollectionOverview} path={`${match.path}`} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>
        );
    }

}

const mapDispatchToprops = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})


export default connect(null, mapDispatchToprops)(ShopPage);
