document.addEventListener("DOMContentLoaded", function() {
    const countryInfoContainer = document.getElementById("country-info");
  
    // Fetch data from Rest Countries API
    fetch("https://restcountries.com/v3.1/all")
      .then(response => response.json())
      .then(data => {
        data.forEach(country => {
          // Create card for each country
          const card = document.createElement("div");
          card.classList.add("col-lg-4", "col-sm-12", "mb-4");
  
          const cardBody = document.createElement("div");
          cardBody.classList.add("card", "text-center");
  
          const cardHeader = document.createElement("div");
          cardHeader.classList.add("card-header");
          cardHeader.textContent = country.name.common;
  
          const cardBodyContent = document.createElement("div");
          cardBodyContent.classList.add("card-body");
  
          const flagImg = document.createElement("img");
          flagImg.src = country.flags.png;
          console.log(flagImg);
          flagImg.style.width = "200px"; // Set fixed width
          flagImg.style.height = "150px"; // Set fixed height
          cardBody.appendChild(flagImg);
          flagImg.classList.add("img-fluid", "mb-2");
          // Add border to the flag image
          flagImg.style.border = "2px solid #1E0342";
  
          const region = document.createElement("p");
          region.textContent = `Region: ${country.region}`;
  
          const subregion = document.createElement("p");
          subregion.textContent = `Subregion: ${country.subregion}`;

          const capital = document.createElement('p');
          capital.textContent = 'Capital: ' + country.capital;

          const latlng = document.createElement('p');
          latlng.textContent = 'Latlng: ' + country.latlng;
          
          const code = document.createElement('p');
          code.textContent = 'Country Code: ' + country.cca3;

          const area = document.createElement('p');
          area.textContent = 'Area: ' + country.area;
          
          const population = document.createElement('p');
          population.textContent = 'Population: ' + country.population;

          const weatherButton = document.createElement("button");
          weatherButton.textContent = "Click for Weather";
          weatherButton.classList.add("btn", "btn-primary", "btn-block", "mt-3"); // Add margin-top for button
          
          weatherButton.addEventListener("click", function() {
            // Pass country capital to fetch weather data
            fetchWeather(country.capital);
          });
  
          cardBodyContent.appendChild(flagImg);
          cardBodyContent.appendChild(capital);
          cardBodyContent.appendChild(latlng);
          cardBodyContent.appendChild(region);
          cardBodyContent.appendChild(subregion);
          cardBodyContent.appendChild(code);
          cardBodyContent.appendChild(area);
          cardBodyContent.appendChild(population);
          cardBodyContent.appendChild(weatherButton);
  
          cardBody.appendChild(cardHeader);
          cardBody.appendChild(cardBodyContent);
  
          card.appendChild(cardBody);
  
          countryInfoContainer.appendChild(card);
        });
      })
      .catch(error => console.error("Error fetching country data:", error));
  });
  
  // Function to fetch weather data
  function fetchWeather(region) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${region}&appid=956d52904e636da962067710d0f9ea86&units=metric`)
      .then(response => response.json())
      .then(weatherData => {
        alert(`Current temperature in ${region}: ${weatherData.main.temp}°C`);
      })
      .catch(error => console.error("Error fetching weather data:", error));
  }
  