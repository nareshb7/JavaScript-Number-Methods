
const input= document.getElementById('input')
const output = document.getElementById('output')
const output1 = document.getElementById('output1')

const onKeyUp=()=>{
    const input= document.getElementById('input') 
    let inputEl=Number(input.value)
    console.log(inputEl, typeof inputEl)
}

//toString method - It returns a number as a string
const toStringEl = document.getElementById('toString')

 const toString= (x)=>{
    alert('It returns a number as a string')
    output1.innerText= `toString ${x},First it is a ${typeof x}`
    let y = x.toString()
    output.innerText= `${y}, Now It is a  ${typeof y}`
}
toStringEl.onclick=()=> toString(Number(input.value)) 

//toExponential - It returns a string and with number rounded using exponentation 
const toExponentialEl = document.getElementById('toExponential')
const toexponential=(a)=>{
    alert('It returns a string and with number of decimals rounded using exponentation Eg: 456, 4= 4.5600e+2 ')
    output1.innerText= `toexponential ${a},First it is a ${typeof a}`
    let b =prompt('Enter the size of decimals')
    let y =a.toExponential(b)//the 5 number is how many decimals we want after the dot. - 3.66600e+ 0 is the result
    output.innerText= `${y}, Now It is a  ${typeof y}`
}
toExponentialEl.onclick=()=> toexponential(Number(input.value))


//toFixed - It returns a string with specified number of decimals
const toFixedEl= document.getElementById('toFixed')
 const toFixed=(a)=>{
    alert('It returns a string with specified number of decimals Eg: 123, 2= 123.00')
    output1.innerText= `toFixed ${a},First it is a ${typeof a}`
    let b =prompt('Enter the size of decimals')
    let y = a.toFixed(b)
    output.innerText= `${y}, Now It is a  ${typeof y}`
}
toFixedEl.onclick=()=> toFixed(Number(input.value)) // 3.45 

//toPrecision - It reurns a number as a sttring with the specified number of length with rounded
const toPrecisionEl = document.getElementById('toPrecision')
const toPrecision=(a)=>{
    alert('It reurns a number as a sttring with the specified number of length with rounded Eg: 455, 2= 4.6e+ ')
    output1.innerText= `toPrecision ${a},First it is a ${typeof a}`
    let b =prompt('Enter the length of the number')
    let x= a.toPrecision(b)
    output.innerText= `${x}, Now It is a  ${typeof x}`
}
toPrecisionEl.onclick=()=> toPrecision(Number(input.value))// 4.57 

//valueOf - It retruns number as a number

const valueOfEl= document.getElementById('valueOf')
const valueOf=(x)=>{
    alert('It retruns number as a number, string as a string')
    output1.innerText= `valueOfEl ${x},First it is a ${typeof x}`
    let y = x.valueOf()
    output.innerText= `${y}, Now It is a  ${typeof y}`
}

valueOfEl.onclick=()=> valueOf(Number(input.value))

//There are 3 JavaScript methos that can convert a variable into numbers
const numberEl = document.getElementById('Number')
const number=(x)=>{
    alert('It converts variable into numbers ')
    output1.innerText= `Number ${x},First it is a ${typeof x}`
    let y= Number(x)
    output.innerText= `${y}, Now It is a  ${typeof y}`
}

numberEl.onclick=()=> number(input.value)

//parseFloat - Parses its argument and reurns a float number
const parseFloatEl = document.getElementById('parseFloat')
const parsefloat =(x)=>{
    alert('Parses its argument and reurns a float number Eg: 123.01= 123.01')
    output1.innerText= `parsefloat ${x},First it is a ${typeof x}`
    let y = parseFloat(x)
    output.innerText= `${y}, Now It is a  ${typeof y}`
}
parseFloatEl.onclick=()=> parsefloat(input.value)

//parseInt - It returns a Integeer number
const parseIntEl = document.getElementById('parseInt')
const parseint =(x)=>{
    alert('It returns a Integer number Eg: 123.01= 123')
    output1.innerText= `parseint ${x},First it is a ${typeof x}`
    let y = parseInt(x)
    output.innerText= `${y}, Now It is a  ${typeof y}`
}

parseIntEl.onclick=()=> parseint(input.value)


