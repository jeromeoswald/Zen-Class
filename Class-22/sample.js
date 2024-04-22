const getStates = () => {
        return new Promise ((resolve,reject)=>{
            setTimeout(() => {
            let state = "TamilNadu";
            console.log(state);
            resolve(state);
            //reject("error Occurred!!!")
        },1000);
    });
        
};
    
    
    const getCity = () => {
            return new Promise ((resolve,reject)=>{
                setTimeout(() => {
                let city = "Trichy";
                console.log(city);
                resolve(city);
            },1000);
        });
    };
    
    const done = () => {
        console.log("Done!!!");
    }
    
    
    const getAddress = () => 
    {
        
        getStates()
        .then((state) => {
        return getCity()
        },(err)=>{
            console.log(err);
        })
        .then (()=>{
            return done();
        })
    
    };
    
    getAddress();
    