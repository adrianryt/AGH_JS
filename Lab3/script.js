var ustaw = document.getElementById('Ustaw');
var skasuj = document.getElementById('Skasuj');

function addCSS(){
    document.styleSheets[0].disabled = false;
}

function removeCSS(){
    document.styleSheets[0].disabled = true;
}

ustaw.addEventListener('click',addCSS,false);
skasuj.addEventListener('click',removeCSS, false);