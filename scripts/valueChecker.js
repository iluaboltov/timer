
const minValue = document.getElementById("min-value")
const secValue = document.getElementById("sec-value")

document.querySelectorAll('input[type="number"]').forEach((input)=>{
    input.oninput = () =>{
        if(input.value.length > input.maxLength) input.value = input.value.slice(0, input.maxLength)
    }
} )
minValue.oninput = ()=>{
    if(minValue.value.length > minValue.maxLength) minValue.value = 60
}
secValue.oninput = ()=>{
    if(secValue.value.length > secValue.maxLength) secValue.value = 60
}