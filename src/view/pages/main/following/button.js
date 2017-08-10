import React, {Component} from 'react';

import {loadAsset} from '../../../../utils/asset-loader';


class Button extends Component {

    static propTypes = {
        text: React.PropTypes.string,
        image: React.PropTypes.string,
        bold: React.PropTypes.bool,
        onClick: React.PropTypes.func
    };

    static defaultProps = {
        text: '',
        image: loadAsset('man.svg'),
        bold: false
    };

    render() {

        return (

            <div
                style={{
                    position: 'relative',
                    display: 'flex',
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    width: '100%',
                    height: 40,
                    cursor: this.props.onClick? 'pointer': 'default'
                }}
                onClick={this.props.onClick || (() => {})}
            >

                <img
                    src={this.props.image || Button.defaultProps.image}
                    style={{
                        width: 40,
                        height: 40,
                        objectFit: 'cover',
                        marginRight: 12,
                        borderRadius: '50%'
                    }}
                />

                <span
                    style={{
                        display: 'inline-block',
                        height: 40,
                        lineHeight: '40px',
                        fontSize: 14,
                        color: '#6C717A',
                        flexGrow: 1,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        fontWeight: this.props.bold? 'bold' : '400'
                    }}
                >
                    {this.props.text}
                </span>

            </div>
        );
    }

}


export {Button}
