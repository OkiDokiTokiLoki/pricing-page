const rangeInput = document.querySelector('#rangeInput');
rangeInput.addEventListener('input', (e) => {
    numInput.value = e.target.value;
    priceCalc(e);
})

const numInput = document.querySelector('#employeeCount');
numInput.addEventListener('input', (e) => {
    rangeInput.value = parseInt(numInput.value);
    priceCalc(e);
})

function priceCalc(e){
    const price = document.querySelector('#priceDisplay');

    if (e.target.value < 100){
        price.textContent = '$10.00';
    } else if (rangeInput.value < 500 ){
        price.textContent = '$8.00';
    } else if (rangeInput.value < 1000 ){
        price.textContent = '$7.00';
    } else if (rangeInput.value < 2000 ){
        price.textContent = '$6.00';
    } else if (rangeInput.value < 3000 ){
        price.textContent = '$5.00';
    } else{
        price.textContent = '$4.00';
    }
}