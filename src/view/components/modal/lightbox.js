import React, {Component} from 'react';

import {interpolate} from '../animatable';


class Lightbox extends Component {

    static propTypes = {
        width: React.PropTypes.number,
        height: React.PropTypes.number
    };

    static defaultProps = {
        width: 100,
        height: 100
    };

    render() {

        return (

            <div
                style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    width: this.props.width,
                    height: this.props.height,
                    marginLeft: -this.props.width / 2,
                    marginTop: -this.props.height / 2,
                    backgroundColor: 'white',
                    opacity: this.props.keyframe,
                    transform: `scale(${interpolate(this.props.keyframe, 0.6, 1.0)})`,
                    boxShadow: `0 ` +
                               `${interpolate(this.props.keyframe, 0, 2)}px ` +
                               `${interpolate(this.props.keyframe, 0, 15)}px ` +
                               `rgba(0,0,0,.25)`,
                    transition: '.6s ease'
                }}
            >
                {this.props.children}
            </div>
        )
    }

}


export {Lightbox};
