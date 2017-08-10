import React, {Component} from 'react';
import throttle from 'lodash.throttle';

import {BoundingBox} from '../../../utils/layout';
import {loadAsset} from '../../../utils/asset-loader'
import {Header} from './header';
import {Feed} from './feed';
import {Following} from './following';
import {Biography} from './biography';


class Page extends Component {

    static contextTypes = {
        apiAdapter: React.PropTypes.any
    };

    static propTypes = {
        people: React.PropTypes.array,
        posts: React.PropTypes.array,
        onNextPage: React.PropTypes.func.isRequired,
        onFollowMore: React.PropTypes.func.isRequired
    };

    static defaultProps = {
        people: [],
        posts: []
    };

    constructor(props) {

        super(props);

        this.state = {};
        this.state.filter = '';

        this.onReachedBottom = throttle(this.onReachedBottom.bind(this), 2000);
    }

    onReachedBottom() {

        if (!this.state.filter) {

            this.props.onNextPage();
        }
    }

    async viewBiography(name) {

        this.setState({biography: {loading: true}});

        const biography = await this.context.apiAdapter.biography(name);

        if (this.state.biography.loading) {

            this.setState({ biography });
        }
    }

    closeBiography() {

        this.setState({biography: null})
    }

    setFilter(filter) {

        this.setState({filter});
    }

    applyFilter(posts) {

        if (this.state.filter) {

            return posts.filter(
                post =>
                    post.author.toLowerCase().indexOf(this.state.filter.toLowerCase()) >= 0 ||
                    post.text.toLowerCase().indexOf(this.state.filter.toLowerCase()) >= 0
            );
        } else {

            return posts;
        }
    }

    render() {

        return (

            <BoundingBox
                onScroll={e => e.target.scrollTop > e.target.scrollHeight - e.target.offsetHeight - 300? this.onReachedBottom() : null}
                style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: '100%',
                    height: '100%',
                    overflowX: 'hidden',
                    overflowY: 'scroll'
                }}
            >

                <BoundingBox
                    style={{
                        position: 'fixed',
                        left: 0,
                        top: 0,
                        width: '100%',
                        height: 56,
                        zIndex: 1
                    }}
                >

                    <Header onFilterChange={this.setFilter.bind(this)} />

                </BoundingBox>

                <BoundingBox
                    style={{
                        position: 'absolute',
                        left: '50%',
                        top: 56,
                        width: 844,
                        marginLeft: -422,
                        zIndex: 0
                    }}
                >

                    <Feed posts={this.applyFilter(this.props.posts)} onClickProfile={this.viewBiography.bind(this)} />

                </BoundingBox>

                <BoundingBox
                    style={{
                        position: 'fixed',
                        left: '50%',
                        top: 73,
                        width: 186,
                        marginLeft: -625
                    }}
                >

                    <Following people={this.props.people} onSelectPerson={this.viewBiography.bind(this)} onFollowMore={this.props.onFollowMore} />

                </BoundingBox>

                {
                    this.state.biography ?
                        <BoundingBox
                            style={{
                                position: 'fixed',
                                left: 0,
                                top: 0,
                                width: '100%',
                                height: '100%',
                                zIndex: 2
                            }}
                        >
                            <Biography
                                title={this.state.biography.name}
                                image={this.state.biography.image || loadAsset('man.svg')}
                                description={this.state.biography.summary}
                                buttonLink={this.state.biography.link}
                                isLoading={this.state.biography.loading}
                                onClickOutside={this.closeBiography.bind(this)}
                            />
                        </BoundingBox> :
                        null
                }

            </BoundingBox>
        )
    }

}


export {Page}
