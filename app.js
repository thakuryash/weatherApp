//Init storage
const storage = new Storage();
//Get stored location data
const weatherLocation = storage.getLocationData();
//INIT weather object
const weather = new Weather(weatherLocation.city);
//Init UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// weather.changeLocation('Miami', 'FL');

//Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;

  //Change location
  weather.changeLocation(city);

  //Set location in Local storage
  storage.setLocationData(city);

  //Get and display weather
  getWeather();

  //CLose modal
  $('#locModal').modal('hide');
});


function getWeather() {
weather.getWeather()
.then(results => {
  ui.paint(results);
})
.catch(err => console.log(err));
}



