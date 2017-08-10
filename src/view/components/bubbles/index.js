import React, {Component} from 'react';
import DataSet from 'vis/lib/DataSet';
import Network from 'vis/lib/network/Network';
import arrayDiff from 'simple-array-diff';


class Bubbles extends Component {

    static propTypes = {
        values: React.PropTypes.array,
        onSelect: React.PropTypes.func,
        backgroundColor: React.PropTypes.string,
        textColor: React.PropTypes.string
    };

    static defaultProps = {
        values: ['Adolf Hitler', 'Hermann Goering', 'Joseph Stalin'],
        onSelect: (label) => {},
        backgroundColor: '#F92C55',
        textColor: '#FFFFFF'
    };

    constructor(props) {

        super(props);

        this._nodes = new DataSet(props.values.map(x => {return {label: x}}));
        this._nop_dataset = new DataSet();
        this._container = null;
        this._network = null;
    }

    componentDidMount() {

        this._initalizeNetwork();
    }

    componentWillReceiveProps(nextProps) {

        let diff = arrayDiff(this.props.values, nextProps.values || []);

        for (const removed of diff.removed) {

            const [idToRemove] = this._nodes.getIds({filter: (x => x.label == removed)});
            this._nodes.remove(idToRemove);
        }

        this._nodes.add(diff.added.map(x => {return {label: x}}));
    }

    _initalizeNetwork() {

        this._network = new Network(
            this._container,
            {nodes: this._nodes, edges: this._nop_dataset},
            {
                nodes: {
                    borderWidth: 0,
                    shape: 'circle',
                    color: {
                        background: this.props.backgroundColor,
                        highlight: {
                            background: this.props.backgroundColor,
                            border: this.props.backgroundColor
                        }
                    },
                    font: {
                        color: this.props.textColor,
                    }
                },
                physics: {
                    stabilization: false,
                    minVelocity:  0.01,
                    solver: 'repulsion',
                    repulsion: {
                        nodeDistance: 70
                    }
                },
                interaction: {
                    zoomView: false,
                    dragView: false
                }
            },
        );

        this._network.on("click", (e) => {

            if (e.nodes.length) {

                let node = this._nodes.get(e.nodes[0]);
                this.props.onSelect(node.label)
            }
        });
    }

    render() {

        return (

            <div
                ref={(e) => this._container = e}
                style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: '100%',
                    height: '100%'
                }}
            ></div>
        );
    }

}


export {Bubbles};
