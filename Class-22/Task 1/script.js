document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("countryCards");

    // Fetch data from Rest Countries API
    fetch("https://restcountries.com/v3/all")
        .then(response => response.json())
        .then(data => {
            data.forEach(country => {
                const { name,  region, subregion, flags, latlng } = country;

                // Create card element
                const card = document.createElement("div");
                card.classList.add("col-lg-4", "col-sm-12");

                // Add colored border
                card.style.border = "2px solid red";

                // Card header
                const cardHeader = document.createElement("div");
                cardHeader.classList.add("card-header");
                cardHeader.textContent = name.common;

                // Card body
                const cardBody = document.createElement("div");
                cardBody.classList.add("card-body");

                // Capital
                const capitalElement = document.createElement("p");
                capitalElement.textContent = `Region: ${region}`;
                cardBody.appendChild(capitalElement);

                // Region
                const regionElement = document.createElement("p");
                regionElement.textContent = `Subregion: ${subregion}`;
                cardBody.appendChild(regionElement);

                // // Country codes
                // const codesElement = document.createElement("p");
                // codesElement.textContent = `Country Codes: ${Object.values(codes).join(", ")}`;
                // cardBody.appendChild(codesElement);

                // Flag
                const flagImg = document.createElement("img");
                    flagImg.classList.add("card-img-top", "mt-3");
                    flagImg.src = `${flags[0]}`;
                    flagImg.style.width = "200px"; // Set fixed width
                    flagImg.style.height = "150px"; // Set fixed height
                    cardBody.appendChild(flagImg);

                // Button for weather
                const weatherButton = document.createElement("button");
                weatherButton.classList.add("btn", "btn-primary", "mt-3");
                weatherButton.textContent = "Click for Weather";
                weatherButton.addEventListener("click", () => fetchWeather(latlng[0], latlng[1]));
                cardBody.appendChild(weatherButton);

                // Append card header and body to card
                card.appendChild(cardHeader);
                card.appendChild(cardBody);

                // Append card to container
                container.appendChild(card);
            });
        })
        .catch(error => console.error("Error fetching country data:", error));

    // Function to fetch weather data
    function fetchWeather(latitude, longitude) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=YOUR_API_KEY`)
            .then(response => response.json())
            .then(weatherData => {
                alert(`Weather: ${weatherData.weather[0].main}`);
            })
            .catch(error => console.error("Error fetching weather data:", error));
    }
});