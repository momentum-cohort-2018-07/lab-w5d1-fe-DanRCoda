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
      errorMessage(element.parentElement)
    } else {
      element.parentElement.classList.add('input-valid')
      element.parentElement.classList.remove('input-invalid')
    }
  }
})

function errorMessage (element) {
  let errorDiv = document.createElement('div')
  errorDiv.classList.add('error-msg')
  element.appendChild(errorDiv)

  let label = document.querySelector('label')
  let requiredField = label.getAttribute('for')
  errorDiv.innerText = requiredField + ' is required'
}

function carValid (element) {
  let carDiv = document.getElementById('car-field')
  let errorDiv = document.createElement('div')
  errorDiv.classList.add('error-msg')
  carDiv.appendChild(errorDiv)

  errorDiv.innerHTML = 'field is required'
}

function clearError () {
  let errorMsgs = document.querySelectorAll('.error-msg')
  for (let errorMsg of errorMsgs) {
    errorMsg.remove()
  }
}
