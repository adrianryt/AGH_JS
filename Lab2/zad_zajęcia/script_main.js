var button = document.getElementById('button');
var text = document.getElementById('paragraph');
var check = document.getElementById('checkbox');
var newMap = new Map();
var words_checkOn = new Map();

function addToDick(){
    var word = document.forms['form'].elements[0].value;
    var N = document.forms['form'].elements[1].value;
    if(check.checked){
        for(slowo of word.split(' ')){
            if(words_checkOn.has(slowo)){
                words_checkOn.set(slowo, (words_checkOn.get(slowo) + 1));
            }
            else{
                words_checkOn.set(slowo, 1);
            }
        }
        
        text.innerHTML += "Informacje: <br>"
        for (let [key, value] of words_checkOn) {
            text.innerHTML +=  key + ' ilosc ' + value + '<br>';
        }
    }
    else{
        newMap = new Map();
        for(slowo of word.split(' ') ){
            if(newMap.has(slowo)){
                newMap.set(slowo, (newMap.get(slowo) + 1));
            }
            else{
                newMap.set(slowo, 1);
            }

        }
        for (let [key, value] of newMap) {
            text.innerHTML +=  key + ' ilosc ' + value + '<br>';
        }
    }
    
    if(check.checked){
        text.innerHTML += "Wyrazy o długosci N: <br>";
        for (let [key, value] of words_checkOn) {
            if(key.length == N){
                text.innerHTML +=  key + '<br>';
            }
        }
    }
    else{
        text.innerHTML += "Wyrazy o długosci N: <br>";
        for (let [key, value] of newMap) {
            if(key.length == N){
                text.innerHTML +=  key + '<br>';
            }
        }
    }
   
    
}

button.addEventListener('click', addToDick,false);