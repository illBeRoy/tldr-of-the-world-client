import React, {Component} from 'react';

import {Button} from './button';
import {BoundingBox} from '../../../../utils/layout';
import {loadAsset} from '../../../../utils/asset-loader';


class Following extends Component {

    static propTypes = {
        people: React.PropTypes.array
    };

    static defaultProps = {
        people: []
    };

    renderItem(item, key) {

        return (

            <BoundingBox key={key} style={{marginBottom: 20}}>
                <Button image={item.image} text={item.name} />
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

                {this.props.people.map(this.renderItem.bind(this))}

                <BoundingBox style={{marginBottom: 20}}>
                    <Button
                        text="Follow more"
                        bold={true}
                        image={loadAsset('green-circle-with-plus.svg')}
                        onClick={()=>{}}
                    />
                </BoundingBox>

            </aside>
        );
    }

}


export {Following}
