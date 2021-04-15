var zmienna = window.prompt("Tekst1","Tekst2");
console.log(zmienna);
console.log(typeof(zmienna));
var button = document.getElementById('button');
var text = document.getElementById('paragraph');

function TextValue(){
    text.innerHTML += ' tekst to:' + document.forms['form'].elements[0].value + '  ';
    console.log(document.forms['form'].elements[0].value);
    console.log(typeof(document.forms['form'].elements[0].value));
};
function NumberValue(){
    text.innerHTML += ' numer to:' + document.forms['form'].elements[1].value + '  ';
    console.log(document.forms['form'].elements[1].value);
    console.log(typeof(document.forms['form'].elements[1].value));
};

button.addEventListener('click', TextValue,false);
button.addEventListener('click', NumberValue, false);