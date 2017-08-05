import React, {Component} from 'react';

import {BoundingBox} from '../../../../utils/layout';


class Autocomplete extends Component {

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
                    flexDirection: 'column'
                }}
            >

                <BoundingBox
                    style={{
                        width: '100%',
                        height: 'auto',
                        flexGrow: 0,
                        flexShrink: 0
                    }}
                >
                    <input
                        type="text"
                        style={{
                            width: '100%',
                            fontSize: 18,
                            border: 'none',
                            borderBottom: '1px black solid'
                        }}
                    />
                </BoundingBox>

                <BoundingBox
                    style={{
                        width: '100%',
                        flexGrow: 1,
                        overflowX: 'hidden',
                        overflowY: 'scroll'
                    }}
                >
                    <span style={{width: '100%'}}>asdfasdfasdf</span>
                    <span style={{width: '100%'}}>asdfasdfasdf</span>
                    <span style={{width: '100%'}}>asdfasdfasdf</span>
                </BoundingBox>

            </BoundingBox>
        );
    }
}


export {Autocomplete};
