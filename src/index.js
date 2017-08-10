import 'babel-polyfill';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {loadFont} from './utils/font-loader';
import {loadAsset} from './utils/asset-loader';
import {APIAdapter} from './adapters';

import {Page as OnboardingPage} from './view/pages/onboarding';
import {Page as FeedPage} from './view/pages/main';

import config from '../config.json';


class Index extends Component {

    static childContextTypes = {
        apiAdapter: React.PropTypes.any
    };

    routes = {
        BLANK: () => null,
        ONBOARDING: () => <OnboardingPage onFeedCreated={this.feedReceived.bind(this)}/>,
        FEED: () => <FeedPage people={this.state.feed.following.map(name => {return {name, image: this.state.images[name]}})} posts={this.state.posts} onNextPage={this.getNextPage.bind(this)} onFollowMore={this.reset.bind(this)} />
    };

    constructor(props) {

        super(props);

        this._context = {};
        this._context.apiAdapter = new APIAdapter(config.apiBaseUrl);

        this.state = {};
        this.state.route = 'BLANK';
        this.state.feed = null;
        this.state.posts = [];
        this.state.page = 0;
        this.state.images = {};
    }

    getChildContext() {

        return this._context;
    }

    componentWillMount() {

        if (this.loadState()) {

            this.navigateTo('FEED');
        } else {

            this.navigateTo('ONBOARDING');
        }
    }

    navigateTo(route) {

        this.setState({route});
    }

    async feedReceived(feed) {

        // get people images
        const images = await this._context.apiAdapter.pictures(feed.people);

        this.setState({
            page: 0,
            feed,
            images
        });

        await this.getNextPage();

        this.navigateTo('FEED');

        this.saveState();
    }

    async getNextPage() {

        const newPosts = await this._context.apiAdapter.getFeedPage(this.state.feed.feed_id, this.state.page);
        const allPosts = [
            ...this.state.posts,
            ...newPosts.quotes.map(post => Object.assign(post, {authorImage: this.state.images[post.author]}))
        ];

        this.setState({
            page: this.state.page + 1,
            posts: allPosts
        })
    }

    reset() {

        this.clearState();
        window.location.reload();
    }

    saveState() {

        window.localStorage.setItem('@feed.state', JSON.stringify(this.state));
    }

    loadState() {

        const state = window.localStorage.getItem('@feed.state');
        if (state) {

            this.setState(JSON.parse(state));
            return true;
        } else {

            return false;
        }
    }

    clearState() {

        window.localStorage.removeItem('@feed.state');
    }

    render() {

        return (

            <div
                style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: '100%',
                    height: '100%'
                }}
            >
                { this.routes[this.state.route]() }
            </div>
        );
    }

}


loadFont('Lato', loadAsset('Lato-Regular.ttf'));
ReactDOM.render(<Index />, document.getElementById('root'));
