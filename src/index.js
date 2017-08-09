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
        FEED: () => <FeedPage people={[]} posts={[]} />
    };

    constructor(props) {

        super(props);

        this._context = {};
        this._context.apiAdapter = new APIAdapter(config.apiBaseUrl);

        this.state = {};
        this.state.route = 'BLANK';
        this.state.feed = null;
        this.state.images = {};
    }

    getChildContext() {

        return this._context;
    }

    componentWillMount() {

        if (!this.state.feed) {

            this.navigateTo('ONBOARDING');
        } else {

            this.navigateTo('FEED');
        }
    }

    navigateTo(route) {

        this.setState({route});
    }

    async feedReceived(feed) {

        // get people images

        // save data to localStorage

        // move on to feed view
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
