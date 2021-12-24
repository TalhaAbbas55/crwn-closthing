import React from 'react';
import './collection.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionsPreveiw = (props) => {
    return (
        <div div className="collection-preview" >
            <h1 className="title">
                {props.title.toString().toUpperCase()}
            </h1>
            <div className="preview">
                {
                    props.items
                        .filter((item, idx) => idx < 4)
                        .map((item) => (
                            <CollectionItem key={item.id} item={item} />
                        ))}
            </div>
        </div >
    )
};

export default CollectionsPreveiw;