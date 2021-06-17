const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=58998453134e4d02e78b948045bfb4d9&query=" +
    latitude +
    " " +
    longitude +
    "&units=f";
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        `${body.current.weather_descriptions[0]}. It is currenty ${body.current.temperature} degrees, and it feel like ${body.current.feelslike} degrees. The humidity for the day is ${body.current.humidity}%.`
      );
    }
  });
};

module.exports = forecast;
