document.addEventListener('DOMContentLoaded', function () {
    const countriesURL = 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json';
    // const weatherAPIKey = '956d52904e636da962067710d0f9ea86';

    fetch(countriesURL)
        .then(response => response.json())
        .then(data => {
            const countryCardsContainer = document.getElementById('countryCards');
            data.forEach(country => {
                const card = document.createElement('div');
                card.classList.add("col-lg-4", "col-sm-12", "mb-4");

                const cardBody = document.createElement('div');
                cardBody.classList.add("card", "text-center");

                const cardHeader = document.createElement("div");
                cardHeader.classList.add("card-header");
                cardHeader.textContent = country.name;

                const cardBodyContent = document.createElement("div");
                cardBodyContent.classList.add("card-body");

                // const name = document.createElement('h5');
                // name.textContent = country.name;

                // const flag = document.createElement('img');
                // flag.src = country.flag.svgUrl;
                // console.log(country.flag);
                // flag.className = 'card-img-top';

                const flag = document.createElement("img");
                flag.src = country.flag.svg;
                console.log(country.flag);
                flag.alt = country.name + " flag";
                // flag.className = 'card-img-top';
                flag.style.width = "200px"; // Set fixed width
                flag.style.height = "150px"; // Set fixed height
                cardBody.appendChild(flag);
                flag.classList.add("img-fluid", "mb-2");

                // Add border to the flag image
                flag.style.border = "2px solid #1E0342";
                
                
                const capital = document.createElement('p');
                capital.textContent = 'Capital: ' + country.capital;

                const latlng = document.createElement('p');
                latlng.textContent = 'Latlng: ' + country.latlng;

                const region = document.createElement('p');
                region.textContent = 'Region: ' + country.region;

                const code = document.createElement('p');
                code.textContent = 'Country Code: ' + country.alpha2Code;

                const weatherBtn = document.createElement('button');
                weatherBtn.textContent = "Click for Weather";
                weatherBtn.classList.add("btn", "btn-primary", "btn-block", "mt-3"); // Add margin-top for button
                weatherBtn.addEventListener('click', () => {
                    getWeather(country.name);
                });


                cardBodyContent.appendChild(cardHeader);
                cardBodyContent.appendChild(flag);
                cardBodyContent.appendChild(capital);
                cardBodyContent.appendChild(latlng);
                cardBodyContent.appendChild(region);
                cardBodyContent.appendChild(code);
                cardBodyContent.appendChild(weatherBtn);

                cardBody.appendChild(cardHeader);
                cardBody.appendChild(cardBodyContent);
                

                card.appendChild(cardBody);
                countryCardsContainer.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching countries:', error));

    // Function to fetch weather data
  function getWeather(region) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${region}&appid=956d52904e636da962067710d0f9ea86&units=metric`)
      .then(response => response.json())
      .then(weatherData => {
        alert(`Current temperature in ${region}: ${weatherData.main.temp}°C`);
      })
      .catch(error => console.error("Error fetching weather data:", error));
  }
});
