import React, {Component} from 'react';

import {BoundingBox} from '../../../../utils/layout';
import {loadAsset} from '../../../../utils/asset-loader';


class Header extends Component {

    static propTypes = {};

    static defaultProps = {};

    render() {

        return (

            <header
                style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: '100%',
                    height: '100%',
                    boxSizing: 'border-box',
                    borderBottom: '1px solid #E3E3E3',
                    backgroundColor: 'white'
                }}
            >

                <BoundingBox
                    style={{
                        position: 'absolute',
                        left: '50%',
                        top: 0,
                        transform: 'translateX(-50%)',
                        width: '100%',
                        height: '100%',
                        maxWidth: 1250,
                        padding: 10,
                        boxSizing: 'border-box'
                    }}
                >

                    <input
                        type="text"
                        placeholder="Search feed"
                        style={{
                            position: 'absolute',
                            left: 0,
                            top: 10,
                            bottom: 10,
                            width: '50%',
                            maxWidth: 480,
                            border: '1px solid #CCCFD4',
                            borderRadius: 4,
                            backgroundColor: 'white',
                            outline: 'none',
                            fontSize: 14,
                            paddingLeft: 15,
                            boxSizing: 'border-box'
                        }}
                    />

                    <img
                        src={loadAsset('cog.svg')}
                        style={{
                            position: 'absolute',
                            right: 0,
                            top: '50%',
                            width: 30,
                            height: 30,
                            marginTop: -15,
                            objectFit: 'contain',
                            cursor: 'pointer'
                        }}
                    />

                </BoundingBox>

            </header>
        )
    }

}


export {Header}
