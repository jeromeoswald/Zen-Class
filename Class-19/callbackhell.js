const getContinent = (callback) => {
    setTimeout(() => {
        let continent = "Asia";
        console.log(continent);
        callback(continent);
    },1000);
};


const getCountries = (callback) => {
    setTimeout(() => {
        let countries = "India";
        console.log(countries);
        callback(countries);
    },1000);
};

const getStates = (callback) => {
    setTimeout(() => {
        let states = "TamilNadu";
        console.log(states);
        callback(states);
    },1000);
};


const getCity = (callback) => {
    setTimeout(() => {
        let city = "Trichy";
        console.log(city);
        callback();
    },1000);
};

const done = () => {
    console.log("Done!!!");
}


const getAddress = () => {
    getContinent((continent) => {
        getCountries((countries) => {
            getStates((states) => {
                getCity(() => {
                    done();
                });
            });
        });
    });
};

getAddress();