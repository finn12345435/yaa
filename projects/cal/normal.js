function Add(){

    const num = document.getElementById('Anwser');
    // the anwser to the equation
    const v1 = parseInt(document.getElementById('Input--1').value);
    // number 1
    const v2 = parseInt(document.getElementById('Input--2').value);
    // number 2
    const th = document.getElementById('things').value;
    // operators???? idk what its called tbh

    if(th === '+')
    // if addtition is picked then add
    {
        num.innerHTML = v1 + v2;

        console.log(num.innerHTML);
    
    }
    if(th === '-')
    // if subtraction is picked then subtract
    {
        num.innerHTML = v1 - v2;

        console.log(num.innerHTML);
    
    }
    if(th === 'x')
    // if multiply is picked then multiply
    {
        num.innerHTML = v1 * v2;

        console.log(num.innerHTML);
    
    }
    if(th === '/')
    // if divide is picked then divied
    {
        num.innerHTML = v1 / v2;

        console.log(num.innerHTML);
    
    }
}