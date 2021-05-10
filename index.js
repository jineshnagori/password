var password;
var pass = "jinesh";

password = prompt('Please enter your password to view this page!', ' ');

if (password == pass)
  document.getElementById('hello');
else {
  window.location = "https://www.betaprogrammer.ml";
}