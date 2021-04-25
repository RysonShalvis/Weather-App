import React, { Component } from 'react';
import WeatherApp from './WeatherApp';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data1: '',
            data2: ''
        }
        this.callBack = this.callBack.bind(this);
        this.callBackTwo = this.callBackTwo.bind(this);
    }

    callBack(data) {
        this.setState({data1: data})
    }

    callBackTwo(data) {
        this.setState({data2: data})
    }

    render() {
        return (
            <div className="weatherapp-ctn">
                <WeatherApp childData={this.callBack}/>
                <WeatherApp childData={this.callBackTwo} />
                {this.state.data1 && this.state.data2 ? <p className="">{this.state.data1.name}{this.state.data2.name}</p> : ""}
            </div>
        );
    }
}

export default App;