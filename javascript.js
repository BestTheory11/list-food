const form = document.getElementById("form")
const food = document.getElementById("food");
const day = document.getElementById("weekDays");
const menuFood = document.querySelectorAll(".menuFoods section");
const array = [].slice.call(menuFood);
const clearBtn = document.getElementById("clear");
let span = document.querySelectorAll(".textFood")
// var menu = [];
var Lmenu;
let elementos;
var Vfood;
var Vday;
var localDay


// elementos = array.find(function elementos (elemento){
//     Vday = day.value;
//     return elemento.id == Vday;
// })
// if(localStorage.length !== 0){
//     array.forEach((Element)=>{
//         Element.innerHTML = localStorage.getItem(Vday);
//         console.log(Element)
//     })
//     console.log("ya no es literalmente 0 wtfs")
// }
// form.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     Vfood = food.value;
//     Vday = day.value;
//     menu.push(Vfood)
//     item()
// })
// function item(){
//     elementos = array.find(function elementos (elemento){
//         return elemento.id ==  Vday ;
//     })
//     localStorage.setItem(Vday, Vfood )
    
//     elementos.innerHTML = Vfood;
// }
if(localStorage.length !== 0){
    array.forEach((Element)=>{
        Element.innerHTML = localStorage.getItem(Element.id)
        // Element.innerHTML = Element.id = localStorage.getItem(Element.id)
        // console.log(Element.id)
    })
}
item()
day.addEventListener("click",()=>{
    item()
})
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    Vday = day.value;
    Vfood = food.value;
    localStorage.setItem(Vday,Vfood)
    // Lmenu = localStorage.setItem("menu", JSON.stringify(menu))
    newFood()
    item()
    addFood()
    alert("acti")
})
function newFood (){
    let Nfood= {
        name: Vday,
        cont: Vfood
    }
    // menu.push(Nfood)
    // console.log(menu)
}
function item(){
    elementos = array.find(function elementos (elemento){
        Vday = day.value
        return elemento.id ==  Vday ;
    })
}
function addFood(){
    if(localStorage.length !== 0){
        elementos.innerHTML = localStorage.getItem(Vday);
    }else{
        elementos.innerHTML = Vfood;
    }
}
clearBtn.addEventListener("click",()=>{
    localStorage.clear()
    menuFood.forEach((Element)=>{
        Element.innerHTML = "";
    })  
})



