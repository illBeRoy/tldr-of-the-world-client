import React, {Component} from 'react';

import {BoundingBox} from '../../../../utils/layout';
import {Animatable} from '../../../components/animatable';
import {Text} from './text';
import {Icon} from './icon';


class Logo extends Component {

    static propTypes = {
        onAnimationEnd: React.PropTypes.func.isRequired
    };

    componentDidMount() {

        setTimeout(this.props.onAnimationEnd, 2000);
    }

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

                <Animatable noOutroAnimation>

                    <Text/>

                    <Icon/>

                </Animatable>

            </BoundingBox>
        )
    }

}


export {Logo}
