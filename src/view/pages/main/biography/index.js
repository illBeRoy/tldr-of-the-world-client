import React, {Component} from 'react';

import {Modal} from '../../../components/modal';
import {BoundingBox} from '../../../../utils/layout';
import {loadAsset} from '../../../../utils/asset-loader';


class Biography extends Component {

    static propTypes = {
        title: React.PropTypes.string,
        image: React.PropTypes.string,
        description: React.PropTypes.string,
        buttonLink: React.PropTypes.string,
        isLoading: React.PropTypes.bool,
        onClickOutside: React.PropTypes.func
    };

    static defaultProps = {
        isLoading: false,
        onClickOutside: () => {}
    };

    visitProfileLink() {

        this.props.onClickOutside();
        window.open(this.props.buttonLink, '_blank');
    }

    renderLoading() {

        return (
            <img
                src={loadAsset('loader.gif')}
                style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    marginTop: -25,
                    marginLeft: -25,
                    width: 50,
                    height: 50
                }}
            />
        )
    }

    renderContent() {

        return (

            <BoundingBox>
                <BoundingBox
                    style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        width: '100%',
                        height: 154,
                        overflow: 'hidden',
                        backgroundColor: 'black',
                        userSelect: 'none'
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
                        fontSize: 14,
                        cursor: 'default',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }}
                >
                    {`${this.props.description.substr(0, 600)}...`}
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
            </BoundingBox>

        )
    }

    render() {

        return (

            <Modal modalWidth={510} modalHeight={485} onClickOutside={this.props.onClickOutside}>

                {this.props.isLoading? this.renderLoading() : this.renderContent()}

            </Modal>
        );
    }

}


export {Biography};
