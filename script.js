const rangeInput = document.querySelector('#rangeInput');
const numInput = document.querySelector('#employeeCount');
const price = document.querySelector('#priceDisplay');

rangeInput.addEventListener('input', (e) => {

    numInput.value = e.target.value;

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
})

numInput.addEventListener('input', (e) => {
    
    rangeInput.value = parseInt(numInput.value);

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
})
