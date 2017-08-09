import React, {Component} from 'react';

import {BoundingBox} from '../../../utils/layout';
import {Logo} from './logo';
import {Personnel} from './personnel';
import {Loader} from './loading';


class Page extends Component {

    static contextTypes = {
        apiAdapter: React.PropTypes.any
    };

    static propTypes = {
        onFeedCreated: React.PropTypes.func.isRequired
    };

    states = {
        INTRO: () => <Logo onAnimationEnd={() => this.changeView('PERSONNEL')} />,
        PERSONNEL: () => <Personnel onPeopleChosen={this.createFeedFlow.bind(this)} />,
        LOADING: () => <Loader />
    };

    constructor(props) {

        super(props);

        this.state = {};
        this.state.view = 'INTRO';
    }

    changeView(view) {

        this.setState({view});
    }

    async createFeedFlow(people) {

        this.changeView('LOADING');

        let feed;

        try {

            feed = await this.context.apiAdapter.getFeed(people)
        } catch (err) {

            this.changeView('PERSONNEL');
            return;
        }

        this.props.onFeedCreated(feed);
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
                }}
            >

                { this.states[this.state.view]() }

            </BoundingBox>
        )
    }

}


export {Page}
