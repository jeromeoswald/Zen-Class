// var obj1 ={ name: "person1", age:5};
// var obj2 ={ age:5, name: "person2"};

// function areObjectsEqual(obj1, obj2)
// {
//     var keys1 = Object.keys(obj1);
//     var keys2 = Object.keys(obj2);
//  if(keys1.length != keys2.length)
//     {
//         return false;
//     }
//  for (var key of keys1)
//     {
//      if(obj1[key] !== obj2[key])
//         {
//             return false
//         }
        
//     }
//  return true;
// }
// console.log(areObjectsEqual(obj1,obj2));

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