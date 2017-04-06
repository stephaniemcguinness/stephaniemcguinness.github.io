var currentTemperature;
var celcius;
var fahrenheit;

var description;
var icon;


 $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Sydney,au&appid=3d2363042523c46eb86f30163a636f2c", function(result){
  currentTemperature = result.main.temp;

 description = result.weather[0].description;
 icon = result.weather[0].icon;
 $('img').attr("src", "https://openweathermap.org/img/w/"+icon+".png");

$('#output').append(currentTemperature);
$('h2').html(description);
  
  celcius = currentTemperature - 273.15;
  fahrenheit = currentTemperature * (9/5) - 459.67; 


 $('#celcius').append(celcius.toFixed(0) + '&#176;C');

 $('#fahrenheit').append(fahrenheit.toFixed(0) + '&#176;F');


celcius = 30
if(celcius>25){
	$('body').css("background","url(images/warm.jpg) no-repeat center center")
}





  // T(°C) = T(K) - 273.15

  //T(°F) = K × (9/5) - 459.67
  
  console.log(result);

});