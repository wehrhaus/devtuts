import React from "react";

export default React.createClass({
    render: function() {
        return <div className="dollars">${ this.props.dollarValue }</div>;
    }
});