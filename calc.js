// add
function addNumber(){
    let num1=document.getElementById('num1').value
    // convert string into number
    let num1convert=parseInt(num1)
    let num2=document.getElementById('num2').value
    // convert string into number
    let num2convert=parseInt(num2)
    let result=num1convert+num2convert
    let b=document.getElementById('result')
    b.textContent=result
}
addNumber()
// substrct
function substract(){
    let num1=document.getElementById('num1').value
    // convert string into number
    let num1convert=parseInt(num1)
    let num2=document.getElementById('num2').value
    // convert string into number
    let num2convert=parseInt(num2)
    let result=num1convert-num2convert
    let b=document.getElementById('result')
    b.textContent=result
}
substract()
// multiple
function multiple(){
    let num1=document.getElementById('num1').value
    // convert string into number
    let num1convert=parseInt(num1)
    let num2=document.getElementById('num2').value
    // convert string into number
    let num2convert=parseInt(num2)
    let result=num1convert*num2convert
    let b=document.getElementById('result')
    b.textContent=result
}
multiple()
// devide
function devide(){
    let num1=document.getElementById('num1').value
    // convert string into number
    let num1convert=parseInt(num1)
    let num2=document.getElementById('num2').value
    // convert string into number
    let num2convert=parseInt(num2)
    let result=num1convert/num2convert
    let b=document.getElementById('result')
    b.textContent=result
}
devide()