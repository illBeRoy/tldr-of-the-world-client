import React, {Component} from 'react';

import {BoundingBox} from '../../../../utils/layout';
import {Bubbles} from '../../../components/bubbles';
import {Suggestions} from './suggestions';


class Personnel extends Component {

    static contextTypes = {
        apiAdapter: React.PropTypes.any
    };

    constructor(props) {

        super(props);

        this.state = {};
        this.state.inputRef = {};

        this.state.suggestions = [];
        this.state.selected = [];
        this.state.morePeople = [];
    }

    onSuggestionsChange(key) {

        try {

            switch (key) {

                case 'ArrowDown':
                    this.suggestionsRef.selectNext();
                    break;

                case 'ArrowUp':
                    this.suggestionsRef.selectPrevious();
                    break;

                case 'Enter':
                    alert(this.suggestionsRef.selectedItem);
                    break;

            }

        } catch (err) {}
    }

    render() {

        console.log(this.context.apiAdapter);
        return (

            <BoundingBox
                style={{
                    position: 'absolute',
                    display: 'flex',
                    left: 0,
                    top: 0,
                    width: '100%',
                    height: '100%',
                    flexDirection: 'column'
                }}
            >

                <BoundingBox
                    style={{
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'row',
                        width: '100%',
                        height: 60,
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexShrink: 0,
                        flexGrow: 0,
                        boxSizing: 'border-box',
                        borderBottom: '1px solid #E3E3E3'
                    }}
                >

                    <input
                        type="text"
                        placeholder="Search people"
                        ref={ref => this.state.inputRef != ref? this.setState({inputRef: ref}) : null}
                        onKeyDown={(e) => this.onSuggestionsChange(e.key)}
                        style={{
                            height: 30,
                            width: '50%',
                            maxWidth: 480,
                            border: '1px solid #CCCFD4',
                            borderRadius: 4,
                            backgroundColor: 'white',
                            outline: 'none',
                            fontSize: 14,
                            paddingLeft: 15,
                            boxSizing: 'border-box'
                        }}
                    />

                    <Suggestions
                        ref={ref => this.suggestionsRef != ref? this.suggestionsRef = ref : null}
                        list={this.state.suggestions}
                        anchorX={this.state.inputRef.offsetLeft || 0}
                        anchorY={(this.state.inputRef.offsetTop + this.state.inputRef.offsetHeight) || 0}
                        width={this.state.inputRef.offsetWidth || 0}

                    />

                </BoundingBox>

                <BoundingBox
                    style={{
                        position: 'relative',
                        flexGrow: 1
                    }}
                >

                    <Bubbles values={this.state.morePeople} backgroundColor="#A713FE" />

                </BoundingBox>

            </BoundingBox>
        )
    }

}


export {Personnel}
