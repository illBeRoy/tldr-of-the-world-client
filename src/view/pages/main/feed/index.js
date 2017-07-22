import React, {Component} from 'react';

import {loadAsset} from '../../../../utils/asset-loader';
import {Card} from './card';


class Feed extends Component {

    static propTypes = {
        posts: React.PropTypes.array
    };

    static defaultProps = {
        posts: []
    };

    renderCard(post, key) {

        return (

            <span
                key={key}
                style={{marginTop: 17}}
            >
                <Card authorImage={post.authorImage} author={post.author} text={post.text} />
            </span>
        )
    }

    render() {

        return (

            <main
                style={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column-reverse',
                    boxSizing: 'border-box'
                }}
            >

                <div
                    style={{
                        position: 'relative',
                        width: '100%',
                        height: 11,
                        marginTop: 17,
                        backgroundImage: `url(${loadAsset('three-dots.svg')})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat'
                    }}
                />

                {this.props.posts.map(this.renderCard.bind(this))}

            </main>
        );
    }

}


export {Feed}
