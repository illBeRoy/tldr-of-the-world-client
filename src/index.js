import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {loadFont} from './utils/font-loader';
import {loadAsset} from './utils/asset-loader';

import {Page} from './view/pages/main';
import {Biography} from './view/pages/main/biography';

class Index extends Component {

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
                <Page
                    people={require('../fixtures/people.json')}
                    posts={require('../fixtures/feed.json')}
                />
                <Biography {...require('../fixtures/biography.json')} />
            </div>
        );
    }

}


loadFont('Lato', loadAsset('Lato-Regular.ttf'));
ReactDOM.render(<Index />, document.getElementById('root'));
