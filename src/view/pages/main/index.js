import React, {Component} from 'react';

import {BoundingBox} from '../../../utils/layout';
import {Header} from './header';
import {Feed} from './feed';
import {Following} from './following';


class Page extends Component {

    static propTypes = {
        people: React.PropTypes.people,
        posts: React.PropTypes.array
    };

    static defaultProps = {
        people: [],
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

                    <Feed posts={this.props.posts} />

                </BoundingBox>

                <BoundingBox
                    style={{
                        position: 'absolute',
                        left: '50%',
                        top: 73,
                        width: 186,
                        marginLeft: -625
                    }}
                >

                    <Following people={this.props.people} />

                </BoundingBox>

            </BoundingBox>
        )
    }

}


export {Page}
