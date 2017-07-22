import React, {Component} from 'react';

import {BoundingBox} from '../../../utils/layout';
import {Header} from './header';
import {Feed} from './feed';


class Page extends Component {

    static propTypes = {
        posts: React.PropTypes.array
    };

    static defaultProps = {
        posts: []
    };

    render() {

        return (

            <BoundingBox
                style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: '100%',
                    height: '100%'
                }}
            >

                <BoundingBox
                    style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        width: '100%',
                        height: 56
                    }}
                >

                    <Header />

                </BoundingBox>

                <BoundingBox
                    style={{
                        position: 'absolute',
                        left: '50%',
                        top: 56,
                        width: 844,
                        marginLeft: -422
                    }}
                >
                    <Feed
                        posts={this.props.posts}
                    />
                </BoundingBox>

            </BoundingBox>
        )
    }

}


export {Page}
