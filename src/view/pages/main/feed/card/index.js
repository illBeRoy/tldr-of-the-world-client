import React, {Component} from 'react';

import {loadAsset} from '../../../../../utils/asset-loader';


class Card extends Component {

    static propTypes = {
        text: React.PropTypes.string,
        author: React.PropTypes.string,
        authorImage: React.PropTypes.string
    };

    static defaultProps = {
        text: '',
        author: 'Unknown',
        authorImage: loadAsset('man.svg')
    };

    render() {

        return (

            <article
                style={{
                    display: 'flex',
                    position: 'relative',
                    flexDirection: 'column',
                    width: '100%',
                    boxSizing: 'border-box',
                    cursor: 'default',
                    backgroundColor: 'white',
                    borderColor: '#DADADA',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    borderRadius: 4,
                    paddingLeft: 21,
                    paddingRight: 21,
                    paddingTop: 13,
                    paddingBottom: 9
                }}
            >

                <div
                    style={{
                        width: '100%',
                        color: '#34495E',
                        fontSize: 18,
                        marginBottom: 10
                    }}
                >

                    {this.props.text}

                </div>

                <div
                    style={{
                        position: 'relative',
                        height: 40,
                        width: '100%'
                    }}
                >

                    <div
                        style={{
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            width: 40,
                            height: 40,
                            borderRadius: '50%',
                            backgroundImage: `url(${this.props.authorImage})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                        }}
                    />

                    <div
                        style={{
                            position: 'absolute',
                            left: 50,
                            top: 0,
                            height: 40,
                            maxWidth: 'calc(100% - 50)',
                            lineHeight: '40px',
                            textAlign: 'left',
                            color: '#97A4B1',
                            fontSize: 16,
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis'
                        }}
                    >

                        {this.props.author}

                    </div>

                </div>

            </article>
        )
    }

}


export {Card};
