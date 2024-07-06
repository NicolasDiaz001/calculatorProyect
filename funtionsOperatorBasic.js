// variables que contendrán  los valores y el operador

let value1
let value2
let operator

// información de los input representada en una etiqueta span, la longitud del numero no puede ser mayor a 9
const inputs = document.querySelectorAll("input")
const space = document.querySelector('#viewValues')
const info = document.createElement('p')
space.appendChild(info)

inputs.forEach(input => {
  input.addEventListener('click', ()=>{
    if (info.innerHTML.length < 9){
    info.innerHTML += input.value
    viewResult.textContent = ''
    }
  })
});

// lógica para los botones de operadores
const buttonsOperators = document.querySelectorAll('.operators')

buttonsOperators.forEach(button =>{
  button.addEventListener('click', ()=>{
    value1 = info.textContent
    operator = button.textContent
    info.textContent = ""
  })
})

// lógica para mostrar el resultado de la operación entre dos números
const mostrarOperation = document.querySelector('#result')

mostrarOperation.addEventListener('click', ()=>{
  value2 = info.textContent
  switch (operator) {
    case '+':
      sum(value1,value2)
      info.textContent = ''
      break;
    case '-':
      rest(value1,value2)
      info.textContent = ''
      break
    case '*':
      multiply(value1,value2)
      info.textContent = ''
      break
    case '/':
      divide(value1,value2)
      info.textContent = ''
      break
    default:
      break;
  }
})

// lógica para borra numero numero en la etiqueta span
const delateElement = document.querySelector('#delate')

delateElement.addEventListener('click', ()=>{
  if(info.innerHTML.length > 0){
    info.innerHTML = info.innerHTML.slice(0,-1)
  }
})

// Funciones de operadores básicos
const result = document.querySelector('#viewResult')
const viewResult = document.createElement('p')
const sum = (num1, num2)=>{
  let operation = parseInt(num1) + parseInt(num2)
  viewResult.textContent = operation
  return result.appendChild(viewResult)
}

const rest = (num1, num2)=>{
  let operation = parseInt(num1) - parseInt(num2)
  viewResult.textContent = operation
  return result.appendChild(viewResult)
}

const multiply = (num1, num2)=>{
  let operation = parseInt(num1) * parseInt(num2)
  viewResult.textContent = operation
  return result.appendChild(viewResult)
}

const divide = (num1, num2)=>{
  let operation = parseInt(num1) / parseInt(num2)
  viewResult.textContent = operation
  return result.appendChild(viewResult)
}