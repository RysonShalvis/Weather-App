
import './App.css';


import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      input: '',
      fullInfo: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  onChange(e) {
    this.setState({input: e.target.value},a => console.log(this.state.input))
  }

  onSearch() {
    
  const key = '240f126d721bf0d1689bec8754299a1f';
  const input = this.state.input;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&id=524901&appid=${key}`)
  .then(response => response.json())
  .then(data => {
    const farenheit = (data.main.temp - 273.15) * (9/5) + 32
    this.setState({
      fullInfo: <p className="weather-info">The temperature of {data.name}, {data.sys.country} is {Math.round(farenheit)} degrees farenheit  and the wind speed is {data.wind.speed}</p>
    })
    console.log(data);
    }); 
  }

  render() {
    return (
      <div>
        <input onChange={this.onChange} type="text" name="input" id="input"/>
        <input onClick={this.onSearch} type="button" value="Search"/>
        <div className="weather-ctn">
          {this.state.fullInfo}
        </div>
      </div>
    );
  }
}

export default App;


