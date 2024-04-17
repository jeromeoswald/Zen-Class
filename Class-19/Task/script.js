// (function(){
//     var counter = 10;

//     var counterdownElement = document.getElementById("countdown");

//     var updateCountdown = function () {
//         counterdownElement.textContent = counter;
//         if (counter === 0){
//             counterdownElement.textContent = "Happy Independence Day!!!";
//             return;
//         }
//         counter--;
//         setTimeout(updateCountdown,1000);
//     };
//     setTimeout(updateCountdown,1000);
// })();


var counterdownElement = document.getElementById("countdown");


setTimeout(function(){
    counterdownElement.textContent ='9';
    setTimeout(function(){
        counterdownElement.textContent ='8';
        setTimeout(function(){
            counterdownElement.textContent ='7';
            setTimeout(function(){
                counterdownElement.textContent ='6';
                setTimeout(function(){
                    counterdownElement.textContent ='5';
                    setTimeout(function(){
                        counterdownElement.textContent ='4'; 
                        setTimeout(function(){
                            counterdownElement.textContent ='3'; 
                            setTimeout(function(){
                                counterdownElement.textContent ='2';
                                setTimeout(function(){
                                    counterdownElement.textContent ='1';
                                    setTimeout(function(){
                                        counterdownElement.textContent ='Happy Independence Day!!!';    
                                    },1000);
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);
},1000);