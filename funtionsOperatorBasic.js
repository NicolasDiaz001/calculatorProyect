// variables que contendrán  los valores y el operador

let num1
let num2
let operator

// información de los input representada en una etiqueta span, la longitud del numero no puede ser mayor a 9
const inputs = document.querySelectorAll("input")
const space = document.querySelector('#span')
const info = document.createElement('p')
space.appendChild(info)

  const addValues = ()=>{
    inputs.forEach(input => {
      input.addEventListener('click', ()=>{
        if (info.innerHTML.length < 9){
        info.innerHTML += input.value
        }
      })
    });
  }

// lógica para borra numero numero en la etiqueta span

const delateElement = document.querySelector('#delate')

delateElement.addEventListener('click', ()=>{
  if(info.innerHTML.length > 0){
    info.innerHTML = info.innerHTML.slice(0,-1)
  }
})

// Funciones de operadores básicos
const sum = (num1, num2)=>{
  return num1 + num2
}

const rest = (num1, num2)=>{
  return num1 - num2
}

const multiply = (num1, num2)=>{
  return num1 * num2
}

const divide = (num1, num2)=>{
  return num1 / num2
}

// función que invoca la operación a realizar
const operation = (num1, num2, symbol)=>{
  
}




addValues()