
function addTwonumbers (a,b)
{
    var c =a + b;
    return c
}

var result = addTwonumbers(100,20);
console.log(result);



function discount(actAmt,discountGiven) 
{
    var cartAmount = actAmt-discountGiven;
    return cartAmount;
}

var disc = discount(1000,100)
console.log(disc);

var shopExp = function(a,b)
{
    var c = a + b;
    return c
}
console.log(shopExp(10,20));


//Function from var
var shopExp = function()
{
    return "Jerome Oswald Ebenezer J";
}
console.log(shopExp());


//IIFE
(function(a,b)
{
    console.log("This is from IIFE", a*b);
})(10,20);

var firstName = (firstName) => {
    console.log("Arrow Function:", firstName )
}

firstName("Jerome Oswald Ebenezer J")