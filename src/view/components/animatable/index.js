import React, {Component} from 'react';

import ReactTransitionGroup from 'react-addons-transition-group';


class Animatable extends Component {

    render() {

        return (

            <ReactTransitionGroup>
                <AnimatableInner>
                    {this.props.children}
                </AnimatableInner>
            </ReactTransitionGroup>
        )
    }
}


class AnimatableInner extends Component {

    constructor(props) {

        super(props);
        this.state = {};
        this.state.keyframe = 0;
    }

    componentWillAppear(callback) {

        this.applyTransition(0, 1, callback);
    }

    componentWillEnter(callback) {

        this.applyTransition(0, 1, callback);
    }

    componentWillLeave(callback) {

        this.applyTransition(1, 0, callback);
    }

    applyTransition(from, to, callback) {

        this.setState({keyframe: from});

        window.requestAnimationFrame(
            () => {
                this.setState({keyframe: to});
                callback();
            },
            100
        );
    }

    render() {

        return (

            <div>
                {
                    React.Children.map(
                        this.props.children,
                        (child) => React.cloneElement(child, {keyframe: this.state.keyframe})
                    )
                }
            </div>
        )
    }

}


const interpolate = (keyframe, min, max) => {

    return min + (keyframe * (max - min));
};


export {Animatable, interpolate};
