//get url for data
//fetch url and console.log
//target html elements and 
//
//input that data in the correct areas on the page

var weatherUrl = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid='
var TodayDoc = $('#today')
var TodayTempDoc = $('#todayTemp')
var TodayHumidDoc = $('#todayHumid')
var TodayWindDoc = $('#todayWind')
var TodayUvDoc = $('#todayUv')
var searchBarDoc = $('#searchB')

var day1TempDoc = $('#day1Temp')
var day1HumidDoc = $('#day1Humid')
var day1WindDoc = $('#day1Wind')
var day1UvDoc = $('#day1Uv')

var day2TempDoc = $('#day2Temp')
var day2HumidDoc = $('#day2Humid')
var day2WindDoc = $('#day2Wind')
var day2UvDoc = $('#day2Uv')

var day3TempDoc = $('#day3Temp')
var day3HumidDoc = $('#day3Humid')
var day3WindDoc = $('#day3Wind')
var day3UvDoc = $('#day3Uv')

var day4TempDoc = $('#day4Temp')
var day4HumidDoc = $('#day4Humid')
var day4WindDoc = $('#day4Wind')
var day4UvDoc = $('#day4Uv')

function getApi (Url) {
    fetch(Url)
      .then(function (response) {
        console.log(response);
        
        return response.json();
    });
  }

getApi (weatherUrl);


function DisplayData (){
    TodayTempDoc.innerHTML = 'temp:' + 
    TodayHumidDoc.innerHTML = 'humidity:' + 
    TodayWindDoc.innerHTML = 'Wind Speed:' +
    TodayUvDoc.innerHTML  =  'UV index: ' +

    day1TempDoc.innerHTML ='temp:' + 
    day1HumidDoc.innerHTML = 'humidity:' + 
    day1WindDoc.innerHTML = 'Wind Speed:' +
    day1UvDoc.innerHTML = 'UV index: ' +

    day2TempDoc.innerHTML = 'temp:' + 
    day2HumidDoc.innerHTML = 'humidity:' + 
    day2WindDoc.innerHTML = 'Wind Speed:' +
    day2UvDoc.innerHTML = 'UV index: ' +

    day3TempDoc.innerHTML = 'temp:' + 
    day3HumidDoc.innerHTML ='humidity:' + 
    day3WindDoc.innerHTML = 'Wind Speed:' +
    day3UvDoc = 'UV index: ' +

    day4TempDoc.innerHTML = 'temp:' + 
    day4HumidDoc.innerHTML = 'humidity:' + 
    day4WindDoc.innerHTML = 'Wind Speed:' +
    day4UvDoc.innerHTML = 'UV index: ' +


}

searchBarDoc.addEventListener (click, displayData)

