fetch('resume.json')
    .then(response => response.json())
    .then(data => {
        console.log(data); // This will log the JSON data from the file
    })
    .catch(error => {
        console.error('Error loading the JSON file:', error);
    });

//for Loop
    const resume = {
        "name": "Jerome Oswald J",
        "title": "Software Developer",
        "contact": {
            "email": "jeromeoswald7@gmail.com",
            "phone": "999999999",
            "address": "123 Main St, Trichy, Tamil Nadu, 621601"
        },
        // other resume data
    };
    
   
for (let key in resume) {
    console.log(key + ": " + JSON.stringify(resume[key]));
  }


//for in

    for (let key in resume) {
        if (resume.hasOwnProperty(key)) {
          console.log(key + ": " + JSON.stringify(resume[key]));
        }
      }
      

//for of
    const entries = Object.entries(resume);
for (let [key, value] of entries) {
  console.log(key + ": " + JSON.stringify(value));
}


//forEach
Object.entries(resume).forEach(([key, value]) => {
    console.log(key + ": " + JSON.stringify(value));
  });

    
