import React, {Component} from 'react';
import deepEqual from 'deep-equal';


class Suggestions extends Component {

    static propTypes = {
        anchorX: React.PropTypes.number,
        anchorY: React.PropTypes.number,
        width: React.PropTypes.number,
        list: React.PropTypes.array,
        onSelect: React.PropTypes.func
    };

    static defaultProps = {
        onSelect: () => {}
    };

    constructor(props) {

        super(props);

        this.state = {};
        this.state.selectedItem = 0;
    }

    get selectedItem() {

        return this.props.list[this.state.selectedItem];
    }

    componentWillReceiveProps(props) {

        if (!deepEqual(this.props.list, props.list)) {

            this.setState({selectedItem:  0});
        }
    }

    selectNext() {

        this.setState({selectedItem: (this.state.selectedItem + 1) % this.props.list.length});
    }

    selectPrevious() {

        this.setState({selectedItem: (((this.state.selectedItem - 1 + this.props.list.length) % this.props.list.length + this.props.list.length)) % this.props.list.length});
    }

    selectAt(index) {

      this.setState({selectedItem: index});
    }

    render() {

          console.log(this.props.list);
        return (

            <div
                style={{
                    position: 'absolute',
                    left: this.props.anchorX,
                    top: this.props.anchorY,
                    width: this.props.width,
                    height: 20 * this.props.list.length,
                    border: '1px solid #CCCFD4',
                    boxSizing: 'border-box',
                    zIndex: 10,
                    cursor: 'default',
                    display: this.props.list.length > 0? 'block': 'none'
                }}
            >

                {
                    this.props.list.map((item, key) =>
                        <div
                            key={key}
                            onMouseOver={() => this.selectAt(key)}
                            onClick={() => this.props.onSelect(item)}
                            style={{
                                position: 'absolute',
                                left: 0,
                                top: 20 * key,
                                width: '100%',
                                height: 20,
                                borderBottom: '1px solid #CCCFD4',
                                boxSizing: 'border-box',
                                textAlign: 'center',
                                lineHeight: '20px',
                                background: key == this.state.selectedItem? '#E5E5E5' : '#FFFFFF'
                            }}
                        >
                            {item}
                        </div>
                    )
                }

            </div>
        );
    }

}


export {Suggestions};
