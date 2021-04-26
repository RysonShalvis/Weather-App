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

        const compareData = () => {

            const farenheight1 = (this.state.data1.main.temp - 273.15) * (9/5) + 32;
            const farenheight2 = (this.state.data2.main.temp - 273.15) * (9/5) + 32;

            if (farenheight1 > farenheight2) {
                return <p>{this.state.data1.name} is {Math.round(Number(farenheight1) - Number(farenheight2))} °F warmer than {this.state.data2.name}</p>
            }
            return <p>{this.state.data2.name} is {Math.round(Number(farenheight2) - Number(farenheight1))} °F warmer than {this.state.data1.name}</p>
        }

        return (
            <div className="">
                <div className="weatherapp-ctn">
                    <WeatherApp childData={this.getChildData}/>
                    <WeatherApp childData={this.getChildDataTwo} />
                </div>
                {this.state.data1 && this.state.data2 ? compareData() : ""}
            </div>
        );
    }
}

export default App;