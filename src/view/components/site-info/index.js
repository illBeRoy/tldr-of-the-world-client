import React, {Component} from 'react';

import {Modal} from '../../components/modal';
import {BoundingBox} from '../../../utils/layout';
import {loadAsset} from '../../../utils/asset-loader';


class SiteInformation extends Component {

    static propTypes = {
        onClickOutside: React.PropTypes.func.isRequired
    };

    get linkStyle() {

        return {
            textDecoration: 'none',
            color: '#9013FE',
            cursor: 'pointer'
        };
    }

    render() {

        return (

            <Modal modalWidth={600} modalHeight={500} onClickOutside={this.props.onClickOutside}>

                <BoundingBox
                    style={{
                        position: 'absolute',
                        left: 20,
                        top: 20,
                        width: 'calc(100% - 40px)',
                        height: 'calc(100% - 40px)',
                        overflowX: 'hidden',
                        overflowY: 'scroll',
                        cursor: 'default'
                    }}
                >

                <span style={{fontWeight: 'bold', fontSize: 26}}>
                    TL;DR of the World
                </span>

                <br />

                an academic project attempting to literally tl;dr the history of the world.

                <br />
                <br />

                Ever since the dawn of mankind, one of the most well documented relics were the quotes of leading figures.
                This is not for naught, as those inspiring quotes, sayings, or famous last words, express a great deal of knowledge using a small number of words - a useful feat in our age, where time is of essence.

                <br />
                <br />

                The TL;DR project allows you to “follow” famous characters from all over history and learn, through their thoughts and conversations, the essence of themselves, their society, and their time, and discover new topics of which you’ve never thought at first.

                <br />
                <br />

                In addition to your selected group of people, our algorithm will attempt to enrich your feed with quotes of others who are related to them, by time, place and domain.

                <br />
                <br />

                Once you have enjoyed the feed of your doing, you can share it by using its unique url, search for selected keywords within it or click on the figures names and images to read more about them

                <br />
                <br />

                <span style={{fontWeight: 'bold'}}>Attributions:</span>

                <br />
                <br />

                <a style={this.linkStyle} href="http://pantheon.media.mit.edu" target="_blank">MIT’s pantheon</a><br/><br />
                <a style={this.linkStyle} href="https://en.wikiquote.org" target="_blank">Wikiquote</a><br/><br />
                <a style={this.linkStyle} href="https://en.wikipedia.org" target="_blank">Wikipedia</a><br/><br />

                <br />

                <span style={{fontWeight: 'bold'}}>About us:</span>

                <br />
                <br />

                We are &nbsp;
                <a style={this.linkStyle} href="https://github.com/illBeRoy" target="_blank">Roy Sommer</a>, &nbsp;
                <a style={this.linkStyle} href="https://github.com/avivbh" target="_blank">Aviv Ben-Haim</a> and &nbsp;
                <a style={this.linkStyle} href="https://github.com/banuni" target="_blank">Nadav Nuni</a>,
                three B.Sc students at Ben Gurion University of the Negev, Israel. This project was conceived as part
                of our research in the fields of Digital Humanities, a subject lead by &nbsp;
                <a style={this.linkStyle} href="https://www.cs.bgu.ac.il/~yaeln/" target="_blank">PhD Yael Netzer</a>.

                <br />
                <br />

                <span style={{fontWeight: 'bold'}}>Source code:</span>

                <br />
                <br />

                The enitirity of the project is open source and available to the public to learn from and extend upon.
                It is available in three github repositories, each having their own documentation: <br/>

                <br />

                <a style={this.linkStyle} href="https://github.com/illBeRoy/famous-quote-feed-server" target="_blank">Site server</a><br /><br />
                <a style={this.linkStyle} href="https://github.com/illBeRoy/famous-quote-feed-client" target="_blank">Site client</a><br /><br />
                <a style={this.linkStyle} href="https://github.com/illBeRoy/famous-quote-feed-data-explorer" target="_blank">Graph and data</a><br /><br />

                </BoundingBox>

            </Modal>
        );
    }

}


export {SiteInformation};
