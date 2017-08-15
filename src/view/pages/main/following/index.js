import React, {Component} from 'react';

import {Button} from './button';
import {BoundingBox} from '../../../../utils/layout';
import {loadAsset} from '../../../../utils/asset-loader';


class Following extends Component {

    static propTypes = {
        people: React.PropTypes.array,
        onSelectPerson: React.PropTypes.func.isRequired,
        onFollowMore: React.PropTypes.func.isRequired
    };

    static defaultProps = {
        people: []
    };

    get listLimit() {

        return 7;
    }

    renderItem(item, key) {

        return (

            <BoundingBox key={key} style={{marginBottom: 20}}>
                <Button image={item.image} text={item.name} onClick={() => this.props.onSelectPerson(item.name)} />
            </BoundingBox>
        )
    }

    render() {

        return (

            <aside
                style={{
                    display: 'flex',
                    position: 'relative',
                    flexDirection: 'column',
                    width: '100%'
                }}
            >

                <span
                    style={{
                        fontSize: 16,
                        color: '#363A3F',
                        marginBottom: 20
                    }}
                >
                    Following:
                </span>

                {this.props.people.map(this.renderItem.bind(this)).slice(0, this.listLimit)}

                {
                    this.props.people.length > this.listLimit ?
                        <span
                            style={{
                                fontSize: 12,
                                color: '#a8a8a8',
                                cursor: 'default',
                                userSelect: 'none',
                                marginBottom: 20,
                                textAlign: 'center'
                            }}
                        >
                            (And {this.props.people.length - this.listLimit} more...)
                        </span> :
                        null
                }

                <BoundingBox style={{marginBottom: 20}}>
                    <Button
                        text="Follow more"
                        bold={true}
                        image={loadAsset('green-circle-with-plus.svg')}
                        onClick={this.props.onFollowMore}
                    />
                </BoundingBox>

            </aside>
        );
    }

}


export {Following}
