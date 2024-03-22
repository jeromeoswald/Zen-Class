var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all", true);
xhr.onload = function () 
{
    //console.log("XMLHttpRequest = status", xhr.status);
    var countries = JSON.parse(xhr.responseText);
    countries.forEach((country) => 
    {
        console.log(country.name.common + ": "+ country.flag + ", "+ country.region + ", "+ country.subregion + ", "+ country.population);
    });
        
};
xhr.send();