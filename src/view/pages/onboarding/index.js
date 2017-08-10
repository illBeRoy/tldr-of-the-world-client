import React, {Component} from 'react';

import {BoundingBox} from '../../../utils/layout';
import {Modal} from '../../components/modal';
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
        this.state.alert = '';
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
            this.showAlert(`Error: ${err.response.data.message}`);
            return;
        }

        this.props.onFeedCreated(feed);
    }

    showAlert(text) {

        this.setState({alert: text});
    }

    hideAlert() {

        this.setState({alert: ''});
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

                {
                    this.state.alert?
                        <Modal modalWidth={500} modalHeight={100} onClickOutside={this.hideAlert.bind(this)}>
                            <BoundingBox
                                style={{
                                    position: 'absolute',
                                    left: 0,
                                    top: 0,
                                    width: '100%',
                                    height: '100%',
                                    textAlign: 'center',
                                    lineHeight: '100px'
                                }}
                            >
                                {this.state.alert}
                            </BoundingBox>
                        </Modal> :
                        null
                }

            </BoundingBox>
        )
    }

}


export {Page}
