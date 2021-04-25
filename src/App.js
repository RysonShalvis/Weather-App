import React, { Component } from 'react';
import WeatherApp from './WeatherApp';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data1: '',
            data2: ''
        }
        this.getChildData = this.getChildData.bind(this);
        this.getChildDataTwo = this.getChildDataTwo.bind(this);
    }

    getChildData(data) {
        this.setState({data1: data})
    }

    getChildDataTwo(data) {
        this.setState({data2: data})
    }

    render() {
        return (
            <div className="">
                <div className="weatherapp-ctn">
                    <WeatherApp childData={this.getChildData}/>
                    <WeatherApp childData={this.getChildDataTwo} />
                </div>
                {this.state.data1 && this.state.data2 ? <p className="">{this.state.data1.name} {this.state.data2.name}</p> : ""}
            </div>
        );
    }
}

export default App;