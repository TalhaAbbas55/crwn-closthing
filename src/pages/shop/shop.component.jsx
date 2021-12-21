import React, { Component } from 'react'
import Shop_data from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
class ShopPage extends Component {
    state = {
        collections: Shop_data,
    }
    render() {
        // const { collections } = this.state;
        return (
            <div className="shop-page">
                {this.state.collections.map((collection) => {
                    console.log(collection.id);
                    console.log(collection.title);
                    console.log(collection.items);
                    return (
                        <CollectionPreview key={collection.id} title={collection.title} items={collection.items} />
                    )
                })}
            </div>
        )
    }
}

export default ShopPage
