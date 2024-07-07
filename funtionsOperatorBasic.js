// variables que contendrán  los valores y el operador

let value1
let value2
let operator
let operation

// información de los input representada en una etiqueta span, la longitud del numero no puede ser mayor a 9
const inputs = document.querySelectorAll("input")
const info = document.querySelector('#viewValues')


inputs.forEach(input => {
  input.addEventListener('click', ()=>{
    if (info.innerHTML.length < 9){
    info.innerHTML += input.value
    }
  })
});

// lógica para los botones de operadores
const buttonsOperators = document.querySelectorAll('.operators')

buttonsOperators.forEach(button =>{
  button.addEventListener('click', ()=>{
    value1 = info.textContent
    operator = button.textContent
    if(info.textContent == ''){
      if(operation == 0){
        result.textContent = ''
      } else {
        result.textContent = `${operation}  ${operator} `
        value1 = operation
      }
    } else {
    result.textContent = `${info.textContent}  ${operator} `
    info.textContent = ""
    }
  })
})

// lógica para mostrar el resultado de la operación entre dos números
const mostrarOperation = document.querySelector('#result')

mostrarOperation.addEventListener('click', ()=>{
  value2 = info.textContent
  if(info.textContent == ''){
    textContent = ''
  } else if (operator ==''){
    info.textContent = ''
    result.textContent = result.textContent
  } else {
        switch (operator) {
    case '+':
      sum(value1,value2)
      info.textContent = ''
      operator = ''
      break;
    case '-':
      rest(value1,value2)
      info.textContent = ''
      operator = ''
      break
    case '*':
      multiply(value1,value2)
      info.textContent = ''
      operator = ''
      break
    case '/':
      divide(value1,value2)
      info.textContent = ''
      operator = ''
      break
    default:
      result.textContent = ''
      break;
  }
  }
  value1 = operation
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

const sum = (num1, num2)=>{
  operation = parseInt(num1) + parseInt(num2)
  return result.textContent += value2 + " = " + operation
}

const rest = (num1, num2)=>{
  operation = parseInt(num1) - parseInt(num2)
  return result.textContent += value2 + " = " + operation
}

const multiply = (num1, num2)=>{
  operation = parseInt(num1) * parseInt(num2)
  return result.textContent += value2 + " = " + operation
}

const divide = (num1, num2)=>{
  operation = parseInt(num1) / parseInt(num2)
  return result.textContent += value2 + " = " + operation
}

// lógica para el botón "clean"
const cleanButton = document.querySelector('.clean')

cleanButton.addEventListener('click', ()=>{
  info.textContent = ''
  result.textContent = ''
  operation = 0
})