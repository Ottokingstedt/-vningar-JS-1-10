
//alt two

function addNumber(a,b){

    console.log(a+b)

}

addNumber (12, 40);

var lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/* for(var i=0; i<lista.length; i+=2){
    console.log(lisa[i])
}
*/
for (var i=0; i<lista.length; i++)

{
    //if()
    if (lista[i]%2==0){
        console.log(lista[i], "equal number")
    }
   else console.log(lista[i], "odd number")
}


// 3. tasks for map.

    for(var i= 0; i<lista.length; i++)
    {

        console.log (lista[i])

    }

    lista.map (  (e) => console.log(e))

    // 4. tasks for calculate

    function calculate (a, b){
        return a+b; 
    }

    const summa= document.querySelector (".summa")

document.querySelector(".summa").textContent= calculate (140, 60) 

var count =  (a, b) => {
    console.log (a+ b)
    return a + b
}

count(10,30)

//5.

var username = "Kingstedt"
function skrivaUtname() {
    username= "Kingstedt"
}

skrivaUtname ();
console.log(username);

// alt 5.1

const InputString = (text) => {
    console.log(text)
    return text
}

//orderHistory

const countTotalShopping = (product1, product2) => {
    return product1 + product2
}

const shoppingHistory1 = countTotalShopping(100, 400);
const shoppingHistory2 = countTotalShopping(1000, 1400);
const shoppingHistory3 = countTotalShopping(2000, 3000);
console.log (shoppingHistory1 + shoppingHistory2 + shoppingHistory3);



const returnedText = InputString("Kingstedt");

// 6. task for resvere namne (string)


const name = "Kingstedt";
// split ()
let convertedName = name.split("")
console.log(convertedName); 
const reversedName= convertedName.reverse();
const stringName = reversedName.join("")
console.log(stringName);

// alt 6.1  

// git init 
// git add .

// 7.1  Remove my list 
// 

function myFunction() {
    var list = document.getElementById("myList");
    list.removeChild(list.childNodes[1]);
}
//  7.2 add

const addCoffee = () => {

const cappuccino = document.createElement('li')
cappuccino.textContent = "Cappuccino"
const coffee = document.getElementById('coffee')
coffee.appendChild(cappuccino)
}

//8

function reverseString(x) {
    
    return x.split("").reverse().join("");
  }
  const text = reverseString("Kingstedt");
  console.log(text)
  

//9
function palindrome(str) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase(). replace(re, ''); 
    var len = str.length; 
    for (var i = 0; i < len/2; i++) {
        if (str[i] !== str[len - 1 -i]) {
            return false;
        }
    }
    return true;
}
const returned= palindrome("Otto")
console.log(returned)


// 10

function myFunction_1() {
    let str = document.getElementById("demo").innerHTML;
    document.getElementById("demo").innerHTML = str.replace("Havard University", "Medieinstitutet");;
}
/*
//assigns list

const listItem = document.querySelector ("#list-Item").value;

listItems.push(listItem);

const li = document.createElement("li");
const list = document.querySelector(".list-items")
list.appendChild(li);

listItems.map ( (e) => {
    li.textContent = e;
})
*/
//key object 

const elevInfo = {
    key: "value",
    key: "value2"
}

console.log(elevInfo.key2)

elevInfo.key3 = 'value3'
console.log (elevInfo.key3)

elevInfo.key5 = {
    embeddObject: "value 5"
}

console.log(elevInfo.key4);

elevInfo,key5 = {
    embeddedarry: [2, 3, 4, 5, 6, 10]
}

console.log(elevInfo)

const elevInformation= {



    name:"Kingstedt",
    adress: { roadname: "abc", postcode:12345},
    shoppingList: ["something 1", "something 2"],
    skrivaUtInfo: function skrivUt () {
        console.log(elevInformation.name)
        return 0;
    } 
    
}

console.log(elevInformation.skrivaUtInfo())


const embeddedList = [ [100, 200, 300, 400, 500], {name2: "value"} ,["something1", "something2", "something3", "something4", { name: "value"}]] 

console.log(embeddedList[2][3].name);
console.log(embeddedList[1].name2);


// function expression
/*
const doSum = () => {
return
(
        1+2
    )
}

const summa= doSum();
console.log(summa);
*/

// copy an object

let personInfo = {
    name: "Otto",
    adress: "seamus street"
}

let personInfo2 = {
    shoppingList: "The person's shopping list"
}

personInfo = { ...personInfo, personInfo2}
console.log (personInfo);

//copy list / spread
let list1= [12, 4, 5, 6, 299]
list1 = [...list1, "nytt value"]
console.log(list1)