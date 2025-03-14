// arrays///////////////////////////

const myArr = [0, 1, 2, 3, 4, 5]

const myHeros= ["shaktiman", "naagraj" ]

const myArr2= new Array(1, 2, 3, 4, 5);

//console.log(myArr[0])


// arrays methods///


myArr.push(6)
//console.log(myArr)

// push sy value add hoti hai

myArr.pop()
// laste value es sy khtam ho jati hai
//console.log(myArr)

// unshift(5) es mei jobhi value dy gy wo array kay start mei add ho jay gi

// shift() use kary gy to first elemnt ho bhi ho ga wo remove ho jay ga

//console.log(myArr.includes(9))
// es sy dekhy gy ky 9 array mei hai ya nhi

// indexof() es sy kesi bhi valuse ka index dekhy gy
//console.log(myArr.indexOf(9))

// agr jeska index poachy gy wo value array mei ho gi to bta dy ga nahi -1 return kary ga

// declare new array

const newArr = myArr.join()
//console.log(myArr)
//console.log(newArr) // valuse wahi ay gi but tyoe change hoa hai string mei

// 2 v famous methods of arrays arae " slice" "splice"


console.log("A", myArr)
const myN1 = myArr.slice(1,3)
console.log(myN1)
console.log("b", myArr)

const myN2 = myArr.splice(1,3) // splice jab use karty hai tou jo slice wala hai portion hai wo nikal hi gya hai 
console.log("c", myArr)
console.log(myN2)
