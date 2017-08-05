import 'babel-polyfill';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {loadFont} from './utils/font-loader';
import {loadAsset} from './utils/asset-loader';
import {APIAdapter} from './adapters';

import {Page} from './view/pages/onboarding';

import config from '../config.json';


class Index extends Component {

    static childContextTypes = {
        apiAdapter: React.PropTypes.any
    };

    constructor(props) {

        super(props);

        this._context = {};
        this._context.apiAdapter = new APIAdapter(config.apiBaseUrl);
    }

    getChildContext() {

        return this._context;
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
                <Page />
            </div>
        );
    }

}


loadFont('Lato', loadAsset('Lato-Regular.ttf'));
ReactDOM.render(<Index />, document.getElementById('root'));
