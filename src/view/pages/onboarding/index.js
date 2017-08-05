import React, {Component} from 'react';

import {BoundingBox} from '../../../utils/layout';
import {Logo} from './logo';


class Page extends Component {

    static propTypes = {
        people: React.PropTypes.array
    };

    static defaultProps = {
        people: []
    };

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
                    alignContent: 'center',
                    justifyContent: 'center',
                    cursor: 'default'
                }}
            >

                <Logo/>

            </BoundingBox>
        )
    }

}


export {Page}
