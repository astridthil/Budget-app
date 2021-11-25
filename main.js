//anropar .button, vid klick anropas function addToList
document.querySelector(".button").addEventListener("click", addToList)

//dessa kopplas ihop med .list-inkomster och .list-utgifter längre ner
let inkomsterLista = [];
let utgifterLista = [];

function addToList(e) {
    e.preventDefault(); //för att informationen ska stanna på sidan

const select = document.querySelector("select"); //används i if/else statement
const plusMinus = document.querySelector(".select").value; //annropas för att kunna skrivas ut i li (samma med summa och beskrivning)
const summa = document.querySelector(".summa").value;
const beskrivning = document.querySelector(".beskrivning").value;

if(select.value=="+"){
    const div= document.querySelector(".list-inkomster")
    div.innerHTML += `<li>${plusMinus} ${summa} ${beskrivning}</li>`
    inkomsterLista.push(summa)
}
else { //det finns bara två alternativ, därför gäller detta när man väljer -
    const div= document.querySelector(".list-utgifter")
    div.innerHTML += `<li>${plusMinus} ${summa} ${beskrivning}</li>`
    utgifterLista.push(summa) 
}

var utgifterSumma= 0;
for(var i=0; i<utgifterLista.length; i++) {
    utgifterSumma += Number(utgifterLista[i]);
}
var inkomsterSumma= 0;
for(var i= 0; i<inkomsterLista.length; i++) {
    inkomsterSumma += Number(inkomsterLista[i]);
}

const total = document.querySelector(".total")
total.textContent = inkomsterSumma-utgifterSumma //inkomster - utgifter visar total högst upp i budget-appen

//för att göra det tydligare blir total grönt när det är + och rött när det ligger på -
if (total.textContent < 0) {
    document.querySelector(".total").style.color = "rgb(255, 103, 103)";
}
else {
    document.querySelector(".total").style.color = "rgb(139, 197, 139)";
}
}
