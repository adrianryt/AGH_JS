var spans = document.getElementsByTagName("span");
var formNumber = document.getElementById("counter");
var content = document.getElementById("content");
var counter = parseInt(formNumber.value);
var spansNumber = 10;

function changeCounter(){
    counter = formNumber.value;
    updateSpans();
}

function updateSpans(){
    elements = [];
    for(span of spans){
      let tmpElement = document.createElement("span");
      tmpElement.appendChild(document.createTextNode(counter));
      elements.push(tmpElement);
    }
    if (elements.length > 0) {
        for (let i = 0; i < elements.length; i++) {
          spans[0].remove();
        }
        for (let i = 0; i < elements.length; i++) {
          content.appendChild(elements[i]);
        }
    }
}

function mainFunction(){
    if(counter > 0){
        updateSpans();
    }
    if(counter === 0){
        formNumber.value = 0;
        updateSpans();
    }
    counter-=1;
}

formNumber.addEventListener("change", changeCounter);

window.setInterval(mainFunction , 2000);

