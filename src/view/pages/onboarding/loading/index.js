import React, {Component} from 'react';

import {BoundingBox} from '../../../../utils/layout';
import {loadAsset} from '../../../../utils/asset-loader';


class Loader extends Component {

    render() {

        return (

            <BoundingBox
                style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'default'
                }}
            >

                <span
                    style={{
                        color: '#9013FE',
                        textAlign: 'center',
                        fontSize: 14
                    }}
                >
                    <img src={loadAsset('loader.gif')} style={{width: 50, height: 50, marginBottom: 10}} /> < br/>
                    We're working on it!
                </span>

            </BoundingBox>
        )
    }

}


export {Loader}
