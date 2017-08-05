import React, {Component} from 'react';

import ReactTransitionGroup from 'react-addons-transition-group';


class Animatable extends Component {

    static propTypes = {
        noIntroAnimation: React.PropTypes.bool,
        noOutroAnimation: React.PropTypes.bool
    };

    static defaultProps = {
        noIntroAnimation: false,
        noOutroAnimation: false
    };

    render() {

        return (

            <ReactTransitionGroup>
                <AnimatableInner noIntroAnimation={this.props.noIntroAnimation} noOutroAnimation={this.props.noOutroAnimation}>
                    {this.props.children}
                </AnimatableInner>
            </ReactTransitionGroup>
        )
    }
}


class AnimatableInner extends Component {

    static propTypes = {
        noIntroAnimation: React.PropTypes.bool,
        noOutroAnimation: React.PropTypes.bool
    };

    static defaultProps = {
        noIntroAnimation: false,
        noOutroAnimation: false
    };

    constructor(props) {

        super(props);
        this.state = {};
        this.state.keyframe = this.props.noIntroAnimation? 1 : 0;
    }

    componentWillAppear(callback) {

        if (!this.props.noIntroAnimation) {

            this.applyTransition(0, 1, callback);
        } else {

            callback();
        }
    }

    componentWillEnter(callback) {

        if (!this.props.noIntroAnimation) {

            this.applyTransition(0, 1, callback);
        } else {

            callback();
        }
    }

    componentWillLeave(callback) {

        if (!this.props.noOutroAnimation) {

            this.applyTransition(1, 0, callback);
        } else {

            callback();
        }
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
