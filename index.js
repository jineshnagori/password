var password;
var pass = "jinesh";

password = prompt('Please enter your password to view this page!', '');

if (password == pass)
  document.getElementById('hello');
else {
  window.location = "https://www.betaprogrammer.ml";
}

document.onkeydown = function(e) {
    if(e.keyCode == 123) {
     return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
     return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
     return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
     return false;
    }

    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)){
     return false;
    }      
}

$(document).bind("contextmenu",function(e){
  return false;
});
