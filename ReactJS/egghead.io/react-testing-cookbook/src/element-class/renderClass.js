import React from 'react';

export default React.createClass({
    render: function() {
        return <div className={ this.props.class }>Element with className { this.props.class }.</div>;
    }
});