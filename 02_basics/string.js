
const name= "ayesha-nafis"
const repoCount= 40

//console.log(name + repoCount) // outdated synatx


//console.log(`hello my name is ${name} and my count is ${repoCount}`)


// one more mehod to declare string

const gameName= new String('ayesha')
//console.log(gameName[0])

//console.log(gameName.length)
//console.log(gameName.toUpperCase())
//console.log(gameName.charAt(2))
//console.log(gameName.indexOf('s'))

const newString = gameName.substring(0,4)
//console.log(newString)

const anotherString = gameName.slice(0,4)
//console.log(anotherString)
// slice mei negative value dy sakty hain

const newStringOne= "   ayesha   "
//console.log(newStringOne)
//console.log(newStringOne.trim())


const url= "https//hitest.com%20abc"
console.log(url.replace('%20', '-'))


