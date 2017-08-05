import React, {Component} from 'react';

import {loadAsset} from '../../../../utils/asset-loader';
import {interpolate} from '../../../components/animatable/index';


class Text extends Component {

    render() {

        return (


            <img
                src={loadAsset('title.svg')}
                style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    width: 299,
                    height: 44,
                    transition: '.6s cubic-bezier(.48,1.13,.49,1.13)',
                    transform: `translate(-50%, ${-48 + interpolate(this.props.keyframe, 300, 0)}px)`,
                    opacity: this.props.keyframe,
                    objectFit: 'contain'
                }}
            />

        )
    }

}


export {Text}
