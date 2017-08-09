import React, {Component} from 'react';
import throttle from 'lodash.throttle';
import without from 'lodash.without';
import uniq from 'lodash.uniq';
import RotatingText from 'react-rotating-text';

import {loadAsset} from '../../../../utils/asset-loader';
import {BoundingBox} from '../../../../utils/layout';
import {Bubbles} from '../../../components/bubbles';
import {Suggestions} from './suggestions';


class Personnel extends Component {

    static contextTypes = {
        apiAdapter: React.PropTypes.any
    };

    static propTypes = {
        groupSizeLimit: React.PropTypes.number,
        onPeopleChosen: React.PropTypes.func.isRequired
    };

    static defaultProps = {
        groupSizeLimit: 50
    };

    constructor(props) {

        super(props);

        this.state = {};

        this.state.suggestions = [];
        this.state.selected = [];
        this.state.morePeople = [];
        this.state.randomSuggestions = ['Who are we gonna look for today?'];

        this.inputRef = {};

        this.updateSuggestionsList = throttle(this.updateSuggestionsList.bind(this), 1000);
    }

    async componentWillMount() {

        const randomSuggestions = await this.context.apiAdapter.random(50);
        this.setState({randomSuggestions});
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
                    if (this.suggestionsRef.selectedItem) {

                        this.addItemToGroup(this.suggestionsRef.selectedItem);
                    }
                    break;

            }

        } catch (err) {}
    }

    onContinueButtonClick() {

        this.props.onPeopleChosen(this.state.selected);
    }

    async updateSuggestionsList(query) {

        let suggestions;

        if (query == '') {

            suggestions = [];
        } else {

            suggestions = await this.context.apiAdapter.search(query);
            suggestions = without(suggestions, ...this.state.selected);
        }

        this.setState({suggestions});
    }

    addItemToGroup(item) {

        if (this.state.selected.length >= this.props.groupSizeLimit) {

            return;
        }

        this.inputRef.value = '';
        this.setState({
            selected: uniq(this.state.selected.concat([item])),
            suggestions: [],
            morePeople: without(this.state.morePeople, item)
        });

        this.updateNeighbours(item);
    }

    removeItemFromGroup(item) {

        this.setState({
            selected: without(this.state.selected, item)
        });
    }

    async updateNeighbours(item) {

        let neighbours = await this.context.apiAdapter.suggest(item);
        neighbours = neighbours.map(x => x.name);
        neighbours = without(neighbours, ...this.state.selected, ...this.state.morePeople);
        neighbours = neighbours.slice(0, 5);

        this.setState({morePeople: without(uniq(this.state.morePeople.concat(neighbours)), item)});
    }

    clearNeighbours() {

        this.setState({morePeople: this.state.morePeople.slice(-5)});
    }

    render() {

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
                        ref={ref => this.inputRef = ref}
                        onKeyDown={(e) => this.onSuggestionsChange(e.key)}
                        onInput={(e) => this.updateSuggestionsList(e.target.value)}
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
                            boxSizing: 'border-box',
                            userSelect: 'none'
                        }}
                    />

                    <Suggestions
                        ref={ref => this.suggestionsRef != ref? this.suggestionsRef = ref : null}
                        list={this.state.suggestions}
                        anchorX={this.inputRef.offsetLeft || 0}
                        anchorY={(this.inputRef.offsetTop + this.inputRef.offsetHeight) || 0}
                        width={this.inputRef.offsetWidth || 0}
                        onSelect={this.addItemToGroup.bind(this)}
                    />

                </BoundingBox>

                <BoundingBox
                    style={{
                        width: '100%',
                        padding: 10,
                        boxSizing: 'border-box',
                        lineHeight: '30px',
                        userSelect: 'none'
                    }}
                >

                    {this.state.selected.map((name, key) =>
                        <span
                            key={key}
                            onClick={() => this.removeItemFromGroup(name)}
                            style={{
                                display: 'inline-block',
                                padding: '0 10px',
                                backgroundColor: '#F92C55',
                                color: 'white',
                                fontSize: 14,
                                cursor: 'pointer',
                                margin: '1px 5px 1px 0',
                                borderRadius: 20,
                                boxSizing: 'border-box',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            {name}
                        </span>
                    )}

                </BoundingBox>

                <BoundingBox
                    style={{
                        position: 'relative',
                        flexGrow: 1
                    }}
                >

                    <Bubbles values={this.state.morePeople} backgroundColor="#A713FE" onSelect={this.addItemToGroup.bind(this)} />

                    {
                        this.state.morePeople.length == 0?
                            <RotatingText
                                items={this.state.randomSuggestions}
                                style={{
                                    position: 'absolute',
                                    left: '50%',
                                    top: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    fontSize: 20,
                                    color: '#9d4fcc'
                                }}
                            /> :
                            null
                    }

                    {
                        this.state.selected.length >= 1?
                            <div
                                onClick={this.onContinueButtonClick.bind(this)}
                                style={{
                                    position: 'absolute',
                                    right: 25,
                                    bottom: 25,
                                    width: 130,
                                    height: 50,
                                    lineHeight: '50px',
                                    fontSize: '20px',
                                    color: '#FFFFFF',
                                    backgroundColor: '#0ed272',
                                    borderRadius: 25,
                                    textAlign: 'center',
                                    cursor: 'pointer',
                                    userSelect: 'none'
                                }}
                            >
                                Continue
                            </div> :
                            null
                    }

                    {
                        this.state.morePeople.length > 0?
                            <div
                                onClick={this.clearNeighbours.bind(this)}
                                style={{
                                    position: 'absolute',
                                    right: 25 + 130 + 10,
                                    bottom: 25,
                                    width: 50,
                                    height: 50,
                                    lineHeight: '50px',
                                    fontSize: '20px',
                                    backgroundColor: '#d80027',
                                    borderRadius: 25,
                                    textAlign: 'center',
                                    cursor: 'pointer',
                                    userSelect: 'none'
                                }}
                            >
                                <img
                                    src={loadAsset('swipe.svg')}
                                    style={{
                                        position: 'absolute',
                                        left: 8,
                                        top: 9,
                                        width: 30,
                                        height: 30,
                                        objectFit: 'contain'
                                    }}
                                />
                            </div> :
                            null
                    }

                </BoundingBox>

            </BoundingBox>
        )
    }

}


export {Personnel}
