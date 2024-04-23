// var xhr = new XMLHttpRequest();
// xhr.open("GET", "https://restcountries.com/v3.1/all", true);
// xhr.onload = function () 
// {
//     //console.log("XMLHttpRequest = status", xhr.status);
//     var countries = JSON.parse(xhr.responseText);
//     countries.forEach((country) => 
//     {
//         console.log(country.name.common + ": "+ country.flag + ", "+ country.region + ", "+ country.subregion + ", "+ country.population);
//     });
        
// };
// xhr.send();


function fetchCountryData(){
    const url = "https://restcountries.com/v3.1/all";
    fetch(url).then((response) =>{
        return response.json();
    }).then((data)=>{
        data.forEach((country) => 
    {
        console.log(country.name.common + ": "+ country.flags.png + ", "+ country.region + ", "+ country.subregion + ", "+ country.population);
    });
    })
}

fetchCountryData();
