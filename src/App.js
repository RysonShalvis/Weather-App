import sunny from './images/sunny.jpeg';
import thunderstorm from './images/thunderstorm.jpeg';
import cloudy from './images/cloudy.png';
import rainy from './images/rainy.png';
import snowy from './images/snowy.png';
import Inputs from './Inputs';
import Weather from './Weather';
import './App.css';


import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      input: '',
      weatherImage: '',
      weatherDescription: '',
      farenheit: 0,
      feelsLike: 0,
      humidity: '',
      windSpeed: 0,
      city: '',
      country: '',
      data: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  onChange(e) {
    this.setState({input: e.target.value})
  }

  handleEnter(event) {
      if (event.key === 'Enter') {
        this.onSearch()
      }
  }

  onSearch(e) {

      const key = '240f126d721bf0d1689bec8754299a1f';
      const input = this.state.input;
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&id=524901&appid=${key}`)
      .then(response => response.json())
      .then(data => {
        const farenheit = (data.main.temp - 273.15) * (9/5) + 32;
        const feelsLike = (data.main.feels_like - 273.15) * (9/5) + 32;
        const windSpeed = data.wind.speed * 2.237;
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
    
          default: 
          weatherImage = cloudy;
        }; 
    
        this.setState({
          weatherImage: weatherImage,
          weatherDescription: data.weather[0].description,
          farenheit: farenheit.toFixed(2),
          feelsLike: feelsLike.toFixed(2),
          humidity: data.main.humidity,
          windSpeed: windSpeed.toFixed(2),
          city: data.name,
          country: data.sys.country,
          data: true
          })
        }); 
    

    
  }

  render() {

    Window.onKeyPress = this.onSearch

    return (
      <div>
        <Inputs
          onChange={this.onChange}
          onSearch={this.onSearch}
          handleEnter={this.handleEnter}
        />
        <Weather
          weatherImage={this.state.weatherImage} 
          weatherDescription={this.state.weatherDescription} 
          farenheit={this.state.farenheit} 
          feelsLike={this.state.feelsLike} 
          humidity={this.state.humidity} 
          windSpeed={this.state.windSpeed}
          city={this.state.city}
          country={this.state.country}
          data={this.state.data}
          />
      </div>
    );
  }
}

export default App;


