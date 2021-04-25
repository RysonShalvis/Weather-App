import React, { Component } from 'react';

class Inputs extends Component {
    render() {
        return (
            
            <div className="input-ctn">
                <label htmlFor="input">Type in a Location</label>
                <input onChange={this.props.onChange} type="text" name="input"/>
                <input onClick={this.props.onSearch} type="button" value="Search" />
            </div>
            
        );
    }
}

export default Inputs;