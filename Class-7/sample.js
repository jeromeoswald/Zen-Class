fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Get all the countries from Asia continent /region using Filter function
    const asiaCountries = data.filter(country => country.region === 'Asia');
    console.log('Countries from Asia:', asiaCountries);

    // Get all the countries with a population of less than 2 lakhs using Filter function
    const countriesWithPopulationLessThan2Lakhs = data.filter(country => country.population < 200000);
    console.log('Countries with population less than 2 lakhs:', countriesWithPopulationLessThan2Lakhs);

    // Print the following details name, capital, flag, using forEach function
    data.forEach(country => {
      console.log('Name:', country.name.common);
      console.log('Capital:', country.capital);
      console.log('Flag:', country.flags.svg);
    });

    // Print the total population of countries using reduce function
    const totalPopulation = data.reduce((acc, country) => acc + country.population, 0);
    console.log('Total population:', totalPopulation);

    // Print the country that uses US dollars as currency.
    const usDollarCountries = data.filter(country => {
      const currencies = country.currencies;
      return currencies && currencies.USD;
    });
    console.log('Countries using US Dollars:', usDollarCountries);
  })
  .catch(error => console.error('Error fetching data:', error));
