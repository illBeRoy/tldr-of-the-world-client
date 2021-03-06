import React from 'react';


/**
 * Used to position components in layouts.
 * @param props {object} props to pass
 * @constructor
 */
const BoundingBox = (props) => <div {...props} > {props.children} </div>;


export {BoundingBox};
