const form = document.getElementById('forms')

form.addEventListener('submit', function(e) {
    
    e.preventDefault();

    let numberOne = document.getElementById('firstNumber');
    let numberTwo = document.getElementById('secondNumber');
    let successMessage = `O número ${numberTwo.value} é maior que ${numberOne.value}`

    
    if (numberTwo.value > numberOne.value) {
        
        alert(successMessage)

    } else {
    
        alert('não é possivel validar')
    }

})




console.log(form)