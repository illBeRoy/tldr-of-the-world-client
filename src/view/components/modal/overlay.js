import React, {Component} from 'react';


class Overlay extends Component {

    render() {

        return (

            <div
                style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0,0,0,.4)',
                    opacity: this.props.keyframe,
                    transition: '.6s ease'
                }}
                onClick={this.props.onClose}
            ></div>
        )
    }

}


export {Overlay};
