import React from 'react';
import Menu_item from '../menu-item/menu-items.component';
import '../directory/directory-styles.scss'

class Directory extends React.Component {
    state = {
        sections: [
            {
                title: 'hats',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1,
                linkUrl: 'shop/hats'
            },
            {
                title: 'jackets',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2,
                linkUrl: 'shop/jackets'
            },
            {
                title: 'sneakers',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3,
                linkUrl: 'shop/sneakers'
            },
            {
                title: 'womens',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                size: 'large',
                id: 4,
                linkUrl: 'shop/womens'
            },
            {
                title: 'mens',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                size: 'large',
                id: 5,
                linkUrl: 'shop/mens'
            }
        ]

    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map((section) => {
                        return (
                            < Menu_item key={section.id} title={section.title.toString().toUpperCase()} src={section.imageUrl} size={section.size} linkUrl={section.linkUrl} />
                        )
                    })
                }
            </div>
        );
    }
}

export default Directory