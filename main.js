const form = document.getElementById('forms')

form.addEventListener('submit', function(e) {
    var nValido = false
    e.preventDefault();

    let numberOne = document.getElementById('firstNumber');
    let numberTwo = document.getElementById('secondNumber');
    let successMessage = `O número ${numberTwo} é maior que ${numberOne}`

    const valid = nValido
    if (numberTwo > numberOne) {
        
        alert(` O número ${numberTwo.value} é maior que ${numberOne.value} `);

    } else{
        alert(` O numero ${numberTwo.value} não é maior que ${numberOne.value} `);
    }

})




console.log(form)