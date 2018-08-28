console.log('Add validation!')

document.getElementById('parking-form').addEventListener('submit', function (e) {
  e.preventDefault()
  clearError()
  let inputElements = document.getElementsByTagName('input')
  for (let element of inputElements) {
    if (element.id === 'car-year' || element.id === 'car-make' || element.id === 'car-model') {
      console.log(element.id)
      if (element.value.trim() === '') {
        element.parentElement.classList.add('input-invalid')
        element.parentElement.classList.remove('input-valid')
        carValid(element)
      } else {
        element.parentElement.classList.add('input-valid')
        element.parentElement.classList.remove('input-invalid')
      }
    } else if (element.value.trim() === '') {
      element.parentElement.classList.add('input-invalid')
      element.parentElement.classList.remove('input-valid')
      errorMessage(element)
    } else {
      element.parentElement.classList.add('input-valid')
      element.parentElement.classList.remove('input-invalid')
    }
  }
})

function errorMessage (element) {
  let errorDiv = document.createElement('div')
  errorDiv.classList.add('error-msg')

  let requiredField = element.getAttribute('id')
  errorDiv.innerText = capitalize(requiredField) + ' is required'
  element.parentElement.appendChild(errorDiv)
}

function carValid (element) {
  let carDiv = document.getElementById('car-field')
  let errorDiv = document.createElement('div')
  errorDiv.classList.add('error-msg')
  
  let requiredField = element.getAttribute('id')
  errorDiv.innerHTML = capitalize(requiredField) + ' is required'
  carDiv.appendChild(errorDiv)
}

function clearError () {
  let errorMsgs = document.querySelectorAll('.error-msg')
  for (let errorMsg of errorMsgs) {
    errorMsg.remove()
  }
}

function capitalize (requiredField) {
  return requiredField[0].toUpperCase() + requiredField.slice(1)
}

