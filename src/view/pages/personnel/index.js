import React, {Component} from 'react';

import {BoundingBox} from '../../../utils/layout';


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
                    flexDirection: 'column'
                }}
            >

                <BoundingBox style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    
                </BoundingBox>

                <BoundingBox>
                </BoundingBox>

            </BoundingBox>
        )
    }

}


export {Page}
