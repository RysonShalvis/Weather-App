import React, { Component } from 'react';

class Weather extends Component {

    

    render() {
        const date = () => {
            const day = new Date;
            const month = new Date;
            const year = new Date;
            return (`${month.getMonth() + 1}/${day.getDate()}/${year.getFullYear()}`)
        }

        const time = () => {
            const hour = new Date;
            const minute = new Date;
           return (`${hour.getHours()}:${minute.getMinutes()}`)
        }
        if (this.props.data) {
            return (
                <div>
                    <div className="weather-img-ctn">
                        <div className="weather-wrapper">
                        <img src={this.props.weatherImage} alt={this.props.weatherDescription} className="left-ctn weather-img"/>
                        <div className="left-ctn temp">{this.props.farenheit} degrees</div>
                            <div className="left-ctn other-info-wrapper">
                                <div className="other-info">Feels like: {this.props.feelsLike} degrees</div>
                                <div className="other-info">Humidity: {this.props.humidity}%</div>
                                <div className="other-info">Wind: {this.props.windSpeed} mph</div>
                            </div>
                        </div>
                        <div className="location-wrapper">
                            <div className="location">{this.props.city}, {this.props.country}</div>
                            <div className="description">{this.props.weatherDescription}</div>
                            <div className="date">{date()}</div>
                            <div className="date">{time()}</div>
                        </div>
                    </div>
                </div>
            );
        }
        return ""

        
    }
}

export default Weather;