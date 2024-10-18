let indexStart = document.location.search.indexOf('=') + 1;
let indexEnd = document.location.search.indexOf('&') ;

let name = document.location.search.slice(indexStart , indexEnd).replaceAll('+',' ');
let welcome = document.querySelector('.info');
welcome.innerHTML = `<h1>Welcome ${name} .</h1>`;