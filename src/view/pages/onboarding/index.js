import React, {Component} from 'react';

import {BoundingBox} from '../../../utils/layout';
import {Logo} from './logo';
import {Personnel} from './personnel';


class Page extends Component {

    static propTypes = {
        people: React.PropTypes.array
    };

    static defaultProps = {
        people: []
    };

    constructor(props) {

        super(props);

        this.state = {};
        this.state.view = 'INTRO';
    }

    componentDidMount() {

        setTimeout(() => {

            this.changeView('PERSONNEL');
        }, 2000);
    }

    changeView(view) {

        this.setState({view});
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

                {this.state.view == 'INTRO'?  <Logo/> : <Personnel/>}

            </BoundingBox>
        )
    }

}


export {Page}
