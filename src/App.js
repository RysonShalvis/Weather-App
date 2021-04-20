import sunny from './images/sunny.jpeg';
import thunderstorm from './images/thunderstorm.jpeg';
import cloudy from './images/cloudy.png';
import rainy from './images/rainy.png';
import snowy from './images/snowy.png';
import './App.css';


import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      input: '',
      fullInfo: '',
      realInfo: ''
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
    const farenheit = (data.main.temp - 273.15) * (9/5) + 32;
    const feelsLike = (data.main.feels_like - 273.15) * (9/5) + 32;
    let weatherImage;
    switch (data.weather[0].main) {
      case 'Clear':
        weatherImage = sunny
        break;
      
      case 'Thunderstorm':
        weatherImage = thunderstorm;
        break;

      case 'Rain':
        weatherImage = rainy;
        break;

      case 'Snow':
        weatherImage = snowy;
        break;

      case 'Clouds':
        weatherImage = cloudy;
        break;

      default: 
      weatherImage = cloudy
    }; 
    this.setState({
      fullInfo: <p className="weather-info">The temperature of {data.name}, {data.sys.country} is {Math.round(farenheit)} degrees farenheit with {data.weather[0].main} and the wind speed is {data.wind.speed}.</p>,
      realInfo: (
        <div className="weather-img-ctn">
        <div className="weather-wrapper">
          <img src={weatherImage} alt={data.weather[0].description} className="left-ctn weather-img"/>
          <div className="left-ctn temp">{Math.round(farenheit)} degrees</div>
          <div className="left-ctn other-info-wrapper">
            <div className="other-info">Feels like: {Math.round(feelsLike)} degrees</div>
            <div className="other-info">Humidity: {data.main.humidity}%</div>
            <div className="other-info">Wind: {data.wind.speed} mph</div>
          </div>
        </div>
          <div className="location-wrapper">
            <div className="location">{data.name}, {data.sys.country}</div>
            <div className="description">{data.weather[0].description}</div>
          </div>
      </div>
      )
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
        {this.state.realInfo}
      </div>
    );
  }
}

export default App;


