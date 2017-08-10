import React, {Component} from 'react';

import {loadAsset} from '../../../../utils/asset-loader';
import {Card} from './card';


class Feed extends Component {

    static propTypes = {
        posts: React.PropTypes.array,
        onClickProfile: React.PropTypes.func.isRequired
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
                <Card authorImage={post.authorImage} author={post.author} text={post.text} onClickAuthor={() => this.props.onClickProfile(post.author)} />
            </span>
        )
    }

    render() {

        return (

            <main
                style={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    boxSizing: 'border-box'
                }}
            >

                {this.props.posts.map(this.renderCard.bind(this))}

                <div
                    style={{
                        position: 'relative',
                        width: '100%',
                        height: 11,
                        margin: '17px 0',
                        backgroundImage: `url(${loadAsset('three-dots.svg')})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat'
                    }}
                />

            </main>
        );
    }

}


export {Feed}
