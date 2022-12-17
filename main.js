const form = document.getElementById('forms')

form.addEventListener('submit', function(e) {
    var nValido = false
    e.preventDefault();

    let numberOne = document.getElementById('firstNumber');
    let numberTwo = document.getElementById('secondNumber');
    let successMessage = `O número ${numberTwo} é maior que ${numberOne}`

    const valid = nValido
    if (numberTwo > numberOne) {
        
        const containerSuccessMessage = document.getElementById('message').innerHTML = successMessage;
        document.getElementById('message').innerHTML = successMessage;


    } else{
        alert(` O numero ${numberTwo} não é maior que ${numberOne} `);
    }

})




console.log(form)