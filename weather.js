class Weather {
  constructor(city) {
    this.apiKey = '02b9d2a0c78d7f7482bb28a23b191dd5';
    this.city = city;
  }

  // Fetch weahter from API
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&APPID=${this.apiKey}&units=metric`);

    const responseData = await response.json();

    return responseData;
    console.log(responseData);
  }

  //Change weather location
  changeLocation(city){
    this.city = city;
  }
}

