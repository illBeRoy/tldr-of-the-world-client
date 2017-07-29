import React, {Component} from 'react';

import {Modal} from '../../../components/modal';
import {BoundingBox} from '../../../../utils/layout';


class Biography extends Component {

    static propTypes = {
        title: React.PropTypes.string,
        image: React.PropTypes.string,
        description: React.PropTypes.string,
        buttonLink: React.PropTypes.string
    };

    visitProfileLink() {

        window.open(this.props.buttonLink, '_blank');
    }

    render() {

        return (

            <Modal modalWidth={510} modalHeight={485}>
                <BoundingBox
                    style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        width: '100%',
                        height: 154,
                        overflow: 'hidden',
                        backgroundColor: 'black'
                    }}
                >

                    <img
                        src={this.props.image}
                        style={{
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            width: '110%',
                            transform: 'translateY(-50%)',
                            filter: 'blur(20px)',
                            opacity: .8
                        }}
                    />

                </BoundingBox>

                <img
                    src={this.props.image}
                    style={{
                        position: 'absolute',
                        left: 30,
                        top: 80,
                        width: 150,
                        height: 150,
                        borderRadius: '50%',
                        objectFit: 'cover'
                    }}
                />

                <span
                    style={{
                        position: 'absolute',
                        left: 210,
                        right: 30,
                        top: 170,
                        color: '#34495E',
                        fontSize: 28,
                        height: 34,
                        lineHeight: '34px',
                        textAlign: 'left',
                        cursor: 'default',
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis'
                    }}
                >
                    {this.props.title}
                </span>

                <div
                    style={{
                        position: 'absolute',
                        left: 30,
                        right: 30,
                        top: 250,
                        bottom: 80,
                        color: '#7C7C7C',
                        fontSize: 18,
                        cursor: 'default',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }}
                >
                    {this.props.description}
                </div>

                <button
                    onClick={this.visitProfileLink.bind(this)}
                    style={{
                        position: 'absolute',
                        right: 15,
                        bottom: 15,
                        width: 200,
                        height: 20,
                        backgroundColor: 'transparent',
                        border: 'none',
                        outline: 'none',
                        fontWeight: 'bold',
                        fontSize: 16,
                        color: '#9013FE',
                        cursor: 'pointer'
                    }}
                >
                    Learn more on Wikipedia
                </button>

            </Modal>
        );
    }

}


export {Biography};
