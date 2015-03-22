
function loginToTlushim(tab) {
 console.log("in login to tlushim");
  chrome.tabs.executeScript({
    code: 'document.getElementsByName("id_num")[0].value="'+id+'";document.getElementsByName("password")[0].value="'+tpass+'";document.getElementsByName("connect")[0].click()'
  });
    //if time is before noon do a login otherwise do a logout
    var myDate = new Date(); 
    if ( myDate.getHours() < 12 ) { 
        setTimeout(login,3000);
    } else {
        setTimeout(logout,3000);
    }
}

function login(){
    console.log("in login");
  chrome.tabs.executeScript({
      code:'document.getElementById("in").click();document.getElementsByTagName("input")[2].click()'
  });
    setTimeout(redirectToClock,3000);
}

function redirectToClock() {
    console.log("in login klidim, redirecting to clock view");
  chrome.tabs.executeScript({
      code:'document.getElementsByClassName("link")[0].click()'
  });
    setTimeout(loginKlidim,1000);
}

function loginKlidim(){
  chrome.tabs.executeScript({
      code:'document.getElementById("job").value =1;document.getElementById("in").click();document.getElementsByTagName("input")[2].click()'
  });
    console.log("Done login");
}

function logout(){
    console.log("in logout");
  chrome.tabs.executeScript({
      code:'document.getElementById("out").click();document.getElementsByTagName("input")[2].click()'
  });
}

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.create({url:"https://www.tlushim.co.il/",active:true},loginToTlushim);

});
