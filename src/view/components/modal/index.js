import React, {Component} from 'react';

import {Animatable} from '../animatable';
import {BoundingBox} from '../../../utils/layout';
import {Overlay} from './overlay';
import {Lightbox} from './lightbox';


class Modal extends Component {

    static propTypes = {
        modalWidth: React.PropTypes.number,
        modalHeight: React.PropTypes.number,
        onClickOutside: React.PropTypes.func
    };

    static defaultProps = {
        modalWidth: 100,
        modalHeight: 100,
        onClickOutside: () => {}
    };

    render() {

        return (

            <BoundingBox style={{position: 'fixed', left: 0, top: 0, width: '100%', height: '100%', zIndex: 1}}>
                <Animatable>
                    <Overlay onClose={this.props.onClickOutside} />
                    <Lightbox width={this.props.modalWidth} height={this.props.modalHeight}>
                        {this.props.children}
                    </Lightbox>
                </Animatable>
            </BoundingBox>
        );
    }

}


export {Modal};
