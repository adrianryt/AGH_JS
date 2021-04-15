var rows = document.getElementById("row");
var cols = document.getElementById("col");
var table = document.getElementById("table")
var counter = document.getElementById("counter");
var counter_num = 0;
var row_Number;
var col_Number;
var classList = ["red_1", "red_2", "red_3","green_1","green_2","green_3"];
var myVar;
var myVar2;

function changeRows(){
    row_Number = parseInt(rows.value);
    console.log(row_Number);
}
function changeCols(){
    col_Number = parseInt(cols.value);
    console.log(col_Number);
}

function changePkt(){
    if(this.className === "red_1"){
        counter_num-=1;
        counter.innerHTML=counter_num;
    }
    else if (this.className === "red_2"){
        counter_num-=2;
        counter.innerHTML=counter_num;
    }
    else if (this.className === "red_3"){
        counter_num-=3;
        counter.innerHTML=counter_num;
    }
    else if (this.className === "green_1"){
        counter_num+=1;
        counter.innerHTML=counter_num;
    }
    else if (this.className === "green_2"){
        counter_num+=2;
        counter.innerHTML=counter_num;
    }
    else if (this.className === "green_3"){
        counter_num+=3;
        counter.innerHTML=counter_num;
    }
}

function start(){
    for(let i = 0; i < row_Number; i++){
        let tmpTr = document.createElement("tr");
        table.appendChild(tmpTr);
        for(let j=0; j<col_Number;j++){
            let tmpTp = document.createElement("td");
            tmpTp.className = classList[Math.floor(Math.random() * 6)];
            tmpTp.addEventListener("click",changePkt,false);
            table.lastChild.appendChild(tmpTp);
        }
    }
    
    myVar = window.setInterval(changeTwoCell , 1000);
    myVar2 = window.setInterval(changeTable , 3000);
    window.setInterval(clearT , 30000);
}

function clearT(){
    clearInterval(myVar);
    clearInterval(myVar2);
}

function updateTable(){
    console.log("siema");
}

function changeTwoCell(){
    for(let i =0; i<2;i++){
        let r1 = Math.floor(Math.random() * row_Number);
        let r2 = Math.floor(Math.random() * col_Number);
        let newColor = classList[Math.floor(Math.random() * 6)];
        while(table.children[r1].children[r2].className == newColor){
            newColor = classList[Math.floor(Math.random() * 6)];
        }
        table.children[r1].children[r2].className = newColor;
    }
}

// mam usuwać LOSOWY WIERSZ TABELI A NIE OSTATNI BO POLAK TO KURWA BIATA

function changeTable(){
    let r1 = Math.floor(Math.random() * 2);
    console.log(r1);
    if(r1 === 0){//dodawanie
        r1 = Math.floor(Math.random() * 2);
        console.log(r1);
        if(r1 === 0){ //wiersza
            let tmpTr = document.createElement("tr");
            table.appendChild(tmpTr);
            for(let j=0; j<col_Number;j++){
                let tmpTp = document.createElement("td");
                tmpTp.className = classList[Math.floor(Math.random() * 6)];
                tmpTp.addEventListener("click",changePkt,false);
                table.lastChild.appendChild(tmpTp);
            }
            row_Number++;
        }else{
            for(let i=0; i<row_Number;i++){
                let tmpTp = document.createElement("td");
                tmpTp.className = classList[Math.floor(Math.random() * 6)];
                tmpTp.addEventListener("click",changePkt,false);
                table.children[i].appendChild(tmpTp);
            }
            col_Number++;
        }
    }else{ //usuwanie
        r1 = Math.floor(Math.random() * 2);
        console.log(r1);
        if(r1 === 0){ //wiersza
            table.removeChild(table.lastChild);
            row_Number--;
        }else{ //kolumny
            for(let i=0; i<row_Number;i++){
                table.children[i].removeChild(table.children[i].lastChild);
            }
            col_Number--;
        }
    }
}


rows.addEventListener("change", changeRows);
cols.addEventListener("change", changeCols);

