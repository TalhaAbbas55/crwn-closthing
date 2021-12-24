import React, { Component } from 'react'
import Shop_data from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
class ShopPage extends Component {
    state = {
        collections: Shop_data,
    }
    render() {
        return (
            <div className="shop-page">
                {this.state.collections.map((collection) => {
                    return (
                        <CollectionPreview key={collection.id} title={collection.title} items={collection.items} />
                    )
                })}
            </div>
        )
    }
}

export default ShopPage
