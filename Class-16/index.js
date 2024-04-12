// var myGameWindow = openNewWindow ('https://cssbattle.dev/battles');

// if(isWindowOpen(myGameWindow)){
//     console.log("Still Playing");
// }else {
//     console.log("Game Over!!");
// }

// closeWindow(myGameWindow);

// if(isWindowOpen(myGameWindow)){
//     console.log("Still Playing");
// }else {
//     console.log("Game Over!!");
// }

// function openNewWindow(url){
//     var newWindow = window.open(url, '_blank');
//     return newWindow;
// }

// function closeWindow(windowToClose){
//     windowToClose.close();
// }

// function isWindowOpen(windowToCheck){
//     return !windowToCheck.closed;
// }


var myWindow;


function openNewWindow(){
    var url = document.getElementById("urlInput").value
    if(url){
        myWindow=window.open(url, '_blank');
    } else {
        // alert("Please Enter the URL");
        appendAlert("Please Enter the URL", danger);
    }
}


function closeWindow(){
    if(window){
        myWindow.close();
        myWindow = null;
    }else{
        // alert("No Window is Currently Open!!");
        appendAlert("No Window is Currently Open!!", "success");
    }
}

function checkWindowsStatus() {
    if(myWindow && !myWindow.closed){
        // alert("The Window is still open!!");
        appendAlert("The Window is still open!!", "success");
        
    }else{
        // alert("The Window is closed!!");
        appendAlert("No Window is Currently Open!!", "danger");
    }
}

function startStatusCheck(){
    statusIntervalId = setInterval(function(){
        if(myWindow && !myWindow.closed){
            // alert("The Window is still open!!");
            appendAlert("The Window is still open!!", "success");
            
        }else{
            // alert("The Window is closed!!");
            appendAlert("No Window is Currently Open!!", "danger");
            clearInterval(startStatusCheck)
        }
    }, 5000);

}

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('');

  alertPlaceholder.append(wrapper);
};