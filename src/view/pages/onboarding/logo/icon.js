import React, {Component} from 'react';

import {loadAsset} from '../../../../utils/asset-loader';
import {interpolate} from '../../../components/animatable';


class Icon extends Component {

    render() {

        return (


            <img
                src={loadAsset('world-quote.svg')}
                style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    width: 77,
                    height: 77,
                    transition: '.6s cubic-bezier(.48,1.13,.49,1.13)',
                    transitionDelay: '.2s',
                    transform: `translate(-50%, ${32 + interpolate(this.props.keyframe, 300, 0)}px)`,
                    opacity: this.props.keyframe,
                    objectFit: 'contain'
                }}
            />

        )
    }

}


export {Icon}
