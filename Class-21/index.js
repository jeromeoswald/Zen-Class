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
var statusIntervalId;

function openNewWidow() {
    var url = document.getElementById("urlInput").value;
    if(url){
        myWindow = window.open(url,"_blank");
        setTimeout(function() {
            if(myWindow){
                myWindow.close();
                myWindow = null;
            } else {
                appendAlert("No Window is Currently Open!!", "success");
            }
        },300000)
    } else {
        appendAlert("Please Enter the URL", "danger");
    }
}


function openNewWindow(){
    var url = document.getElementById("urlInput").value
    if(url){
        myWindow=window.open(url, '_blank');
    } else {
        // alert("Please Enter the URL");
        appendAlert("Please Enter the URL", "danger");
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

function getScreenInfo(event){
    console.log("Screen Info Event", event);
    appendAlert("Screen Width" + window.innerWidth + ", Height" + window.innerHeight);
}

function reloadWindow() {
    // if(myWindow && !myWindow.closed) {
        window.location.reload();
    // }
}

function moveWindow(xPos,yPos){
    // if(myWindow && !myWindow.closed){
        window.moveTo(xPos,yPos);
    // }
}

function resizeWindow(width, height){
    // if(myWindow && !myWindow.closed){
        window.resizeTo(width, height);
    // }
}

function display(event,str){
    console.log("Key Pressed Event", event);
    appendAlert(str + "- EventTriggered!!!" , "danger")
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