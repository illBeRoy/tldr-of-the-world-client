import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {loadFont} from './utils/font-loader';
import {loadAsset} from './utils/asset-loader';

import {Page} from './view/pages/personnel';


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
                <Page />
            </div>
        );
    }

}


loadFont('Lato', loadAsset('Lato-Regular.ttf'));
ReactDOM.render(<Index />, document.getElementById('root'));
